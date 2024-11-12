"use client";

import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Link, User } from "lucide-react";
import InputFile from "./InputFile";
import { useRouter } from 'next/navigation'; // Use next/navigation for app directory
import { Tags } from "./Tags";

const EmailCard: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const router = useRouter(); // Initialize router

  const handleImageSelect = (file: File) => {
    setSelectedImages((prevImages) => [...prevImages, file]);
  };

  const handleSubmit = () => {
    if (selectedTag === "anime") {
      router.push('/anime'); // Redirect to /anime if the anime tag is selected
    } else {
      console.log("Selected Tag:", selectedTag);
    }
  };

  return (
    <div className="group relative w-[40em] h-full rounded-lg bg-transparent p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 ease-in-out">
      <div className="relative flex flex-col gap-4 rounded-xl border border-neutral-700 bg-black p-6 transition-transform duration-200 ease-in-out ">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Add something, if you like</label>
          <Textarea />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Add Tags</label>
          <Tags onTagSelect={setSelectedTag} />
        </div>

        <div className="mt-4 flex space-x-2 items-end">
          {selectedImages.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Selected ${index + 1}`}
              className="w-[50px] h-[50px] object-cover rounded opacity-60"
            />
          ))}
          {selectedImages.length > 3 && (
            <span className="text-neutral-400">... ({selectedImages.length - 3} more)</span>
          )}
        </div>

        <div className="flex justify-end gap-1 pt-2">
          <div className="mt-4 self-end rounded-full text-neutral-400 px-1 cursor-pointer">
            <InputFile onImageSelect={handleImageSelect} />
          </div>
          <div className="mt-4 self-end rounded-full text-neutral-400 px-1 cursor-pointer" onClick={handleSubmit}>
            Submit {/* Submit Button */}
          </div>
          <div className="mt-4 self-end rounded-full text-neutral-400 px-1 cursor-pointer">
            <Link />
          </div>
          <div className="mt-4 self-end rounded-full text-neutral-400 px-1 cursor-pointer">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;