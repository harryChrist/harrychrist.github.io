import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import HamburgerMenu from "./HamburguerMenu";

export default function HomeSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            {/* Navigation */}
            <nav className="relative flex items-center justify-between p-8 z-1">
                <a
                    href="https://github.com/harryChrist"
                    className="flex items-center space-x-2 group" // Adicionamos "group" para estilização no hover
                >
                    {/* Símbolo © girando */}
                    <div className="transition-transform duration-500 transform group-hover:rotate-360">
                        <span>©</span>
                    </div>

                    {/* Texto alternando */}
                    <div className="overflow-hidden w-[150px] relative">
                        <div className="transition-all duration-500 transform whitespace-nowrap group-hover:opacity-0 group-hover:-translate-y-6">
                            <span>Code by </span>
                            <span>Henrique</span>
                        </div>
                        <div className="absolute top-0 left-0 transition-all duration-500 transform translate-y-6 opacity-0 whitespace-nowrap group-hover:opacity-100 group-hover:translate-y-0">
                            <span>Henrique Christ</span>
                        </div>
                    </div>
                </a>
                <div className="flex items-center gap-8">
                    <Link href="#about" className="hidden transition-opacity md:block hover:opacity-70">
                        Sobre
                    </Link>
                    <Link href="#skills" className="hidden transition-opacity md:block hover:opacity-70">
                        Habilidades
                    </Link>
                    <Link href="#projects" className="hidden transition-opacity md:block hover:opacity-70">
                        Projetos
                    </Link>
                    <Link href="#contact" className="hidden transition-opacity md:block hover:opacity-70">
                        Contact
                    </Link>
                    <HamburgerMenu/>
                </div>
            </nav>

            <div className="relative items-center justify-center hidden w-full h-full mt-26 lg:block">
                <div className="relative w-full py-4 overflow-hidden">
                    <div className="flex whitespace-nowrap animate-infinite-scroll">
                        <div className="inline-block px-4">
                            <h1 className="text-[15vw] md:text-[13vw] font-bold">Henrique Christ<span className="mx-4 md:ml-20 md:mr-10">—</span></h1>
                        </div>
                        <div className="inline-block px-4">
                            <h1 className="text-[15vw] md:text-[13vw] font-bold">Henrique Christ<span className="mx-4 md:ml-20 md:mr-10">—</span></h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Image */}
            <div className="absolute top-0 bottom-0 left-0 right-0 z-0 flex items-center justify-center">
                <Image
                    src="/me2.png"
                    alt="Profile photo"
                    width={3000}
                    height={3000}
                    className="object-cover w-auto h-full min-w-0 md:max-w-full" // Ajuste aqui
                    priority
                />
            </div>

            <div className="absolute mb-8 left-8 lg:right-8 lg:bottom-0 bottom-1/5">
                <div className="flex flex-col lg:items-end">
                    <h1 className="block text-4xl font-bold lg:text-6xl lg:hidden">Henrique Christ</h1>
                    <h2 className="text-2xl font-light lg:text-4xl">Freelance</h2>
                    <h2 className="text-2xl font-light lg:text-4xl">Developer Full Stack</h2>
                </div>
            </div>
            
            <div className="absolute bottom-0 z-0 font-bold leading-none text-white transform -translate-x-1/2 left-1/2 whitespace-nowrap">
                <button className="flex flex-col items-center text-gray-200 transition-colors hover:text-gray-600 animate-bounce">
                    <span className="text-[15px]">MAIS</span>
                    <MdOutlineKeyboardArrowDown className="w-12 h-12 mb-5" />
                </button>
            </div>


        </section>
    )
}