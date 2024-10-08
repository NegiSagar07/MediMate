import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="w-screen h-max bg-[#393E46] text-[#EEEEEE] font-serif">
      <nav className='h-16 bg-[#222831] shadow-2xl flex flex-row justify-between'>
        <div className='w-28 text-center content-center ml-12 text-xl hover:bg-[#00ADB5] rounded-md'>
          <p>MediMate</p>
        </div>
        <div className='flex flex-row justify-end'>
          <Link to = "/aboutus" className='h-16 w-28 text-center content-center mr-16 text-xl hover:bg-[#00ADB5] rounded-md'>
            <p>About Us</p>
          </Link>
          <Link to = "/signup" className='h-16 w-40 text-center content-center mr-16 text-xl hover:bg-[#00ADB5] rounded-md'>
            <p>Register Hospital</p>
          </Link>
        </div>
      </nav>
      <div className=' mt-16'>
        <p className='h-20 content-center w-5/12 text-4xl rounded-md shadow-2xl pl-12 mt-4 transition-transform transform hover:scale-105'>Discover nearby hospitals, clinics, chemists,</p>
        <p className='h-20 content-center w-6/12 text-4xl rounded-md shadow-2xl pl-12 mt-4 transition-transform transform hover:scale-105'>and medical equipment providers with personalized, </p>
        <p className='h-20 content-center w-7/12 text-4xl rounded-md shadow-2xl pl-12 mt-4 transition-transform transform hover:scale-105'>recommendations to meet your healthcare needs effortlessly.</p>
      </div>
      <div className=' flex justify-center items-center'>
        <div className='grid grid-cols-3 mt-20'>
          <Link to = "/chemist" className='h-36 w-80 bg-[#00ADB5] text-center content-center text-5xl rounded-md shadow-2xl m-8 
            transition-transform transform hover:scale-105 hover:bg-[#38bec3]'>
            <p>Chemist's</p>
          </Link>
          <Link to = "/clinic" className='h-36 w-80 bg-[#00ADB5] text-center content-center text-5xl rounded-md shadow-2xl m-8 
            transition-transform transform hover:scale-105 hover:bg-[#38bec3]'>
            <p>Clinic</p>
          </Link>
          <Link to = "/hospitals" className='h-36 w-80 bg-[#00ADB5] text-center content-center text-5xl rounded-md shadow-2xl m-8 
            transition-transform transform hover:scale-105 hover:bg-[#38bec3]'>
            <p>Hospitals</p>
          </Link>
          <Link to = "/apparatus" className='h-36 w-80 bg-[#00ADB5] text-center content-center text-5xl rounded-md shadow-2xl m-8 
            transition-transform transform hover:scale-105 hover:bg-[#38bec3]'>
            <p>Medical Apparatus</p>
          </Link>
          <Link to = "/emergency" className='h-36 w-80 bg-[#00ADB5] text-center content-center text-5xl rounded-md shadow-2xl m-8 
            transition-transform transform hover:scale-105 hover:bg-[#38bec3]'>
            <p>Emergency Sevices</p>
          </Link>
          <Link to = "/hospitals" className='h-36 w-80 bg-[#00ADB5] text-center content-center text-5xl rounded-md shadow-2xl m-8 
            transition-transform transform hover:scale-105 hover:bg-[#38bec3]'>
            <p>Appointment Booking</p>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>Today's Health Tip !</p>
          </div>
          <div>
            <p>Stay hidrated </p>
          </div>
        </div>
        <div>
          <div>
            <p>News</p>
          </div>
          <div>
            <p>A new version of COVID is out.</p>
          </div>
          <div>
            <p>COVID is developed in china during an experiment and from china it is spread all over the world. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home