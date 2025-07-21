// src/components/HighlightMarquee.jsx
import React from "react";
import { AlertTriangle } from "lucide-react";
import "./Marque.css"; // Optional for fine control

const HighlightMarquee = ({ message }) => {
  return (
    <div className="relative bg-red-400 text-black py-2 overflow-hidden shadow-md z-50">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <AlertTriangle className="w-6 h-6 text-red-700 animate-pulse" />
      </div>

      <div className="pl-12">
        <div className="whitespace-nowrap animate-marquee font-semibold text-lg sm:text-xl tracking-wide">
          {message}
        </div>
      </div>
    </div>
  );
};

export default HighlightMarquee;
