import { SubmitButton } from "@/components/ui/SubmitButton";
import { Checkbox } from "./ui/checkbox";
export default function FormInput() {
  return (
    <form className="flex flex-col font-montserrat">
      <label
        htmlFor="email"
        className="text-white mt-2 text-xs italic font-light"
      >
        Enter your email here <span className="text-[#0d741b]">*</span>
      </label>
      <input
        type="email"
        id="email"
        className="border-b-2 border-[#0d741b] focus:border-[hsl(128,80%,15%)] outline-none transition-all w-2/3 p-1 bg-transparent text-white appearance-none "
      />
      <div className="mb-5 flex items-center gap-1 mt-3">
        <Checkbox   className="data-[state=checked]:bg-green data-[state=checked]:border-green size-[13px]" />
        <p className="text-white  text-xs italic font-light ">
          Yes, subscribe me to your newsletter{" "}
          <span className="text-green">*</span>
        </p>
      </div>
      <SubmitButton />
    </form>
  );
}
