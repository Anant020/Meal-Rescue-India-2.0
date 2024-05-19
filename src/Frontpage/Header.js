import React from 'react';
// import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import leaf from '../leaves-3.svg';
export default function Header() {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const ourcenter = () => {
    navigate("/getsupport");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  return (
    <div>

      <nav>
        <div className=" flex  justify-between  bg-white h-20 items-center">
          <div className="mx-5 text-2xl md:text-2xl font-bold "><a href="/" className=' bg-gradient-to-r text-transparent bg-clip-text from-green-500 to-blue-500'> Meal Rescue India </a></div>
          <div className=' md:hidden visible px-4'>
            <button type='button' onClick={toggleMenu}>
              <svg width="40px" height="40px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M854.29 957.76c9.37 12.88 1.84-31.2 12.85-62.4s27.53-51.36 27.53-102.78-47.72-141.32-69.74-200.05-16.52-91.77-66.07-170.69-112-163.34-176.19-194.55-77.09-102.78-154.18-135.81S193.57 108 129.33 63.95c130.31 134 148.66 268 211.06 365.23s84.43 62.4 150.5 143.16 33.14 88 97.27 179.86c74.34 106.45 192.72 104.61 266.13 205.56z" fill="#5BB086" /></svg>
            </button>
          </div>
          <ul className="  hidden md:flex text-xl md:font-semibold ">
            {/* <li><a className=' mx-5 cursor-pointer hover:mt-6' onClick={()=>{navigate("/")}}>Home</a></li> */}
            <li><a className=' mx-6 cursor-pointer' onClick={ourcenter}>Our Centers</a></li>
            <li><a className=' mx-6 cursor-pointer' onClick={() => { navigate("/donatelogin") }}>Donate</a></li>
            <li><a className=' mx-6 cursor-pointer' onClick={() => { navigate("/contact") }}>Contact Us </a></li>
            <li><a className=' mx-6 cursor-pointer' onClick={() => { navigate("/admin") }}>Admin</a></li>
          </ul>


        </div>
        {isMenuOpen && <div className=''>
          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg mx-2 " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div className="py-1" role="none">
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
              <form method="POST" action="#" role="none">
                <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
              </form>
            </div>
          </div>
        </div>}
      </nav>

      {/* <div className="button">
    <button onClick={scrollToTop}>↑</button>
  </div> */}
    </div>
  )
}
