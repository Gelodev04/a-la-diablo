
import SocialMedia from "./SocialMedia"
export const Navbar = () => {
  return (
    <header className='w-full '>
        <nav className='flex items-center w-full justify-between py-10 lg:px-16 px-4 font-pirata text-white md:px-10'>
            <h1 className='text-[2.5rem] tracking-wide'>A La Diabla <span className='text-[#ff1e00]'>Hot Sauce</span></h1>
            <SocialMedia/>
        </nav>
    </header>
  )
}
