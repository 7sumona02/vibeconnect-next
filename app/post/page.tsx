// components/Home.tsx
'use client'; // This directive is necessary for client components

import ArrowButton from "@/components/FollowBtn";
import InputFile from "@/components/InputFile";
import { Searchbar } from "@/components/Searchbar";
import { Tags } from "@/components/Tags";
import { Textarea } from "@/components/ui/textarea";
import { Compass, Link2, Moon, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Use next/navigation for app directory
import { useState } from "react";

const Home = () => {
  return (
    <div className='h-screen w-screen bg-black overflow-hidden'>
      <div className='flex h-screen'>
        <div className='w-1/4 py-8 px-20 flex flex-col items-center border-r border-neutral-800'>
          <div>
            <Link href='/' className='font-bold text-2xl text-right'>VibeConnect</Link>
          </div>
          <div className='flex flex-col gap-5 text-neutral-400 py-20'>
            <div className='flex items-center gap-2 hover:text-white duration-300 transition-all'>
              <Compass size={20} />
              <Link href='/explore'>Explore</Link>
            </div>
            <div className='flex items-center gap-2 hover:text-white duration-300 transition-all'>
              <Moon size={20} />Change Theme
            </div>
          </div>
        </div>

        <div className='w-2/4 border-r border-neutral-800 bg-neutral-900/50 flex flex-col items-center'>
          <div className='absolute w-[45em] z-50'>
            <div className='flex justify-between items-center px-10 py-6'>
              <div>Profile</div>
              <Link href='/'>
                <ArrowButton text='Feed' />
              </Link>
            </div>
          </div>
          <div className='py-[7em]'>
            <EmailCard />
          </div>
        </div>

        <div className='w-1/4 bg-neutral-900/50 py-8 px-5'>
          <div className='flex flex-col gap-10'>
            <Searchbar />
            <div className='flex flex-col gap-4 ml-2'>
              <h1 className='text-lg font-bold border-b border-neutral-700 py-2'>Trending Spaces</h1>
              <div className='flex flex-col gap-2'>
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpaceCard = () => {
  return (
    <div className='bg-neutral-900 py-4 px-6 rounded-xl'>
      <div className='flex gap-4 items-center justify-between'>
        <div className='flex items-center gap-4'>
          <img src="/cherry.jpg" className="w-10 h-full object-cover rounded-xl" alt="Space Card" />
          <span className='font-bold lowercase'>Cherry</span>
        </div>
        <span className='text-[#326dfc] text-sm font-bold'>Follow</span>
      </div>
    </div>
  );
};

export default Home;

const EmailCard: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [textareaContent, setTextareaContent] = useState<string>(""); // State for textarea content
  const router = useRouter(); // Initialize router

  const handleImageSelect = (file: File) => {
    setSelectedImages((prevImages) => [...prevImages, file]);
  };

  const handleSubmit = () => {
    if (selectedTag === "anime") {
      // Construct the URL with query parameters
      const url = `/anime?content=${encodeURIComponent(textareaContent)}`;
      router.push(url); // Navigate to the Anime page with query parameter
    } else {
      console.log("Selected Tag:", selectedTag);
    }
  };

  return (
    <div className="group relative w-[40em] h-full rounded-lg bg-transparent p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 ease-in-out">
      <div className="relative flex flex-col gap-4 rounded-xl border border-neutral-700 bg-black p-6 transition-transform duration-200 ease-in-out ">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Add something, if you like</label>
          <Textarea value={textareaContent} onChange={(e) => setTextareaContent(e.target.value)} />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Add Tags</label>
          <Tags onTagSelect={setSelectedTag} />
        </div>

        {/* Preview selected images */}
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

        {/* Action buttons */}
        <div className="flex justify-between items-center gap-1 pt-2">
          {/* Image upload and other action buttons */}
          <InputFile onImageSelect={handleImageSelect} />
          {/* Other action icons */}
          <Link2 />
          <User />

          {/* Submit button */}
          <button onClick={handleSubmit} className="bg-[#d3ff30] py-2 px-4 rounded-full text-black text-sm font-bold">Submit</button>
        </div>
      </div>
    </div>
  );
};
