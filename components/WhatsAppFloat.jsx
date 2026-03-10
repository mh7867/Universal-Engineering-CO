"use client";

import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "+923052311114"; // ← Replace with your number (country code + number)
const WHATSAPP_MESSAGE = "Hello! I'd like to get in touch."; // ← Pre-filled message

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const encoded = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`fixed bottom-7 right-7 z-50 flex items-center gap-3 transition-all duration-500 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Tooltip */}
      <div className="relative">
        <span
          className={`bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg
            transition-all duration-200 whitespace-nowrap block
            ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}`}
        >
          Chat with us
        </span>
        {/* Arrow */}
        <span
          className={`absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0
            border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900
            transition-all duration-200
            ${hovered ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full
          bg-gradient-to-br from-[#25d366] to-[#128c7e]
          shadow-lg shadow-green-400/40
          hover:scale-110 hover:shadow-xl hover:shadow-green-400/50
          active:scale-95
          transition-transform duration-200 ease-out"
      >
        {/* Ping rings */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-25" />
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-15 [animation-delay:600ms]" />

        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
          className={`relative z-10 transition-transform duration-300 ${hovered ? "scale-110" : "scale-100"}`}
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.654 4.823 1.793 6.84L2 30l7.363-1.77A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.59l-.418-.248-4.368 1.05 1.08-4.25-.272-.435A11.44 11.44 0 0 1 4.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.455c-.344-.172-2.04-1.006-2.356-1.12-.316-.115-.546-.172-.776.172-.23.344-.89 1.12-1.09 1.35-.2.23-.402.258-.746.086-.344-.172-1.453-.536-2.767-1.708-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.021-.53.15-.7.155-.155.344-.402.516-.603.172-.2.23-.344.344-.573.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.58-.776-.59l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.204 1.177-1.204 2.87s1.232 3.328 1.404 3.558c.172.23 2.426 3.703 5.878 5.19.822.355 1.463.566 1.963.724.824.263 1.574.226 2.167.137.661-.099 2.04-.833 2.327-1.637.287-.804.287-1.493.2-1.637-.086-.143-.316-.23-.66-.402z" />
        </svg>
      </button>
    </div>
  );
}
