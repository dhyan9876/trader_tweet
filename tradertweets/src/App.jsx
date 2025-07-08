// src/App.jsx
import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import History from './pages/History'
import Important from './pages/Important'
import { Routes, Route } from 'react-router-dom'
import { supabase } from './supabaseClient'

const App = () => {
  const [status, setStatus] = useState('Checking...')

  useEffect(() => {
    // Test connection by trying to fetch from the 'posts' table
    const testConnection = async () => {
      const { data, error } = await supabase.from('posts').select('*').limit(1)
      if (error) {
        setStatus('❌ Not connected: ' + error.message)
      } else {
        setStatus('✅ Connected to Supabase!')
      }
    }
    testConnection()
  }, [])

  return (
    <div className="flex h-screen w-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-6">
        {/* Supabase connection status box */}
        <div className="p-4 mb-4 bg-white rounded shadow font-mono">
          <strong>Supabase Connection Status:</strong> {status}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/important" element={<Important />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
