import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, User, Clock, Star } from 'lucide-react'

const links = [
  { name: 'Dashboard', path: '/dashboard', icon: Home },
  { name: 'Profile', path: '/profile', icon: User },
  { name: 'History', path: '/history', icon: Clock },
  { name: 'Important', path: '/important', icon: Star },
]

const Sidebar = () => {
  const { pathname } = useLocation()
  return (
    <div className="w-64 bg-black text-white min-h-screen flex flex-col justify-between p-4">
      <div>
        <h1 className="text-2xl font-bold mb-10 tracking-tight">TraderTweets</h1>
        <ul className="space-y-2">
          {links.map(link => {
            const isActive = pathname === link.path
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`group flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  <link.icon
                    className={`w-7 h-7 transition ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 group-hover:text-white'
                    }`}
                  />
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <footer className="text-xs text-gray-400 mt-8">©2025 TraderTweets</footer>
    </div>
  )
}

export default Sidebar
