import { useState } from 'react'
import ConfirmRecoveryPhrase from "./components/ConfirmRecoveryPhrase"
import SecureWallet from "./components/SecureWallet"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<"secure" | "confirm">("secure")

  return (
    <div className="w-full">
      
      <div className="fixed top-2 sm:top-4 left-2 sm:left-4 z-10 flex gap-1 sm:gap-2">
        <button
          onClick={() => setCurrentPage("secure")}
          className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${
            currentPage === "secure" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Secure
        </button>
        <button
          onClick={() => setCurrentPage("confirm")}
          className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${
            currentPage === "confirm" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Confirm
        </button>
      </div>

      
      <div className="pt-12 sm:pt-0">
        {currentPage === "secure" && <SecureWallet />}
        {currentPage === "confirm" && <ConfirmRecoveryPhrase />}
      </div>
    </div>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <h1 className='text-white bg-black'>Hello World</h1>
//   )
// }

export default App
