import Image from "next/image";
//import { BiBriefcase, BiHeadphone, BiTrophy } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section id='about' className="flex items-center justify-center p-4 bg-black py-20 h-[100vh]">
      <div className="w-full max-w-7xl overflow-hidden rounded-lg">
        <div className="p-8 md:p-12">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-white">Sobre Mim</h1>
            <p className="mt-2 text-gray-300">Introdução</p>
          </div>

          <div className="md:flex w-full space-x-8 flex-col md:flex-row space-y-5">
            <div className="flex justify-center flex-col items-center md:w-1/3 space-y-2">
              <div className="relative overflow-hidden rounded-lg w-80 h-80 shadow-2xl">
                <Image
                  src="/henrique.png"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className='text-center text-2xl font-bold text-white'> Henrique Christ Bergami</h2>
            </div>

            <div className="space-y-8 md:w-2/3">
              {/*<div className="grid grid-cols-3 gap-4">
                    <StatCard icon={<BiTrophy className="w-6 h-6" />} title="Experience" value="8+ Years" />
                    <StatCard icon={<BiBriefcase className="w-6 h-6" />} title="Completed" value="48+ Projects" />
                    <StatCard icon={<BiHeadphone className="w-6 h-6" />} title="Support" value="Online 24/7" />
                  </div>*/}
              <p className="leading-relaxed text-gray-200">
                Meu nome é Henrique, sou recém-formado em Ciência da Computação pela Universidade Vila Velha (UVV) e apaixonado por transformar ideias em soluções digitais eficientes. Durante minha jornada acadêmica e profissional, adquiri experiência prática em desenvolvimento de software, sempre com foco em aprender, evoluir e resolver problemas de forma criativa. Acredito no poder da colaboração e no impacto que um bom trabalho em equipe pode gerar, e é isso que me motiva a buscar sempre a melhor entrega em cada projeto que faço parte. Aqui, você pode conferir alguns dos meus trabalhos e as habilidades que tenho desenvolvido ao longo do tempo.
              </p>

              <p className="leading-relaxed text-gray-200">
                <span className='text-pink-500'>Fan Fact:</span> Eu amo ler, sou um grande fã de livros de ficção científica e fantasia, como novel e afins. Além disso, sou um ávido jogador de videogame e um entusiasta de jogos de tabuleiro.
              </p>

              <button className="flex items-center gap-2 px-6 py-3 text-white transition-colors border-2 border-cyan-500 shadow-md shadow-cyan-300 rounded-md hover:bg-gray-700">
                Download CV
                <FiFileText className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}