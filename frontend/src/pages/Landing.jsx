import { Link } from 'react-scroll';
import Footer from '../components/footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { Navbar } from '../components/navbar';
import { useNavigate} from "react-router-dom";
import heroImage from '../assets/hero-image.png'
const LandingPage = () => {
    const [issideBarOpen, setIsSideBarOpen] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const navigate=useNavigate();

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width:500px)")
      const handleScreenChange = (e) => {
        
        setIsSmallScreen(e.matches)
      }
      handleScreenChange(mediaQuery)
      mediaQuery.addEventListener("change", handleScreenChange);
  
      return () => mediaQuery.removeEventListener("change", handleScreenChange);
    }, [])

  return (
    <div >
      {/* Navbar */}
      <Navbar isSmallScreen={isSmallScreen} issideBarOpen={issideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 px-4 text-center md:text-left " id="hero">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Send Money Anytime, Anywhere with PayNow</h1>
            <p className="text-lg mb-6">Experience secure and fast transactions with an intuitive dashboard designed for all your payment needs.</p>
            <div className='flex gap-5 justify-center md:justify-start'>
            <button className="bg-white text-blue-500 px-6 py-3 rounded shadow hover:bg-gray-100 transition" onClick={()=>{
              navigate('/signup')
            }}>Get Started</button>
            <button className="bg-white text-blue-500 px-6 py-3 rounded shadow hover:bg-gray-100 transition" onClick={()=>{
              navigate('/signin')
            }}>signin</button>
            </div>
            
          </div>
          <div className="w-full md:w-1/2 mt-8 ">
            <img src={heroImage} alt="Payment App Illustration" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-100" id="features">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose PayNow?</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4 hover:translate-x-2 hover:-translate-y-2 transition-all duration-500">
              <div className="bg-white p-6 shadow rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                <p>Your money is safe with us, protected by top-notch security protocols.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 hover:translate-x-2 hover:-translate-y-2 transition-all duration-500">
              <div className="bg-white p-6 shadow rounded-lg">
                <h3 className="text-xl font-semibold mb-2">User-Friendly Dashboard</h3>
                <p>Manage your payments easily with an intuitive and seamless interface.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 hover:translate-x-2 hover:-translate-y-2 transition-all duration-500">
              <div className="bg-white p-6 shadow rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Real-Time Search</h3>
                <p>Find users quickly and send money in just a few clicks. search seamlessly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4" id="how-it-works">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4 hover:translate-x-2 hover:-translate-y-2 transition-all duration-500">
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Step 1: Sign Up</h3>
                <p>Create an account to get started with PayNow.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 hover:translate-x-2 hover:-translate-y-2 transition-all duration-500">
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Step 2: Search Users</h3>
                <p>Find people in our database easily and quickly.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 hover:translate-x-2 hover:-translate-y-2 transition-all duration-500">
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Step 3: Send Money</h3>
                <p>Complete your transactions effortlessly in seconds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-100" id="testimonials">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4 hover:translate-x-2 hover:-translate-y-2 transition-all duration-500">
              <blockquote className="bg-white p-6 shadow rounded-lg">
                <p>"PayNow makes sending money so easy! Highly recommend it."</p>
                <cite className="block mt-4 text-gray-500">- User A</cite>
              </blockquote>
            </div>
            <div className="w-full md:w-1/3 p-4 hover:translate-x-2 hover:-translate-y-2 transition-all duration-500">
              <blockquote className="bg-white p-6 shadow rounded-lg">
                <p>"Fast, secure, and user-friendly. Best payment app!"</p>
                <cite className="block mt-4 text-gray-500">- User B</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;