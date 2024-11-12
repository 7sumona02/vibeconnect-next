import { Searchbar } from "@/components/Searchbar"
import { Compass, Moon } from "lucide-react"
import Link from "next/link"


const Home = () => {
  return (
    <div className='h-screen w-screen bg-black overflow-hidden'>
      <div className='flex h-screen'>
        <div className='w-1/4 py-8 px-20 flex flex-col items-center border-r border-neutral-800'>
            <div>
                <Link href='/' className='font-bold text-2xl text-right'>VibeConnect</Link>
            </div>
            <div className='flex flex-col gap-5 text-neutral-400 py-20'>
                <div className='flex items-center gap-2 hover:text-white duration-300 transition-all'><Compass size={20} /><Link href='/explore'>Explore</Link></div>
                <div className='flex items-center gap-2 hover:text-white duration-300 transition-all'><Moon size={20} />Change Theme</div>
            </div>
        </div>
        <div className='w-2/4 overflow-y-scroll border-r border-neutral-800 bg-neutral-900/50'>
            <div className="flex justify-center items-center h-screen">
                hello you can post here...
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
  )
}

export default Home

const SpaceCard = () => {
    return (
        <div className='bg-neutral-900 py-4 px-6 rounded-xl'>
            <div className='flex gap-4 items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src="/cherry.jpg" className="w-10 h-full object-cover rounded-xl" />
                    </div>
                    <div className='font-bold lowercase'>Cherry</div>
                </div>
                <div className='text-[#326dfc] text-sm font-bold'>
                    Follow
                </div>
            </div>
        </div>
    )
}
