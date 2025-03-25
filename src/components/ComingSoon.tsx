import FormInput from "./FormInput";
import { TopEdge, BottomEdge } from "./ui/Edge";

export default function ComingSoon() {
  return (
    <section className="text-white w-3/4 relative group ">
      <div className="absolute -left-7 -top-[7px] group-hover:scale-110 duration-100 ease-out">
        <TopEdge />
      </div>

      <h1
        className="font-bold text-[5rem] font-pirata leading-tight 
                   bg-gradient-to-tr from-[#ff4500] via-[#ff1e00] to-[#ffcc00]
                   text-transparent bg-clip-text animate-gradient drop-shadow-[2px_2px_7px_rgba(255,30,0,0.8)] tracking-wider"              
      >
        We are <span className="">Coming</span> Soon!
      </h1>
      <p className="font-montserrat mb-5 text-[15px] ">
        Sign up to be the first to know when we launch!
      </p>
      <FormInput />
      <div className="absolute right-[32px] -bottom-[22px] group-hover:scale-110 duration-100 ease-out">
        <BottomEdge />
      </div>
    </section>
  );
}
