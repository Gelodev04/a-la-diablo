import React from 'react'

export const Video = () => {
  return (
    <div className=" max-w-[900px] rounded overflow-hidden shadow-2xl mx-auto">
  <video
    autoPlay
    loop
    muted
    playsInline
    preload='auto'
    className="w-full h-full object-contain"
    poster="/images/logo.jpeg"
  >
    <source src="/videos/hot-sauce.mp4" type="video/mp4" />
    <source src="/videos/hot-sauce.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
</div>


  
  )
}
