"use client"

import { useState } from "react"
import OnfuseLogo from "../assets/OnfuseLogo.webp" 

const OnboardingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-8 sm:p-12 font-sans">
      
      <div className="absolute top-0 left-0 right-0 flex justify-center mt-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-wider">
          OnFuse
        </h1>
      </div>

      
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8">
        
        <div className="my-8 sm:my-12">
          <img
            src={OnfuseLogo}
            alt="Onfuse Logo"
            className="w-48 h-auto"
          />
        </div>

        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          The Most Secure & Easiest Crypto Wallet
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
          Manage all your digital assets in one secure place.
        </p>
      </div>

      
      <div className="flex justify-center mb-8">
        <button className="flex items-center justify-center bg-blue-600 text-white text-base sm:text-lg font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 active:scale-95">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
          Swipe to get started
        </button>
      </div>
    </div>
  )
}

export default OnboardingPage
