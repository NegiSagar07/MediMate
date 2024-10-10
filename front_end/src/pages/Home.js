import React from 'react';
import { Link } from 'react-router-dom';
import News from '../components/News';

const Home = () => {
  return (
    <div className="w-screen h-auto bg-cover bg-no-repeat text-[#EEEEEE] font-serif">
      {/* Navbar */}
      <nav className="h-16 bg-[#222831] shadow-2xl flex flex-row justify-between px-6 md:px-12 items-center">
        <div className="text-xl md:text-2xl hover:bg-[#00ADB5] px-4 py-1 rounded-md">
          <p>MediMate</p>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/profile" className="hover:bg-[#00ADB5] px-4 py-2 rounded-md">Profile</Link>
          <Link to="/aboutus" className="hover:bg-[#00ADB5] px-4 py-2 rounded-md">About Us</Link>
          <Link to="/hospital" className="hover:bg-[#00ADB5] px-4 py-2 rounded-md">Register Hospital</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-10 px-4 md:px-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222831] mb-4 text-center transition-transform transform hover:scale-105">
          Discover Nearby Healthcare Services
        </h2>
        <p className="text-lg md:text-2xl lg:text-3xl font-medium mb-6 text-center transition-transform transform hover:scale-105 text-[#444444] max-w-3xl">
          Explore hospitals, clinics, chemists, and medical equipment providers tailored to your needs. 
          Get personalized recommendations to effortlessly meet your healthcare needs.
        </p>
        <div className="flex justify-center mt-6">
          <Link to="/services" className="bg-[#00ADB5] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#38bec3] transition duration-300 transform hover:scale-105">
            View Services
          </Link>
        </div>
      </section>


      {/* Service Links */}
      <section className="flex justify-center items-center mt-12 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-12">
          <Link to="/chemist" className="h-32 w-full bg-[#00ADB5] text-center flex items-center justify-center text-2xl md:text-3xl rounded-md shadow-xl transition-transform transform hover:scale-105 hover:bg-[#38bec3]">
            Chemist
          </Link>
          <Link to="/clinic" className="h-32 w-full bg-[#00ADB5] text-center flex items-center justify-center text-2xl md:text-3xl rounded-md shadow-xl transition-transform transform hover:scale-105 hover:bg-[#38bec3]">
            Clinic
          </Link>
          <Link to="/hospitals" className="h-32 w-full bg-[#00ADB5] text-center flex items-center justify-center text-2xl md:text-3xl rounded-md shadow-xl transition-transform transform hover:scale-105 hover:bg-[#38bec3]">
            Hospitals
          </Link>
          <Link to="/apparatus" className="h-32 w-full bg-[#00ADB5] text-center flex items-center justify-center text-2xl md:text-3xl rounded-md shadow-xl transition-transform transform hover:scale-105 hover:bg-[#38bec3]">
            Medical Apparatus
          </Link>
          <Link to="/emergency" className="h-32 w-full bg-[#00ADB5] text-center flex items-center justify-center text-2xl md:text-3xl rounded-md shadow-xl transition-transform transform hover:scale-105 hover:bg-[#38bec3]">
            Emergency Services
          </Link>
          <Link to="/appointment" className="h-32 w-full bg-[#00ADB5] text-center flex items-center justify-center text-2xl md:text-3xl rounded-md shadow-xl transition-transform transform hover:scale-105 hover:bg-[#38bec3]">
            Appointment Booking
          </Link>
        </div>
      </section>

      {/* Health Tips */}

      {/* Testimonials */}
      <section className="px-4 md:px-12 py-12 bg-gray-50 text-center text-gray-700">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Satisfied Patients Say</h2>
        <p className="text-gray-600 mb-8">Testimonials highlighting our commitment to quality healthcare and exceptional care</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">
              MediMate made it incredibly easy to find the right specialist for my health condition. The appointment booking process was smooth.
            </p>
            <h4 className="font-semibold text-lg mt-4">Priya Sharma</h4>
            <h5 className="text-gray-500">Patient</h5>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">
              Finding a reliable chemist during an emergency was a breeze with MediMate. Their platform saved me time and stress!
            </p>
            <h4 className="font-semibold text-lg mt-4">Ankit Singh</h4>
            <h5 className="text-gray-500">Emergency Case</h5>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">
              MediMate's clinic suggestions helped me get the necessary tests done at an affordable price. Their network of clinics is top-notch.
            </p>
            <h4 className="font-semibold text-lg mt-4">Neha Patel</h4>
            <h5 className="text-gray-500">Routine Checkup</h5>
          </div>
        </div>
      </section>

      <section className="pt-10 px-4 md:px-12 bg-[#f7f7f7] py-8 rounded-lg shadow-lg text-gray-700">
        <h2 className="text-4xl font-extrabold text-[#222831] mb-6 text-center">
          About Us
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-[#444444] text-center mb-4 max-w-3xl mx-auto">
          We are dedicated to connecting individuals with nearby hospitals, clinics, chemists, and medical equipment providers. 
          Our mission is to simplify the healthcare experience, making it more accessible and personalized for everyone.
        </p>
        
        <h3 className="text-3xl font-semibold mb-4 text-center">
          Our Vision
        </h3>
        <p className="text-lg md:text-xl lg:text-2xl text-[#444444] text-center mb-4 max-w-3xl mx-auto">
          Our vision is to create a world where healthcare is just a click away, ensuring everyone has access to the care they need.
        </p>
      </section>


      {/* Footer */}
      <footer className="bg-[#222831] text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-12">
          <div>
            <h4 className="text-lg font-semibold mb-4">MediMate</h4>
            <p>Connecting patients with trusted hospitals, clinics, and healthcare providers.</p>
            <ul className="flex space-x-4 mt-4">
              <li><a href="#" className="hover:text-blue-500">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-300">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
              <li><a href="#" className="hover:text-red-600">Pinterest</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Healthcare Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Find a Doctor</a></li>
              <li><a href="#" className="hover:underline">Medical Equipment Providers</a></li>
              <li><a href="#" className="hover:underline">Health Insurance</a></li>
              <li><a href="#" className="hover:underline">Emergency Care</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Healthcare Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Health Tips</a></li>
              <li><a href="#" className="hover:underline">COVID-19 Updates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 MediMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
