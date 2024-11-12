import { Compass, Moon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const LeftNav = () => {
  return (
    <div>
      <div className='w-1/4 py-8 px-20 flex flex-col items-center border-r border-neutral-800'>
            <div>
                <Link href='/' className='font-bold text-2xl text-right'>VibeConnect</Link>
            </div>
            <div className='flex flex-col gap-5 text-neutral-400 py-20'>
                <div className='flex items-center gap-2 hover:text-white duration-300 transition-all'><Compass size={20} /><Link href='/explore'>Explore</Link></div>
                <div className='flex items-center gap-2 hover:text-white duration-300 transition-all'><Moon size={20} />Change Theme</div>
            </div>
        </div>
    </div>
  )
}

export default LeftNav
