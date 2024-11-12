// pages/anime.tsx
'use client';
import ArrowButton from '@/components/FollowBtn';
import ProfileIcon from '@/components/ProfileIcon';
import { Searchbar } from '@/components/Searchbar';
import { Compass, Ellipsis, Heart, MessageCircle, Moon, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const content = searchParams.get('content'); // Get content from query parameters

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
          <div className='py-[7em] px-10'>
            {content && <Card content={content} />}
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

const Card = ({ content }: { content: string }) => {
  return (
    <div className='w-full h-full'>
      <div className='bg-black rounded-xl border-2 border-neutral-800 flex flex-col gap-2'>
        <div className="px-10 header flex items-center justify-between mt-4">
          <div className='flex items-center gap-4'>
            <div className="profile flex items-center gap-2">
              <ProfileIcon />
              <p className='lowercase font-bold'>David</p>
            </div>
            <div className="followbtn"><ArrowButton text='Follow' /></div>
          </div>
          <div>
            <Ellipsis className='text-neutral-400 cursor-pointer' size={20} />
          </div>
        </div>
        <div className="img mt-2 -ml-2 px-10">
          <div className="grid grid-cols-3 gap-2">
            {/* Replace with dynamic images if necessary */}
            <div>
              <img src="/cherry.jpg" className="w-full h-full object-cover rounded-xl" alt="Cherry" />
            </div>
            <div>
              <img src="/cherry.jpg" className="w-full h-full object-cover rounded-xl" alt="Cherry" />
            </div>
            <div>
              <img src="/cherry.jpg" className="w-full h-full object-cover rounded-xl" alt="Cherry" />
            </div>
          </div>
        </div>
        <div className="content bg-neutral-900 rounded-b-lg mt-1">
          {/* Display the dynamic content passed as a prop */}
          <div className='px-10 py-4 text-sm -ml-2 caption'>{content}</div>
          <div className="icons"></div>
          <div className='px-10 py-2 text-neutral-400 -ml-2 tags'>#blog #cherry</div>
          <div className="icons text-neutral-400 flex justify-end mr-10 pt-2 pb-4 gap-2">
            <Heart />
            <MessageCircle />
            <Share2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

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