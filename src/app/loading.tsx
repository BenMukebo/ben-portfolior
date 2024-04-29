import React from 'react'

const Loading = () => {
  return (
    <div>
      <span className="inline-block loader w-16 h-16 relative">
        <span className="absolute inset-0 rounded-full shadow-inner bg-white-light"></span>
        <span className="absolute inset-0 rounded-full shadow-inner bg-brand-foreground animate-spin"></span>
      </span>
    </div>
  )
}

export default Loading;
