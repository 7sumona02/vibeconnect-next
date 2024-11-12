import React from 'react'
import AvatarList from './Avatar'
import ArrowButton from './FollowBtn'

const Nav = () => {
  return (
    <div className='w-full h-12'>
      <div className='flex justify-between items-center'>
        <div><AvatarList /></div>
        <div><ArrowButton text='Post' /></div>
      </div>
    </div>
  )
}

export default Nav
