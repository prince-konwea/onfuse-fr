"use client"

import { useState, useEffect } from "react"

const ConfirmRecoveryPhrase = () => {
  
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  
  
  const [shuffledWords, setShuffledWords] = useState<string[]>([])

  
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

  
  useEffect(() => {
    
    const wordsToShuffle = [...availableWords]
    for (let i = wordsToShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordsToShuffle[i], wordsToShuffle[j]] = [wordsToShuffle[j], wordsToShuffle[i]];
    }
    setShuffledWords(wordsToShuffle)
  }, [])

 
  
   
  const handleWordClick = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word))
    } else {
      setSelectedWords([...selectedWords, word])
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl max-w-lg w-full">
       
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Confirm Secret Recovery Phrase
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Select each word in the order it was presented to you.
          </p>
        </div>

       
        <div className="bg-blue-50 rounded-2xl p-4 mb-6 sm:mb-8 min-h-[100px] flex flex-wrap gap-2 items-start justify-start border border-blue-200">
          {selectedWords.length > 0 ? (
            selectedWords.map((word, index) => (
              <span
                key={index}
                className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium text-blue-700 border border-blue-200"
              >
                {word}
              </span>
            ))
          ) : (
            <div className="text-gray-400 text-sm italic w-full text-center py-4">
              Your words will appear here...
            </div>
          )}
        </div>

        
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {shuffledWords.slice(0, 4).map((word) => (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                className={`
                  px-3 sm:px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 
                  shadow-sm hover:shadow-md
                  ${
                    selectedWords.includes(word)
                      ? "bg-blue-600 text-white border-2 border-blue-600"
                      : "bg-white text-blue-600 border-2 border-blue-400 hover:bg-blue-50"
                  }
                `}
              >
                {word}
              </button>
            ))}
          </div>
          
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {shuffledWords.slice(4, 7).map((word) => (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                className={`
                  px-3 sm:px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 
                  shadow-sm hover:shadow-md
                  ${
                    selectedWords.includes(word)
                      ? "bg-blue-600 text-white border-2 border-blue-600"
                      : "bg-white text-blue-600 border-2 border-blue-400 hover:bg-blue-50"
                  }
                `}
              >
                {word}
              </button>
            ))}
          </div>

          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {shuffledWords.slice(7, 10).map((word) => (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                className={`
                  px-3 sm:px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 
                  shadow-sm hover:shadow-md
                  ${
                    selectedWords.includes(word)
                      ? "bg-blue-600 text-white border-2 border-blue-600"
                      : "bg-white text-blue-600 border-2 border-blue-400 hover:bg-blue-50"
                  }
                `}
              >
                {word}
              </button>
            ))}
          </div>

          
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {shuffledWords.slice(10).map((word) => (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                className={`
                  px-3 sm:px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 
                  shadow-sm hover:shadow-md
                  ${
                    selectedWords.includes(word)
                      ? "bg-blue-600 text-white border-2 border-blue-600"
                      : "bg-white text-blue-600 border-2 border-blue-400 hover:bg-blue-50"
                  }
                `}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
        
        
        <button className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-full text-base font-bold hover:bg-blue-700 transition-colors shadow-lg">
          Continue
        </button>
      </div>
    </div>
  )
}

export default ConfirmRecoveryPhrase
