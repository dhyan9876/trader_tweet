// src/pages/Homepage.jsx
import React, { useState } from 'react'
import { TrendingUp, BarChart3, Camera, Shield } from 'lucide-react'
import LoginModal from '../components/LoginModal'

const Homepage = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl font-bold">TraderTweets</h1>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition"
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Track Your Trading Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Capture, analyze, and share your trading screenshots with notes. 
            Build a visual diary of your trading evolution.
          </p>
          <button
            onClick={() => setShowLogin(true)}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-medium transition transform hover:scale-105"
          >
            Start Trading Journal
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Screenshot & Note</h3>
            <p className="text-blue-100">
              Upload trading screenshots with detailed notes and analysis
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track History</h3>
            <p className="text-blue-100">
              View your complete trading history and identify patterns
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mark Important</h3>
            <p className="text-blue-100">
              Highlight your best trades and key learning moments
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to improve your trading?</h3>
          <p className="text-blue-100 mb-6">
            Join traders who are already tracking their progress with TraderTweets
          </p>
          <button
            onClick={() => setShowLogin(true)}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-medium transition"
          >
            Get Started Free
          </button>
        </div>
      </main>

      {/* Login Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  )
}

export default Homepage 