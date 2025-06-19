import React from 'react'
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { IoCallOutline } from 'react-icons/io5'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { TbBrandLeetcode } from 'react-icons/tb'
export default function Footer() {
    return (
        <div className='mt-4'>
            <footer className='bg-black px-2 text-white text-opacity-50'>
                <div className=''>
                    <div className='flex items-center'>
                        <span>About us</span>
                    </div>
                    <div>
                        Welcome to Newsi, your go-to destination for the latest news, insightful articles, and comprehensive analysis. With our user-friendly platform, you can easily search for and read various news articles, as well as visit the original news sources.
                    </div>
                    <div>
                        <h2>
                            What We Offer
                        </h2>
                        <li>
                            Effortless News Search: Our platform allows you to effortlessly search for news articles based on your interests and keywords.
                        </li>
                        <li>
                            Comprehensive Coverage: From breaking news to in-depth analysis, we cover a wide range of topics, including politics, technology, entertainment, health, and more.
                        </li>
                        <li>
                            Direct Source Access: Read the news on our site and easily navigate to the original source for more details.
                        </li>
                    </div>
                </div>
                <div className='border border-white border-opacity-20 w-[95%] m-auto my-[2rem]'></div>
                <div className='flex gap-2 items-center '>
                    <span className='text-sm '>Follow us on: </span>
                    <button><a href='https://leetcode.com/omkarsalunkhe3597/' target='_blank' rel='noreferrer'><TbBrandLeetcode /></a></button>
                    <button><a href='https://www.linkedin.com/in/omkar-salunkhe-28784b214/' target='_blank' rel='noreferrer'><AiOutlineLinkedin /></a></button>
                    <button><a href='https://www.instagram.com/omkar_salunkhe12/' target='_blank' rel='noreferrer'><AiOutlineInstagram /></a></button>
                    <button><a href='https://x.com/Omkar11239862' target='_blank' rel='noreferrer'><AiOutlineTwitter /></a></button>
                </div>
                <div className='flex gap-4 items-center '>
                    <IoCallOutline />
                    <span>9975359761</span>
                </div>
                <div className='flex items-center gap-4 text-white text-opacity-50' >
                    <HiOutlineLocationMarker />
                    <div>
                        At post borgaon Dist Satara 415519
                    </div>
                </div>
            </footer>
        </div>
    )
}
