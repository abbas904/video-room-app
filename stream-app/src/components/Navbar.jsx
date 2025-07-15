import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div >
            
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      
      
      <div className="flex-shrink-0 text-white font-bold text-xl">
        Stream<span className="text-orange-400">Live</span>
      </div>

    
      <div className="hidden md:flex space-x-8 text-white font-medium">
        <Link to="/" className="hover:text-green-400 transition">Home</Link>
        <a href="#" className="hover:text-green-400 transition">Features</a>
        <Link to="/pricing" className="hover:text-green-400 transition">Pricing</Link>
        <a href="#" className="hover:text-green-400 transition">Contact</a>
      </div>

      
      <div className="hidden md:block">
        <a href="#joinsection" className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md text-white font-semibold hover:from-pink-500 hover:to-orange-500 transition-all">
         Go Live
        </a>
      </div>

     
      <div className="md:hidden flex items-center">
        <button id="menu-toggle" className="text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

 
  <div id="mobile-menu" className="md:hidden hidden px-4 pb-4">
    <Link to="/" className="block py-2 text-white hover:text-green-400">Home</Link>
    <a href="#" className="block py-2 text-white hover:text-green-400">Templates</a>
    <a href="#" className="block py-2 text-white hover:text-green-400">Features</a>
    <Link to="/pricing" className="block py-2 text-white hover:text-green-400">Pricing</Link>
    <a href="#" className="block py-2 text-white hover:text-green-400">Contact</a>
    <a href="#joinsection" className="block mt-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-md text-center hover:from-pink-500 hover:to-orange-500 transition-all">Sign Up</a>
  </div>
</nav>
        </div>
    )
}

export default Navbar