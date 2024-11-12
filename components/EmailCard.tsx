"use client";

import React from "react";
import { Textarea } from "./ui/textarea";
import { Image, Link, Tags, User } from "lucide-react";

const EmailCard = () => {
  return (
    <div className="group relative w-[40em] h-full rounded-lg bg-transparent p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 ease-in-out">
      {/* Upper card */}
      <div className="relative flex flex-col gap-4 rounded-xl border border-neutral-700 bg-black p-6 transition-transform duration-200 ease-in-out ">
        {/* From Email (Static) */}
        <div className="flex flex-col gap-2">
          <label>Add something, if you like</label>
          <Textarea />
        </div>


        {/* Send Button (Static, purely for aesthetic purposes) */}
        <div className="flex justify-end gap-1 pt-2">
        <div className="mt-4 self-end rounded-full text-neutral-400 px-1  cursor-pointer">
                <Image />
            </div>
            <div className="mt-4 self-end rounded-full text-neutral-400 px-1 cursor-pointer">
                <Link />
            </div>
            <div className="mt-4 self-end rounded-full text-neutral-400 px-1  cursor-pointer">
                <Tags />
            </div>
            <div className="mt-4 self-end rounded-full text-neutral-400 px-1  cursor-pointer">
                <User />
            </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
