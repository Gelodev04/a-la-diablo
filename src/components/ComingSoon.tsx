import FormInput from "./FormInput";
import SocialMedia from "./SocialMedia";
export default function ComingSoon() {
  return (
    <section className="text-white w-3/4 ">
      <h1 className="font-bold text-[5rem] font-pirata leading-tight">
        We are Coming Soon!
      </h1>
      <p className="font-inter mb-5 ">Sign up to be the first to know when we launch!</p>
      <FormInput />
      <div className="mt-7"><SocialMedia/></div>
    </section>
  );
}
