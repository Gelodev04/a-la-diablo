"use client";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

export default function FormInput() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email is required.");
      return;
    }
    
    if (!subscribed) {
      setMessage("You must agree to subscribe to the newsletter.");
      return;
    }

    try {
      const res = await fetch("/api/shopify/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Subscribed successfully!");
        setEmail("");
        setSubscribed(false);
      } else {
        setMessage(data.error || "Something went wrong!");
      }
    } catch (error) {
      setMessage("Failed to subscribe.");
    }
  };

  return (
    <form  className="flex flex-col font-montserrat">
      <label
        htmlFor="email"
        className="text-white mt-2 text-xs italic font-light"
      >
        Enter your email here <span className="text-[#0d741b]">*</span>
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-b-2 border-[#0d741b] focus:border-[hsl(128,80%,15%)] outline-none transition-all w-2/3 p-1 bg-transparent text-white appearance-none "
      />
      <div className="mb-5 flex items-center gap-1 mt-3">
        <Checkbox
           checked={subscribed}
           onCheckedChange={(checked) => setSubscribed(checked === true)}
          required
          className="data-[state=checked]:bg-green data-[state=checked]:border-green size-[13px]"
        />
        <p className="text-white  text-xs italic font-light ">
          Yes, subscribe me to your newsletter{" "}
          <span className="text-green">*</span>
        </p>
      </div>
   
        <SubmitButton onClick={handleSubmit}/>
     
      {message && <p className="text-white mt-2 text-xs">{message}</p>}
    </form>
  );
}
