
import { Navbar } from '@/components/Navbar'
import { Video } from '@/components/video'
import  ComingSoon  from '@/components/ComingSoon'
import React from 'react'

export default function Home() {
  return (
    <main className='pb-10'>
      <Navbar/>
      <section className='flex flex-col-reverse lg:flex-row gap-10 lg:gap-5 lg:mt-10'>
        <div className=' px-4 '>
        <ComingSoon/>
        </div>
        <div className='lg:mr-4 '><Video/></div>
      </section>
  
    </main>
  )
}
