import FormInput from "./FormInput";
import { TopEdge, BottomEdge } from "./ui/Edge";

export default function ComingSoon() {
  return (
    <section className="text-white  relative group mx-auto max-w-[700px]     px-5 py-1 group">
      <div className="absolute inset-0 flex justify-between  z-[-1] ">
        <div className="top-0 left-0 ">
          <TopEdge />
        </div>
        <div className="absolute bottom-0 right-0">
          <BottomEdge />
        </div>
      </div>

      <h1
        className="font-bold text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6rem] font-pirata leading-tight 
             bg-gradient-to-tr from-[#0d741b] via-[#085a14] to-[#064010]
             text-transparent bg-clip-text animate-gradient drop-shadow-[2px_2px_7px_rgba(13,116,27,0.8)] tracking-wider "
      >
        We are <span className="">Coming</span> Soon!
      </h1>

      <p className="font-montserrat mb-5 text-[15px] ">
        Sign up to be the first to know when we launch!
      </p>

      <FormInput />
    </section>
  );
}
