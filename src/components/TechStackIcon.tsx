import Image from 'next/image';
import React from 'react';

const TechStackIcon = ({ icon, name }: any) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6 transition-all duration-300 ease-in-out shadow-lg cursor-pointer group rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <div className="absolute transition duration-300 rounded-full opacity-0 -inset-1 bg-gradient-to-r blur"></div>
        <Image 
          src={icon} 
          alt={`${name} icon`}
          width={80}
          height={80}
          className="relative w-12 h-12 transition-transform duration-300 transform md:h-16 md:w-16"
        />
      </div>
      <span className="text-sm font-semibold tracking-wide transition-colors duration-300 text-slate-300 md:text-base group-hover:text-white">
        {name}
      </span>
    </div>
  );
};

export default TechStackIcon; 