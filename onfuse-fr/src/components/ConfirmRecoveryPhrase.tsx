"use client"

import { useState } from "react"

const ConfirmRecoveryPhrase = () => {
  const [selectedWords, setSelectedWords] = useState<string[]>([])

  const availableWords = [
    "Dog",
    "Card",
    "Glass",
    "Door",
    "Suprise",
    "Balance",
    "Party",
    "Setup",
    "Sprint",
    "Nylon",
    "Visit",
    "Wrist",
  ]

  const handleWordClick = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word))
    } else {
      setSelectedWords([...selectedWords, word])
    }
  }

  return (
    <div className="max-h-[100px] bg-gray-50 p-2 sm:p-3 flex flex-col w-full max-w-sm mx-auto">
      <div>
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-3 sm:mb-4 leading-tight px-1">
          Confirm Secret Recovery Phrase
        </h1>

        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed px-1">
          Select each word in the order it was presented to you.
        </p>

        
        <div className="bg-blue-100 rounded-2xl p-2 sm:p-3 mb-3 sm:mb-4 min-h-[60px] sm:min-h-[80px] flex flex-wrap gap-1 items-start">
          {selectedWords.map((word, index) => (
            <span
              key={index}
              className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700 border border-gray-200"
            >
              {word}
            </span>
          ))}
        </div>

        
        <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {availableWords.slice(0, 4).map((word) => (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full border-2 text-xs sm:text-sm font-medium transition-colors ${
                  selectedWords.includes(word)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
                }`}
              >
                {word}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {availableWords.slice(4, 7).map((word) => (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                className={`px-2 sm:px-4 py-2 sm:py-3 rounded-full border-2 text-xs sm:text-sm font-medium transition-colors ${
                  selectedWords.includes(word)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
                }`}
              >
                {word}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {availableWords.slice(7, 10).map((word) => (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                className={`px-2 sm:px-4 py-2 sm:py-3 rounded-full border-2 text-xs sm:text-sm font-medium transition-colors ${
                  selectedWords.includes(word)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
                }`}
              >
                {word}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {availableWords.slice(10).map((word) => (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full border-2 text-xs sm:text-sm font-medium transition-colors ${
                  selectedWords.includes(word)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
                }`}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>

      
      <button className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded-2xl text-sm sm:text-base font-medium hover:bg-blue-600 transition-colors mt-auto">
        Add button component
      </button>
    </div>
  )
}

export default ConfirmRecoveryPhrase
