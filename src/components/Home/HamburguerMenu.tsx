'use client'; // Indica que o componente é renderizado no lado do cliente

import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";

const HamburgerMenu = ({ menuIconSize = 24, closeIconSize = 32 }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Ícone do Hamburger */}
            <button
                className="flex items-center justify-center w-12 h-12 p-0 m-0 transition-all duration-200 rounded-full shadow-lg bg-opacity-20 hover:scale-110 hover:shadow-xl md:hidden"
                onClick={toggleMenu}
            >
                {isOpen ? (
                    <MdClose className="text-white" size={closeIconSize} />
                ) : (
                    <MdMenu className="text-white" size={menuIconSize} />
                )}
            </button>

            <div
                className={`fixed top-0 z-1 right-0 h-full bg-black transition-all duration-600 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    } w-full md:w-1/2`}
            >
                {/* Ícone de fechar dentro do menu */}
                <button
                    className="absolute flex items-center justify-center w-12 h-12 transition-all duration-200 bg-white rounded-full shadow-lg z-1 top-4 right-4 bg-opacity-20 hover:scale-110 hover:shadow-xl"
                    onClick={toggleMenu}
                >
                    <MdClose className="text-black" size={closeIconSize} />
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
        </div>
    );
};

export default HamburgerMenu;