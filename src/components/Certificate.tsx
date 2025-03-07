'use client';
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaExpand } from "react-icons/fa6";

const Certificate = ({ image, title, company, data, competences, link }:any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full group">
      {/* Thumbnail Container */}
      <div 
        className="relative overflow-hidden transition-all duration-300 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-1"
        onClick={() => setIsOpen(true)}
      >
        {/* Image with Overlay */}
        <div className="relative before:content-[''] before:absolute before:inset-0 before:bg-black/10 before:z-10">
          <img
            src={image}
            alt="Certificate"
            className="object-cover w-full h-auto duration-300 contrast-105 brightness-90 saturate-110 transition-filter group-hover:contrast-100 group-hover:brightness-100 group-hover:saturate-110"
          />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 z-20 transition-opacity duration-300 opacity-0 cursor-pointer group-hover:opacity-100 bg-black/30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] group-hover:-translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-400 text-center w-full text-white">
            <FaExpand className="w-10 h-10 mx-auto mb-2 drop-shadow-md" />
            <h3 className="text-xl font-semibold drop-shadow-md">View Certificate</h3>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute z-50 p-2 text-white transition-colors duration-200 rounded-full top-4 right-4 bg-black/60 hover:bg-black/80 hover:scale-110"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={image}
              alt="Certificate Full View"
              className="max-h-[85vh] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;