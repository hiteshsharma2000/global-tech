import React from 'react'

const Navbar = () => {
  return (
     <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
            {/* Logo */}
            <div className="flex w-[12%] items-center gap-2">
             <div>
            <img className="w-full rounded-xl" src="https://image2url.com/images/1759055325221-b57ae6ab-0b1a-4eec-9758-395439a67a05.jpg" alt="" />
              </div>
            </div>
    
            {/* Nav Links */}
            <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
              <a href="#" className="hover:text-indigo-500">HOME</a>
              <a href="#" className="hover:text-indigo-500">SHOP</a>
              <a href="#" className="hover:text-indigo-500">ABOUT US</a>
              <a href="#" className="hover:text-indigo-500">CONTACT US</a>
              <a href="#" className="hover:text-indigo-500">BLOG</a>
            </nav>
    
            {/* Icons */}
            <div className="flex space-x-4 text-gray-700 text-xl">
              <button>♡</button>
              <button>🛒</button>
              <button>👤</button>
            </div>
          </header>
  )
}

export default Navbar