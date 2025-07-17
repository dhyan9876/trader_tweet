// src/App.jsx
import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './supabaseClient'
import Homepage from './pages/Homepage'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'  // renamed from Home
import Profile from './pages/Profile'
import History from './pages/History'
import Important from './pages/Important'

const App = () => {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  // If not authenticated, show homepage
  if (!session) {
    return <Homepage />
  }

  // If authenticated, show dashboard with sidebar
  return (
    <div className="flex h-screen w-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/important" element={<Important />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
