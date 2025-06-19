import React, { useContext, useState } from 'react'
import Card from './Card'
import Top from './Top'
import { AppContext } from '../context/Appcontext'
import Loading from './Loading'
import img from '../images/hand-drawn-no-data-concept_52683-127823.avif'
import { AiOutlineArrowUp } from 'react-icons/ai'
import Footer from './Footer'
export default function Home() {
  const { data, loading } = useContext(AppContext)
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  window.addEventListener('scroll',()=>{
    setScrollPosition(window.scrollY);
  })
  // console.log(scrollPosition);
  function scrollhandle() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className='px-2'>
      {

        loading === true ? (<Loading />) : (
          data !== undefined ? (

            <div>

              <div>
                <Top />
              </div>

              <div className='mt-6 font-bold font-serif text-2xl'>What's new</div>
              <div className='flex flex-wrap m-auto gap-5 justify-center my-2'>

                {
                  data.slice(4,).map((dta, index) => (
                    <Card single_data={dta} key={index} />
                  ))
                }
              </div>
              <div className={`bottom-6 right-5 ${scrollPosition < 650 ? 'hidden':'fixed'}`}>
                <button onClick={scrollhandle} className='rounded-full p-2 text-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-500 text-white bg-opacity-90 '>
                  <AiOutlineArrowUp />
                </button>
              </div>
              <Footer/>
            </div>
          ) : (<div className=' flex flex-col justify-center h-screen items-center '><img className='w-[30rem]' src={img} alt='not found'></img>
            <div className='mb-2 text-3xl font-bold'>SORRY!</div>
            <div className='font-semibold'>YOUR SEARCH NOT FOUND</div>
          </div>)
        )
      }

    </div>
  )
}
