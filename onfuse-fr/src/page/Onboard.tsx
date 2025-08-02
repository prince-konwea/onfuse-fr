import React from 'react';
import { ArrowRight } from 'lucide-react';
import onfuseLogo from '../assets/Onfuse.png';

const OnfusePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <div className="bg-white w-full max-w-sm flex flex-col items-center p-6 rounded-2xl shadow-xl">
         <h1 className="text-xl sm:text-2xl font-semibold text-center leading-snug mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
  OnFuse
</h1>

        
        <img
          src={onfuseLogo}
          alt="Onfuse Logo"
          className="w-20 h-20 mb-6"
        />

        <h1 className="text-xl sm:text-2xl font-semibold text-center text-gray-900 leading-snug mb-4">
          The Most Secure &<br /> Easiest Crypto Wallet
        </h1>

        
        <p className="text-center text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          Manage all your digital assets in one secure place.
        </p>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full flex justify-center items-center space-x-2 transition">
          <ArrowRight className="w-4 h-4 bg-white text-blue-600 rounded-full p-1" />
          <span className="text-sm sm:text-base font-medium">Swipe to get started</span>
        </button>
      </div>
    </div>
  );
};

export default OnfusePage;
