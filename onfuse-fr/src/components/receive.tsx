"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Copy, Check } from "lucide-react";

export default function ReceivePage() {
  const walletAddress = "0x1234567890abcdef1234567890abcdef12345678";
  const [copied, setCopied] = useState(false);

  // Function to copy wallet address to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Receive Ether
          </h1>
          <img
            src="/onfuse.png"
            alt="Ethereum Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <QRCodeSVG
              value={walletAddress}
              size={200}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
            />
          </div>
        </div>

        {/* Wallet Address */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Your Ethereum Address
          </label>
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
            <span className="text-sm text-gray-700 truncate">
              {walletAddress}
            </span>
            <button
              onClick={handleCopy}
              className="ml-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              title="Copy Address"
            >
              {copied ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Scan the QR code or copy the address to send Ether to this wallet.
          </p>
        </div>
      </div>
    </div>
  );
}
