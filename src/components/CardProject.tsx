import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';


const CardProject = ({ image, title, description, link, id }: any) => {
  const handleLiveDemo = (e: any) => {
    if (!link) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = (e: any) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="relative w-full group">
      <div className="relative overflow-hidden transition-all duration-300 border shadow-2xl rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border-white/10 hover:shadow-purple-500/20">
        <div className="absolute inset-0 transition-opacity duration-300 opacity-50 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 group-hover:opacity-70" />

        <div className="relative z-10 p-5">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              width={1000}
              height={1000}
              className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
            />
          </div>

          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text">
              {title}
            </h3>

            <p className="text-sm leading-relaxed text-gray-300/80 line-clamp-2">
              {description}
            </p>

            <div className="flex items-center justify-between gap-2 pt-4">
              <div className="flex-1">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLiveDemo}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-blue-300"
                  >
                    <FaGithub className="w-4 h-4 md:w-3 md:h-3" />
                    <span className='hidden md:inline'>
                      Github Repositório
                    </span>
                  </a>
                ) : (
                  <span className="text-sm text-gray-500">Demo Not Available</span>
                )}
              </div>

              <div className="flex-1">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLiveDemo}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300"
                  >
                    <span className='hidden md:inline'>
                      Live Demo
                    </span>
                    <FaExternalLinkAlt className="w-4 h-4 md:w-3 md:h-3" />
                  </a>
                ) : (
                  <span className="hidden text-sm text-gray-500 md:inline">Demo Not Available</span>
                )}
              </div>

              <div className="flex-1 text-right">
                {id ? (
                  <Link
                    href={`/project/${id}`}
                    onClick={handleDetails}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  >
                    Details
                    <FaArrowRight className="w-3 h-3" />
                  </Link>
                ) : (
                  <span className="text-sm text-gray-500">Details Not Available</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;