import React from 'react'
import Navbar from '@/components/feed/Navbar'

const LayoutFeed = ({children}) => {

  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* ========== NAVBAR ========== */}
      <Navbar />
      {children}
    </div>
  )
}

export default LayoutFeed