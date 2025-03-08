import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaDiscord
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Conecte-se comigo",
    subText: "no LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/henrique-bergami-4069a61bb/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@henriquecbergami",
    icon: FaInstagram,
    url: "https://www.instagram.com/henriquecbergami/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "YouTube",
    displayName: "Youtube",
    subText: "@HarryKaray",
    icon: FaYoutube,
    url: "https://www.youtube.com/@HarryKaray",
    color: "#FF0000",
    gradient: "from-[#FF0000] to-[#CC0000]"
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@harryChrist",
    icon: FaGithub,
    url: "https://github.com/harryChrist",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  },
  {
    name: "Discord",
    displayName: "Discord",
    subText: "harrykaray",
    icon: FaDiscord,
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  }
];

export default function SocialLinks() {
  const linkedIn = socialLinks.find(link => link.isPrimary);
  const otherLinks = socialLinks.filter(link => !link.isPrimary);
  const [instagram, youtube, github, tiktok] = otherLinks;

  return (
    <div className="w-full p-6 py-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-xl">
      <h3 className="flex items-center gap-2 mb-6 text-xl font-semibold text-white">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Conecte-se comigo
      </h3>

      <div className="flex flex-col gap-4">

        {/* Second Row - Instagram & YouTube */}
        <div className="grid grid-cols-1 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-3 p-4 overflow-hidden transition-all duration-500 border group rounded-xl bg-white/5 border-white/10 hover:border-white/20"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`} />

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 transition-all duration-500 rounded-lg opacity-20 group-hover:scale-125 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }} />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 transition-colors duration-300 group-hover:text-white">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate transition-colors duration-300 group-hover:text-gray-300">
                  {link.subText}
                </span>
              </div>

              <FaExternalLinkAlt className="w-4 h-4 ml-auto text-gray-500 transition-all duration-300 transform -translate-x-2 opacity-0 group-hover:text-white group-hover:opacity-100 group-hover:translate-x-0" />

              <div className="absolute inset-0 overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};