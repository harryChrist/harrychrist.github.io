'use client';
import React, { useState, useEffect } from "react";
import {
  FaShare,
  FaUser,
  FaEnvelope,
  FaComment,
  FaPaperPlane
} from "react-icons/fa6";
import SocialLinks from "./SocialLinks";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // Validar se todos os campos estão preenchidos
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setAlertMessage("Por favor, preencha todos os campos.");
      setTimeout(() => setAlertMessage(""), 3000);
      return;
    }

    // Criar o email com os dados do formulário
    const subject = `Contato de ${formData.name} - Portfolio`;
    const body = `Olá Henrique,

Meu nome é ${formData.name} e gostaria de entrar em contato.

Email para resposta: ${formData.email}

Mensagem:
${formData.message}

---
Enviado através do seu portfolio.`;

    // Criar o link mailto
    const mailtoLink = `mailto:henriquechristb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir o cliente de email
    window.location.href = mailtoLink;
    
    // Mostrar mensagem de sucesso
    setAlertMessage("Redirecionando para seu cliente de email...");
    
    // Limpar o formulário após um delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setAlertMessage("");
    }, 2000);
  };

  return (
    <div id="Contact" className="min-h-screen bg-[#030014]">
      {/* Alert Message */}
      {alertMessage && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg z-50 ${
          alertMessage.includes("Redirecionando") || alertMessage.includes("sucesso")
            ? "bg-green-500/20 text-green-400"
            : "bg-red-500/20 text-red-400"
          }`}>
          {alertMessage}
        </div>
      )}

      <div className="text-center pt-20 mb-2 px-5%">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text">
          Contacte-me
        </h2>
        <p className="max-w-2xl mx-auto mt-2 text-sm text-slate-400 md:text-base">
          Tem alguma pergunta? Envie-me uma mensagem e entrarei em contato com você em breve.
        </p>
      </div>

      <div className="py-10 flex justify-center px-[5%]">
        <div className="container grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8">

          <SocialLinks />
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-[#6366f1]/10 transition-shadow">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text">
                  Entrar em contacto
                </h2>
                <p className="text-gray-400">
                  Tem algo a discutir? Envie-me uma mensagem e vamos conversar.
                </p>
              </div>
              <FaShare className="w-10 h-10 text-[#6366f1] opacity-50" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="relative group">
                <FaUser className="absolute w-5 h-5 text-gray-400 transition-colors left-4 top-4" />
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all hover:border-[#6366f1]/30"
                  required
                />
              </div>

              <div className="relative group">
                <FaEnvelope className="absolute w-5 h-5 text-gray-400 transition-colors left-4 top-4" />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all hover:border-[#6366f1]/30"
                  required
                />
              </div>

              <div className="relative group">
                <FaComment className="absolute w-5 h-5 text-gray-400 transition-colors left-4 top-4" />
                <textarea
                  name="message"
                  placeholder="Mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-40 p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all hover:border-[#6366f1]/30"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-95 flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="w-5 h-5" />
                Enviar Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};