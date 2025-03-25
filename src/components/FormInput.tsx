import { SubmitButton } from "@/ui/SubmitButton";

export default function FormInput() {
  return (
    <section className="flex flex-col font-inter">
      <label htmlFor="email" className="text-white mt-2 text-sm font-light">
        Enter your email here <span className="text-[#0d741b]">*</span>
      </label>
      <input
        type="email"
        id="email"
        className="border-b-2 border-[#0d741b] focus:border-[hsl(128,80%,15%)] outline-none transition-all w-2/3 p-1 bg-transparent text-white appearance-none mb-7"
        
      />

      <SubmitButton />
    </section>
  );
}
