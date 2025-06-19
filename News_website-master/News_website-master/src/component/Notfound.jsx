import React from 'react'
import notfound from '../images/search-result-find-illustration_585024-17-removebg-preview.png'
export default function Notfound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <img className='w-[20rem]' alt='' src={notfound}></img>
    </div>
  )
}
