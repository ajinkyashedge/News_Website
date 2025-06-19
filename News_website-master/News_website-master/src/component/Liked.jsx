import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'
import { MdOutlineDelete } from 'react-icons/md'
import './Liked.css'
import { Link } from 'react-router-dom'
export default function Liked() {
    const { liked_article, setLikedArticles, setclicked, clicked } = useContext(AppContext)
    function handledelete(data) {
        const updatedLikedArticles = liked_article.filter((article) => article !== data);
        setLikedArticles(updatedLikedArticles);
    
        const deletedArticle = data;
        // if (deletedArticle) {
            deletedArticle.liked = false;
        // }
    
        setclicked(!clicked);
      }
      if (liked_article.length === 0) {
        return <div className='flex justify-center items-center text-2xl font-bold h-screen flex-col gap-2'>No result<Link to='/'><span className=' py-1 bg-blue-400 font-semibold border-black hover:bg-blue-500 cursor-pointer rounded-lg px-2 text-white'>Go to Home</span></Link></div>;
      }

    return (
        <div>
           
            {
                liked_article.map((data, index) => (
                    <div key={index} className='liked overflow-auto mt-5 flex border-2 rounded-md relative pb-5 hover:shadow-xl transition-all duration-[0.5s]'>
                        <img className=' rounded-t-md max-h-[12rem]' alt='' src={data.image} />
                        <div className='px-2 flex justify-between w-full'>
                            <div>
                                <div className='text-sm font-bold'>Source: {data.site}</div>
                                <div className='text-xs'>Published at: {data.publishedAt.substring(0, 10)} Time: {data.publishedAt.substring(11, 16)}</div>
                                <div className=' text-[0.9rem] font-bold my-2'>{data.title}</div>
                                {/* <div>{data.data.content}</div>  */}
                                <div className='mb-7 text-blue-700 text-[0.85rem] font-semibold'>{data.description}</div>
                                <div className='absolute bottom-4 '>
                                    <a href={data.source} target='__blank'>
                                        <button className='border text-gray-800 transition-all duration-[0.2s] px-2 py-1 rounded-sm bg-blue-400 hover:bg-blue-500 font-bold text-sm'>Go to Article</button>
                                    </a>
                                </div>
                                <div className='text-xs font-semibold absolute bottom-0 right-2'>Author: {data.author ? data.author.substring(0, 15) : 'Not found'}</div>
                            </div>
                            <div onClick={() => handledelete(data)} className='text-2xl h-fit rounded-full p-1  cursor-pointer hover:bg-red-200 '><MdOutlineDelete /></div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
