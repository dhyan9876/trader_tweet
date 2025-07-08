import React, { useState } from 'react'
import { supabase } from '../supabaseClient'

const Upload = ({ onUpload }) => {
  const [image, setImage] = useState(null)
  const [note, setNote] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!image && !note) {
      alert('Please upload an image or write a note.')
      return
    }

    let imageUrl = null

    // If image is provided, upload to Supabase Storage
    if (image) {
      const fileExt = image.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExt}`
      const { error: uploadError } = await supabase
        .storage
        .from('screenshots')
        .upload(fileName, image)
      if (uploadError) {
        alert('Image upload failed: ' + uploadError.message)
        return
      }
      const { data: publicUrlData } = supabase
        .storage
        .from('screenshots')
        .getPublicUrl(fileName)
      imageUrl = publicUrlData.publicUrl
    }

    // Insert into posts table (note or image or both)
    const { error: insertError } = await supabase
      .from('posts')
      .insert([{
        note: note || null,
        image_url: imageUrl,
        created_at: new Date().toISOString()
      }])

    if (insertError) {
      alert('Failed to save trade: ' + insertError.message)
      return
    }

    setImage(null)
    setNote('')
    if (onUpload) onUpload()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <input
        type="file"
        accept="image/*"
        onChange={e => setImage(e.target.files[0])}
        className="mb-2"
      />
      <textarea
        value={note}
        onChange={e => setNote(e.target.value)}
        placeholder="Write a note (optional)..."
        className="w-full mb-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Upload
      </button>
    </form>
  )
}

export default Upload
