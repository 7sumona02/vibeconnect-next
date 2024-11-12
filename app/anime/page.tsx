// pages/anime.tsx
'use client';
import ArrowButton from '@/components/FollowBtn';
import ProfileIcon from '@/components/ProfileIcon';
import { Ellipsis, Heart, MessageCircle, Share2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const content = searchParams.get('content'); // Get content from query parameters

  return (
    <div>
      <h1>Anime Page</h1>
      <p>Welcome to the Anime page!</p>
      {content && <Card content={content} />} {/* Display dynamic content in Card */}
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