import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import Upload from '../components/Upload'

const Dashboard = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error) setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <Upload onUpload={fetchPosts} />
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded shadow p-4 flex gap-4 items-center">
            <img src={post.image_url} alt="Trade" className="w-32 h-32 object-cover rounded" />
            <div>
              <div className="text-gray-700">{post.note}</div>
              <div className="text-xs text-gray-400">{new Date(post.created_at).toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard 