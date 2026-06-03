import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Personalcontact = () => {
  return (
    <div className="text-white space-y-6">
      <div>
        <h2 className="text-4xl font-extrabold tracking-tight relative inline-block text-white">
          Let&apos;s Connect
          <span className="absolute bottom-[-8px] left-0 w-20 h-1.5 bg-primary dark:bg-primaryDark rounded-full"></span>
        </h2>
        <p className="mt-6 text-white/70 text-base leading-relaxed">
          I am always excited to discuss new web projects, creative front-end ideas, or job/internship opportunities in full-stack web development. Reach out and let&apos;s make something amazing together!
        </p>
      </div>

      {/* Info Cards */}
      <div className="space-y-4 pt-4">
        <motion.div 
          whileHover={{ x: 8 }}
          className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300"
        >
          <div className="p-3.5 bg-primary/20 text-primary dark:text-primaryDark rounded-xl">
            <FaPhoneAlt size={20} />
          </div>
          <div>
            <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Call Me</p>
            <a href="tel:+8801715384539" className="text-sm font-semibold hover:text-primary dark:hover:text-primaryDark transition-colors">+880 1715-384539</a>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ x: 8 }}
          className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300"
        >
          <div className="p-3.5 bg-emerald-500/20 text-emerald-400 rounded-xl">
            <FaWhatsapp size={20} />
          </div>
          <div>
            <p className="text-xs text-white/50 uppercase tracking-widest font-bold">WhatsApp</p>
            <a href="https://wa.me/8801715384539" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-emerald-400 transition-colors">Start a Chat</a>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ x: 8 }}
          className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300"
        >
          <div className="p-3.5 bg-sky-500/20 text-sky-400 rounded-xl">
            <FaEnvelope size={20} />
          </div>
          <div>
            <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Email Address</p>
            <a href="mailto:sadatcse@gmail.com" className="text-sm font-semibold hover:text-sky-400 transition-colors">sadatcse@gmail.com</a>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ x: 8 }}
          className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300"
        >
          <div className="p-3.5 bg-rose-500/20 text-rose-400 rounded-xl">
            <FaMapMarkerAlt size={20} />
          </div>
          <div>
            <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Current Location</p>
            <span className="text-sm font-semibold">Mohammadpur, Dhaka, Bangladesh</span>
          </div>
        </motion.div>
      </div>

      {/* Social Icons Widget */}
      <div className="pt-6">
        <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">Follow My Work</p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/sadatcse/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:text-primary dark:hover:text-primaryDark hover:bg-white/10 transition-all duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.github.com/sadatcse/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:text-light dark:hover:text-dark hover:bg-white/10 transition-all duration-300">
            <FaGithub size={20} />
          </a>
          <a href="https://www.facebook.com/Jamy4244" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:text-blue-500 hover:bg-white/10 transition-all duration-300">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com/MDSadatKhan2" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:text-sky-400 hover:bg-white/10 transition-all duration-300">
            <BsTwitterX size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Personalcontact;