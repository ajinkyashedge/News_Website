import React, { useContext } from 'react'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { AppContext } from '../context/Appcontext';
import './Card.css'
export default function Card({ single_data }) {
    const { setLikedArticles, clicked, setclicked } = useContext(AppContext)
    function handlelikeClick() {
        if (single_data.liked) {
            setLikedArticles((prevLikedArticles) =>
                prevLikedArticles.filter((article) => article !== single_data)
            );
        } else {
            setLikedArticles((prevLikedArticles) => [...prevLikedArticles, single_data]);
        }

        single_data.liked = !single_data.liked;
        setclicked(!clicked);
    }
    return (
            <div className='cardwidth overflow-auto w-[18rem] border-2 rounded-md relative pb-5 hover:shadow-xl transition-all duration-[0.5s]'>
                <div className='min-w-full'><img alt='' className=' rounded-t-md min-w-full h-[11rem]' src={single_data.image} />
                    <div onClick={handlelikeClick} className='absolute cursor-pointer border-black right-1 text-2xl rounded-full p-1'>
                        {single_data.liked ? <FcLike /> : <FcLikePlaceholder />}
                    </div>
                </div>
                <div className='px-2'>
                    <div className='text-sm font-bold'>Source: {single_data.site}</div>
                    <div className='text-xs'>Published at: {single_data.publishedAt.substring(0, 10)} Time: {single_data.publishedAt.substring(11, 16)}</div>
                    <div className=' text-[0.9rem] font-bold my-2'>{single_data.title}</div>
                    {/* <div>{data.data.content}</div>  */}
                    <div className='mb-7 text-blue-700 text-[0.85rem] font-semibold'>{single_data.description}</div>
                    <div className='absolute bottom-4 '>
                        <a href={single_data.source} target='blank'>
                            <button className='border text-gray-800 transition-all duration-[0.2s] px-2 py-1 rounded-sm bg-blue-400 hover:bg-blue-500 font-bold text-sm'>Go to Article</button>
                        </a>
                    </div>
                    <div className='text-xs font-semibold absolute bottom-0 right-2'>Author: {single_data.author ? single_data.author.substring(0, 15) : 'Not found'}</div>
                </div>
            </div>
    )
}
