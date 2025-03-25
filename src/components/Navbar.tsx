import React from 'react'

export const Navbar = () => {
  return (
    <header className='absolute w-full '>
        <nav className='flex items-center w-full justify-between py-10 px-16 font-pirata text-white'>
            <h1 className='text-[2.5rem]'>A La Diablo <span className='text-[#ff1e00]'>Hot Sauce</span></h1>
            <h1 className='text-[1.4rem]'>Home</h1>
        </nav>
    </header>
  )
}
