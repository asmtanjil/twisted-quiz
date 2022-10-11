import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='md:flex justify-between bg-slate-300 p-4'>

      <div className='text-2xl md:text-4xl md:ml-20 font-bold'>
        <h2>Twisted Quiz</h2>
      </div>

      <div>
        <Link className='mr-8 text-xl md:text-2xl font-semibold' to="/">Home</Link>
        <Link className='mr-8 text-xl md:text-2xl font-semibold' to="/topics">Topics</Link>
        <Link className='mr-8 text-xl md:text-2xl font-semibold' to="/statistics">Statistics</Link>
        <Link className='mr-8 text-xl md:text-2xl font-semibold' to="/blog">Blog</Link>
      </div>

    </div>
  );
};

export default Header;