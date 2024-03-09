import { useState } from 'react';
import { FaHome, FaUserPlus, FaVideo, FaSearch } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import {  FiSearch } from 'react-icons/fi';
import { AiFillMessage } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-white scale-125 font-semibold' : 'text-gray-400';
  };

  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const iconStyles = { fontSize: 40, transition: 'color 0.3s' };

  return (
    <header className="bg-gray-900 text-white body-font sticky z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className='text-2xl font-bold'>OpenMedia</span>
        </Link>
        <div className="relative flex items-center ml-10 w-[16.5rem]">
          <input
            type="text"
            className="bg-white text-black border-0 px-3 py-2 rounded-lg focus:outline-none w-full"
            placeholder="Search"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-900 cursor-pointer">
            <FiSearch />
          </span>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-evenly cursor-pointer gap-x-24">
          <Link to='/'
            className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all ${isActive('/')}`}
            onClick={() => handleTabClick('home')}
          >
            <FaHome size={35} style={{ ...iconStyles, color: activeTab === 'home' ? 'white' : '' }} />
          </Link>
          <Link to='/videos'
            className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all ${isActive('/videos')}`}
            onClick={() => handleTabClick('video')}
          >
            <FaVideo size={35} style={{ ...iconStyles, color: activeTab === 'video' ? 'white' : '' }} />
          </Link>
          <Link to='/friends'
            className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all ${isActive('/friends')}`} onClick={() => handleTabClick('people')}
          >
            <IoPeople size={35} style={{ ...iconStyles, color: activeTab === 'people' ? 'white' : '' }} />
          </Link>
          <Link to='/chats'
            className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all ${isActive('/chats')}`} onClick={() => handleTabClick('message')}
          >
            <AiFillMessage size={35} />
          </Link>
        </nav>
        <Link to="/log-in" className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all text-center ${isActive('/log-in')}`} onClick={() => handleTabClick('log-in')}>
          <FaUserPlus size={35} style={{ ...iconStyles, color: activeTab === 'log-in' ? 'white' : '' }}/>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
