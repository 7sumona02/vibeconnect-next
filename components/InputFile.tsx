"use client";

import * as React from "react";
import { Image } from "lucide-react"; // Use a Lucide icon for upload
import { useRef } from "react";

interface InputFileProps {
  onImageSelect: (file: File) => void; // Prop to handle image selection
}

const InputFile: React.FC<InputFileProps> = ({ onImageSelect }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Create a ref for the file input

  const handleImageClick = () => {
    // Trigger the click event on the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        onImageSelect(file); // Call the passed function with each selected file
      });
    }
  };

  return (
    <>
      <div onClick={handleImageClick} className="flex items-center cursor-pointer">
        <Image className="mr-2" size={24} />
      </div>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*" // Accept only image files
        style={{ display: "none" }} // Hide the input
        multiple // Allow multiple file selection
      />
    </>
  );
};

export default InputFile;