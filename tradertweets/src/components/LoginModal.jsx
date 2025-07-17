// src/components/LoginModal.jsx
import React from 'react'
import { X } from 'lucide-react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../supabaseClient'

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">Welcome to TraderTweets</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Auth Component */}
        <div className="p-6">
          <Auth 
            supabaseClient={supabase} 
            appearance={{ 
              theme: ThemeSupa,
              style: {
                button: {
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                },
                anchor: {
                  color: '#3B82F6',
                  textDecoration: 'none',
                },
                message: {
                  color: '#DC2626',
                  fontSize: '14px',
                },
                input: {
                  borderRadius: '8px',
                  fontSize: '14px',
                  borderColor: '#D1D5DB',
                },
                label: {
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: '500',
                },
              },
            }}
            providers={[]}
            redirectTo={window.location.origin}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginModal 