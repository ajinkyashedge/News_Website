
import { BsSearch } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'
import { TbBrandLeetcode } from 'react-icons/tb'
import { FaUser } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/Appcontext';
import flagimg from '../images/flag.jpg'
import logo from '../images/icons8-newspaper-50.png'

function Navbar() {
  const cur = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const location = useLocation();
  const { search_txt, setsearch_txt, handlesubmit ,name} = useContext(AppContext)

  return (

    <div className=' '>
      <div className={`flex border-black justify-between items-center`}>
        <div className='social_icons text-xs flex flex-col'>
          <div>{cur}</div>
          <div className='flex items-center gap-1'>
            <img className='w-4' alt='' src={flagimg}></img>
            <div>IN</div>
          </div>
        </div>
        <div className=' text-3xl mb-4 flex items-center gap-2'>
          <img src={logo} alt='logo' className='w-[2rem]'></img> <span className='font-bold '>Newsi</span>
        </div>
        <div className=' flex'>
          <Link to='signin'>
            <button className={`fauser ${location.pathname === '/signin' ? 'text-blue-500' : ''} border-r-2 border-black px-5 relative flex flex-col items-center gap-1`}>
            <FaUser />
            <div className=' text-[0.6rem]'>{name ? name : ''}</div>
              {/* <div className={`${location.pathname === '/signin' ? 'border-blue-500' : 'border-transparent group-hover:border-gray-300 '}  border-2 absolute mt-[0.1rem] w-[1.1rem]`}></div> */}
            </button>
          </Link>
          <div className='icons flex flex-wrap text-lg gap-5 px-5'>
            <button><a href='https://leetcode.com/omkarsalunkhe3597/' target='_blank' rel='noreferrer'><TbBrandLeetcode /></a></button>
            <button><a href='https://www.linkedin.com/in/omkar-salunkhe-28784b214/' target='_blank' rel='noreferrer'><AiOutlineLinkedin /></a></button>
            <button><a href='https://x.com/Omkar11239862' target='_blank' rel='noreferrer'><AiOutlineTwitter /></a></button>
            <button><a href='https://www.instagram.com/omkar_salunkhe12/' target='_blank' rel='noreferrer'><AiOutlineInstagram /></a></button>
          </div>
        </div>
      </div>
      <div className={`menus shadow-xl p-3 border-t border-b-2 flex flex-wrap justify-between`}>
        <div className='navbtn_parent flex flex-wrap gap-5 justify-center font-semibold items-center'>
          <div className=' navbtn relative border-r-2 border-black px-5'>
            <Link to='/'>
              <button className='group relative'>
                Home
                <div className={`${location.pathname === '/' ? 'border-blue-500' : 'border-transparent group-hover:border-gray-300 '}  border-2 absolute w-full`}></div>
              </button>
            </Link>
          </div>
          {/* <div className='navbtn border-r-2 border-black px-5'>
            <Link to='about'>
              <button className='group relative'>
                About
                <div className={`${location.pathname === '/about' ? 'border-blue-500' : 'border-transparent group-hover:border-gray-300 '}  border-2 absolute w-full`}></div>
              </button>
            </Link>
          </div>
          <div className='navbtn border-r-2 border-black px-5'>
            <Link to='contact'>
              <button className='group relative'>
                Contact
                <div className={`${location.pathname === '/contact' ? 'border-blue-500' : 'border-transparent group-hover:border-gray-300 '}  border-2 absolute w-full`}></div>
              </button>
            </Link>
          </div> */}
          <div className='navbtn border-r-2 border-black px-5'>
            <Link to='liked'>
              <button className='group relative'>
                Liked articles
                <div className={`${location.pathname === '/liked' ? 'border-blue-500' : 'border-transparent group-hover:border-gray-300 '} border-2 absolute w-full`}></div>
              </button>
            </Link>
          </div>
        </div>

        <form onSubmit={handlesubmit}>
          <div className='flex border items-center justify-between rounded-lg shadow-md'>
            <input type='text' value={search_txt} onChange={(event) => setsearch_txt(event.target.value)} placeholder='Search...' className=' bg-transparent outline-none px-1' />
            <button className='ml-1 p-2 bg-blue-500 text-white rounded-r-lg  hover:bg-blue-600'>
              <BsSearch />
            </button>
          </div>
        </form>

      </div>

    </div>
  );
}

export default Navbar;
