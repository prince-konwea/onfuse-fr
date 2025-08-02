"use client"

const SecureWallet = () => {
  const seedPhraseWords = [
    ["Suprise", "Door"],
    ["Dog", "Visit"],
    ["Party", "Balance"],
    ["Card", "Wrist"],
    ["Setup", "Glass"],
    ["Sprint", "Nylon"],
  ]

  const handleCopy = () => {
    const allWords = seedPhraseWords.flat().join(" ")
    navigator.clipboard.writeText(allWords)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 flex flex-col w-full max-w-sm mx-auto">
      <div className="flex-1">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-6 sm:mb-8 px-2">Secure wallet</h1>

        <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed px-2">
          Protect your wallet by saving your Secret Recovery Phrase in a place you trust. It is the only way to recover
          your wallet if you get locked out of the app or get a new device.
        </p>

        
        <div className="bg-blue-100 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="space-y-3 sm:space-y-4">
            {seedPhraseWords.map((pair, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-800 font-medium text-sm sm:text-base">{pair[0]}</span>
                <span className="text-gray-800 font-medium text-sm sm:text-base">{pair[1]}</span>
              </div>
            ))}
          </div>

         
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 w-full mt-4 sm:mt-6 py-2 sm:py-3 text-gray-700 hover:bg-blue-200 rounded-xl transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-5 sm:h-5"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            <span className="font-medium text-sm sm:text-base">Copy</span>
          </button>
        </div>
      </div>

      {/* button component */}
      <button className="w-full bg-blue-500 text-white py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-medium hover:bg-blue-600 transition-colors mt-auto">
        Add button component
      </button>
    </div>
  )
}

export default SecureWallet
