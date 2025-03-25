
import { Navbar } from '@/components/Navbar'
import { Video } from '@/components/video'
import  ComingSoon  from '@/components/ComingSoon'
import React from 'react'

export default function Home() {
  return (
    <main className=' '>
      <Navbar/>
      <section className='flex '>
        <div className='w-1/2  h-screen flex items-center justify-center pt-10 '>
        <ComingSoon/>
        </div>
        <div className='w-2/3  h-screen flex items-center justify-center pt-10 px-5 '><Video/></div>
      </section>
  
    </main>
  )
}
