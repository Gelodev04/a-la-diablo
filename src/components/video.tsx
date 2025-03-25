import React from 'react'

export const Video = () => {
  return (
    <div className=" max-w-[1000px] rounded overflow-hidden ">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-contain"
  >
    <source src="/videos/hot-sauce.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>


  
  )
}
