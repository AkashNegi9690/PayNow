import { useState } from "react";
import { Link } from "react-scroll";

export function Navbar({ isSmallScreen, issideBarOpen, setIsSideBarOpen }) {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  }

  if (isSmallScreen) {
    return <>
    {issideBarOpen ? <nav className="bg-white shadow-md fixed h-full w-full z-10 bg-transparent backdrop-blur-lg">
        <div className="container mx-auto flex flex-col justify-between items-center gap-10 py-4 px-6">

          <div onClick={() => {
            setIsSideBarOpen(!issideBarOpen);
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
          </div>
          <Link
            to='hero'
            smooth='true'
            duration={500}
            
          >PayNow
          </Link>
          <div className="flex flex-col mx-auto gap-5">
            <Link
              to="features"
              smooth={true}
              duration={500}
              className={`text-lg cursor-pointer ${activeLink === 'features' ? 'text-blue-500' : 'text-gray-700'}`}
            onClick={() => {handleLinkClick('features');console.log(activeLink)}}
            >
              Features
            </Link>
            <Link
              to="how-it-works"
              smooth={true}
              duration={500}
              className={`text-lg cursor-pointer ${activeLink === 'how-it-works' ? 'text-blue-500' : 'text-gray-700'}`}
            onClick={() => handleLinkClick('how-it-works')}
            >
              How It Works
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className={`text-lg cursor-pointer ${activeLink === 'testimonials' ? 'text-blue-500' : 'text-gray-700'}`}
            onClick={() => handleLinkClick('testimonials')}
            >
              Testimonials
            </Link>
          </div>
        </div>
      </nav>:<div onClick={() => {
      setIsSideBarOpen(!issideBarOpen)
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
    </div>}
    </>
  }
  else {
    return <>
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link
            to='hero'
            smooth='true'
            duration={500}
            className="text-2xl font-bold text-blue-500 cursor-pointer"
          >PayNow
          </Link>
          <div className="flex space-x-6">
            <Link
              to="features"
              smooth={true}
              duration={500}
              className={` hover:text-blue-500 cursor-pointer ${activeLink === 'features'?'text-blue-500 ':'text-gray-700'}`}
              onClick={()=>{handleLinkClick('features')}}
            >
              Features
            </Link>
            <Link
              to="how-it-works"
              smooth={true}
              duration={500}
              className={` hover:text-blue-500 cursor-pointer ${activeLink === 'how-it-works'?'text-blue-500 ':'text-gray-700'}`}
              onClick={()=>{handleLinkClick('how-it-works')}}
            >
              How It Works
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className={` hover:text-blue-500 cursor-pointer ${activeLink === 'testimonials'?'text-blue-500 ':'text-gray-700'}`}
              onClick={()=>{handleLinkClick('testimonials')}}
            >
              Testimonials
            </Link>
          </div>
        </div>
      </nav>
    </>
  }
}