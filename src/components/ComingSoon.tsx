import FormInput from "./FormInput";

export default function ComingSoon() {
  return (
    <section className="text-white w-3/4 ">
      {/* <h1 className="font-bold text-[5rem] font-pirata leading-tight">
        We are Coming Soon!
      </h1> */}
        <h1 
        className="font-bold text-[5rem] font-pirata leading-tight 
                   bg-gradient-to-r from-orange-500 via-[#ff1e00] to-orange-600
                   text-transparent bg-clip-text animate-gradient"
      >
        We are <span className="">Coming</span> Soon!
      </h1>
      <p className="font-inter mb-5 text-[15px]">Sign up to be the first to know when we launch!</p>
      <FormInput />
      
    </section>
  );
}
