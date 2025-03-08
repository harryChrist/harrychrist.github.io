'use client';
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const navItems = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "Sobre" },
        { href: "#Portofolio", label: "Portofolio" },
        { href: "#Contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navItems.map(item => {
                const section = document.querySelector(item.href) as HTMLElement;
                if (section) {
                    return {
                        id: item.href.replace("#", ""),
                        offset: section.offsetTop - 550,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find((section: any) =>
                currentPosition >= section.offset &&
                currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (e: any, href: any) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const top = section.offsetTop - 100;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${isOpen
                ? "bg-[#030014] opacity-100"
                : scrolled
                    ? "bg-[#030014]/50 backdrop-blur-xl"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="https://github.com/harryChrist"
                        className="flex items-center space-x-2 group" // Adicionamos "group" para estilização no hover
                    >
                        {/* Símbolo © girando */}
                        <div className="transition-transform duration-500 transform group-hover:rotate-360">
                            <span>©</span>
                        </div>

                        {/* Texto alternando */}
                        <div className="overflow-hidden w-[150px] relative ">
                            <div className="transition-all duration-500 transform whitespace-nowrap group-hover:opacity-0 group-hover:-translate-y-6 ">
                                <span>Code by </span>
                                <span>Henrique</span>
                            </div>
                            <div className="absolute top-0 left-0 transition-all duration-500 transform translate-y-6 opacity-0 whitespace-nowrap group-hover:opacity-100 group-hover:translate-y-0">
                                <span>Henrique Christ</span>
                            </div>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center ml-8 space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className="relative px-1 py-2 text-sm font-medium group"
                                >
                                    <span
                                        className={`relative z-10 transition-colors duration-300 ${activeSection === item.href.substring(1)
                                            ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                            : "text-[#e2d3fd] group-hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${activeSection === item.href.substring(1)
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out transform ${isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
                                }`}
                        >
                            {isOpen ? (
                                <MdClose className="w-6 h-6" />
                            ) : (
                                <MdMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed top-0 z-1 right-0 h-full bg-black transition-all duration-600 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    } w-full md:w-1/2`}
            >
                {/* Ícone de fechar dentro do menu */}
                <button
                    className="absolute flex items-center justify-center w-12 h-12 transition-all duration-200 bg-white rounded-full shadow-lg z-1 top-4 right-4 bg-opacity-20 hover:scale-110 hover:shadow-xl"
                    onClick={toggleMenu}
                >
                    <MdClose className="text-black" size={24} />
                </button>

                <div className="absolute flex items-center w-full h-full p-8 space-y-6 text-left">
                    <div className='w-full space-y-4 justiy-center'>
                        <h3>Navegação</h3>
                        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <ul className="my-6 mb-12 space-y-4">
                            <li className="text-2xl text-white uppercase hover:text-blue-500"><a href='#about'>Sobre</a></li>
                            <li className="text-2xl text-white uppercase hover:text-blue-500"><a href='#skills'>Habilidades</a></li>
                            <li className="text-2xl text-white uppercase hover:text-blue-500"><a href='#projects'>Projetos</a></li>
                            <li className="text-2xl text-white uppercase hover:text-blue-500"><a href='#contact'>Contact</a></li>
                        </ul>
                        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <h3>Social</h3>
                        <ul className="flex space-x-5">
                            <li className="text-3xl text-white"><FaLinkedin /></li>
                            <li className="text-3xl text-white"><FaInstagram /></li>
                            <li className="text-3xl text-white"><FaGithub /></li>
                            <li className="text-3xl text-white"><FaTwitter /></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Overlay escuro */}
            <div
                className={`fixed top-0 left-0 h-full w-full bg-black transition-all duration-500 ease-in-out ${isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleMenu}
            ></div>
        </nav>
    )
}