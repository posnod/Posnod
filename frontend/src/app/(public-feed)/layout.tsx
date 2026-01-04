import React from 'react'
import Link from 'next/link'
import LinkFeature from '@/components/itemsPublicFeed/LinkFeature'

interface RootFeadProps {
  children: React.ReactNode
}

const RootFead: React.FC<RootFeadProps> = ({children}) => {
  return (
    <>
      <LinkFeature />
      {/* Content Fead */}
      <div>
        {children}
      </div>
    </>
  )
}

export default RootFead