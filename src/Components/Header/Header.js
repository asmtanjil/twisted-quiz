import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='md:flex justify-between bg-slate-300 p-4'>

      <div className='text-2xl md:text-4xl md:ml-20 font-bold'>
        <h2>Twisted Quiz</h2>
      </div>

      <div>
        <NavLink className={`mr-8 text-xl md:text-2xl font-semibold activeButton ${({
          isActive,
        }) => (isActive ? "active" : undefined)}`} to="/home">Home</NavLink>
        <NavLink className={`mr-8 text-xl md:text-2xl font-semibold activeButton ${({
          isActive,
        }) => (isActive ? "active" : undefined)}`} to="/topics">Topics</NavLink>
        <NavLink className={`mr-8 text-xl md:text-2xl font-semibold activeButton ${({
          isActive,
        }) => (isActive ? "active" : undefined)}`} to="/statistics">Statistics</NavLink>
        <NavLink className={`mr-8 text-xl md:text-2xl font-semibold activeButton ${({
          isActive,
        }) => (isActive ? "active" : undefined)}`} to="/blog">Blog</NavLink>
      </div>

    </div>
  );
};

export default Header;