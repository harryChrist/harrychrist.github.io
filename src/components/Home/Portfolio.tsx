'use client';
import React, { useState, useEffect } from "react";
import { FaCode, FaAward, FaCubes } from "react-icons/fa6";
import Certificate from "@/components/Certificate";
import CardProject from "../CardProject";

import projects from "@/data/projects";
import certificates from "@/data/certificates";
import techStacks from "@/data/techStacks";
import TechStackIcon from "../TechStackIcon";

interface Certificate {
    Img: string;
}

const ToggleButton = ({ onClick, isShowingMore }: { onClick: () => void; isShowingMore: boolean }) => (
    <button
        onClick={onClick}
        className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300
      ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10
      hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
    >
        <span className="relative z-10 flex items-center gap-2">
            {isShowingMore ? "See Less" : "See More"}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
                    }`}
            >
                <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
            </svg>
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full" />
    </button>
);

export default function FullWidthTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [showAllCertificates, setShowAllCertificates] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const initialItems = isMobile ? 4 : 8;
    const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
    const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

    return (
        <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
            <div className="pb-10 text-center">
                <h2 className="inline-block text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text">
                    Portfolio Showcase
                </h2>
                <p className="max-w-2xl mx-auto mt-2 text-sm text-slate-400 md:text-base">
                Explore o meu percurso através de projectos, certificações e conhecimentos técnicos.
                Cada secção representa um marco no meu percurso de aprendizagem contínua.
                </p>
            </div>

            <div className="w-full">
                <div className="bg-gradient-to-b from-[rgba(139,92,246,0.03)] to-[rgba(59,130,246,0.03)] border border-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="flex flex-row gap-2 p-2">
                        {[0, 1, 2].map((index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex-1 flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${activeTab === index
                                        ? "bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-white shadow-lg shadow-purple-500/10"
                                        : "text-slate-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {index === 0 && <FaCode className={`w-5 h-5 mb-2 ${activeTab === 0 ? "text-purple-400" : ""}`} />}
                                {index === 1 && <FaAward className={`w-5 h-5 mb-2 ${activeTab === 1 ? "text-purple-400" : ""}`} />}
                                {index === 2 && <FaCubes className={`w-5 h-5 mb-2 ${activeTab === 2 ? "text-purple-400" : ""}`} />}
                                <span className="text-sm font-semibold">
                                    {["Projetos", "Certificados", "Conhecimento"][index]}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-4 overflow-hidden">
                    {activeTab === 0 && (
                        <div className="animate-fade-in">
                            <div className="container flex items-center justify-center mx-auto overflow-hidden">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                                    {displayedProjects.map((project) => (
                                        <div key={project.id}>
                                            <CardProject {...project} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {projects.length > initialItems && (
                                <div className="flex justify-start w-full mt-6">
                                    <ToggleButton
                                        onClick={() => setShowAllProjects(!showAllProjects)}
                                        isShowingMore={showAllProjects}
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 1 && (
                        <div className="animate-fade-in">
                            <div className="container flex items-center justify-center mx-auto overflow-hidden">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5">
                                    {displayedCertificates.map((certificate, index) => (
                                        <div key={index}>
                                            <Certificate {...certificate} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {certificates.length > initialItems && (
                                <div className="flex justify-start w-full mt-6">
                                    <ToggleButton
                                        onClick={() => setShowAllCertificates(!showAllCertificates)}
                                        isShowingMore={showAllCertificates}
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 2 && (
                        <div className="animate-fade-in pb-[5%]">
                            <div className="container flex items-center justify-center mx-auto overflow-hidden">
                                <div className="grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:gap-6">
                                    {techStacks.map((stack, index) => (
                                        <div key={index}>
                                            <TechStackIcon {...stack} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};