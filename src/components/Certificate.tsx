'use client';
import React, { useState } from "react";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { FaExpand } from "react-icons/fa6";

const Certificate = ({ image, title, company, data, competences, link }: any) => {
  const handleLiveDemo = (e: any) => {
    if (!link) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  return (
    <div className="relative w-full group">
      <div className="relative overflow-hidden transition-all duration-300 border shadow-2xl rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border-white/10 hover:shadow-purple-500/20">
        <div className="absolute inset-0 transition-opacity duration-300 opacity-50 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 group-hover:opacity-70" />

        <div className="relative z-10 p-5">
          <div className="">
            <div className='flex justify-between'>
              <p className="text-sm leading-relaxed text-gray-300/80 line-clamp-2">
                {company}
              </p>
              <p className="text-sm leading-relaxed text-gray-300/80 line-clamp-2">
                {data}
              </p>
            </div>
            <h3 className="mt-2 mb-1 text-xl font-semibold text-transparent bg-gradient-to-r from-blue-500 via-purple-300 to-pink-400 bg-clip-text">
              {title}
            </h3>

            <h3 className="text-sm text-white">
             {competences.join(", ")}
            </h3>

            <div className="flex items-center justify-between gap-2 pt-4">
              <div className="flex justify-end w-full">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300"
                >
                  <span className='hidden md:inline'>
                    Exibir Credential
                  </span>
                  <FaExternalLinkAlt className="w-4 h-4 md:w-3 md:h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;