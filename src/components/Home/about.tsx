import Image from "next/image";
import { memo, useMemo } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaAward, FaCode, FaGlobe } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
//import { BiBriefcase, BiHeadphone, BiTrophy } from "react-icons/bi";
import { IoSparkles } from "react-icons/io5";

import projects from "@/data/projects";

export default function AboutSection() {

  // Memoized calculations
    const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
      const storedProjects = projects;
      const storedCertificates = JSON.parse("[]");
      
      const startDate = new Date("2021-01-01");
      const today = new Date();
      const experience = today.getFullYear() - startDate.getFullYear() -
        (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);
  
      return {
        totalProjects: storedProjects.length,
        totalCertificates: storedCertificates.length,
        YearExperience: experience
      };
    }, []);

  const statsData = useMemo(() => [
      {
        icon: FaCode,
        color: "from-[#6366f1] to-[#a855f7]",
        value: totalProjects,
        label: "Projetos",
        description: "Soluções inovadoras criadas",
        animation: "fade-right",
      },
      {
        icon: FaAward,
        color: "from-[#a855f7] to-[#6366f1]",
        value: totalCertificates,
        label: "Certificados",
        description: "Competências profissionais validadas",
        animation: "fade-up",
      },
      {
        icon: FaGlobe,
        color: "from-[#6366f1] to-[#a855f7]",
        value: YearExperience,
        label: "Anos de experiência em Programação",
        description: "Percurso de aprendizagem contínua",
        animation: "fade-left",
      },
    ], [totalProjects, totalCertificates, YearExperience]);

  return (
    <section id='about' className="h-auto pb-[10%] pt-[5%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] sm-mt-0 bg-[#030014]" >
      <div className="text-center lg:mb-8 mb-2 px-[5%]">
        <div className="relative inline-block group">
          <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            Sobre
          </h2>
        </div>
        <p
          className="flex items-center justify-center max-w-2xl gap-2 mx-auto mt-2 text-base text-gray-400 sm:text-lg"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <IoSparkles className="w-5 h-5 text-purple-400" />
          Transformando ideias em experiências digitais
          <IoSparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>

      <div className="relative w-full pt-8 mx-auto sm:pt-12">
        <div className="flex flex-col-reverse items-center gap-10 lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl font-bold sm:text-4xl lg:text-5xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Olá, me chamo
              </span>
              <span
                className="block mt-2 text-gray-200"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                Henrique Christ Bergami
              </span>
            </h2>

            <p
              className="pb-4 text-base leading-relaxed text-justify text-gray-400 sm:text-lg lg:text-xl sm:pb-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Sou formado em Ciência da Computação pela UVV, amo criar soluções digitais que funcionam. Já trabalhei em vários projetos, sempre aprendendo e buscando resolver problemas de um jeito criativo. Acredito no poder do trabalho em equipe e dou meu melhor em cada projeto. Confere aí o que já fiz! 😄
            </p>

            <div className="flex flex-col items-center w-full gap-4 lg:flex-row lg:items-start lg:gap-4 lg:px-0">
              <a href="" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
                >
                  <FiFileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                </button>
              </a>
              <a href="#Portofolio" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200"
                >
                  <FaCode className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

        <a href="#Portofolio">
          <div className="grid grid-cols-1 gap-6 mt-16 cursor-pointer md:grid-cols-3">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>
      </div>
    </section>
  )
}

const ProfileImage = memo(() => (
  <div className="flex items-center justify-end p-0 py-2 pb-2 sm:p-12 sm:py-0 sm:pb-0">
    <div
      className="relative group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 blur-2xl animate-pulse-slow" />
        <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 blur-2xl animate-float" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 z-20 transition-all duration-700 border-4 rounded-full border-white/20 group-hover:border-white/40 group-hover:scale-105" />

          {/* Optimized overlay effects - disabled on mobile */}
          <div className="absolute inset-0 z-10 hidden transition-opacity duration-700 bg-gradient-to-b from-black/20 via-transparent to-black/40 group-hover:opacity-0 sm:block" />
          <div className="absolute inset-0 z-10 hidden transition-opacity duration-700 opacity-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 group-hover:opacity-100 sm:block" />

          <Image
            src="/henrique.png"
            alt="Profile"
            className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
            width={320}
            height={320}
          />

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 z-20 hidden transition-all duration-700 opacity-0 group-hover:opacity-100 sm:block">
            <div className="absolute inset-0 transition-transform duration-1000 transform -translate-x-full bg-gradient-to-tr from-transparent via-white/20 to-transparent group-hover:translate-x-full" />
            <div className="absolute inset-0 transition-transform duration-1000 delay-100 transform translate-y-full bg-gradient-to-bl from-transparent via-white/10 to-transparent group-hover:-translate-y-full" />
            <div className="absolute inset-0 transition-transform duration-700 scale-0 border-8 rounded-full border-white/10 group-hover:scale-100 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }: any) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 flex flex-col justify-between h-full p-6 overflow-hidden transition-all duration-300 border bg-gray-900/50 backdrop-blur-lg rounded-2xl border-white/10 hover:scale-105 hover:shadow-2xl">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-center w-16 h-16 transition-transform rounded-full bg-white/10 group-hover:rotate-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span
          className="text-4xl font-bold text-white"
          data-aos="fade-up-left"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
        >
          {value}
        </span>
      </div>

      <div>
        <p
          className="mb-2 text-sm tracking-wider text-gray-300 uppercase"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          {label}
        </p>
        <div className="flex items-center justify-between">
          <p
            className="text-xs text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            {description}
          </p>
          <BsArrowUpRight className="w-4 h-4 transition-colors text-white/50 group-hover:text-white" />
        </div>
      </div>
    </div>
  </div>
));