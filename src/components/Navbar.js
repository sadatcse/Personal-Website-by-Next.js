import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={`${className} relative group text-sm font-semibold tracking-wide transition-colors duration-300 ${
        isActive
          ? "text-primary dark:text-primaryDark"
          : "text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark"
      }`}
    >
      {title}
      <span
        className={`inline-block h-[2px] bg-primary dark:bg-primaryDark absolute left-0 -bottom-1 transition-[width] ease duration-300 rounded-full ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-lg font-semibold tracking-wide transition-colors duration-300 ${
        isActive ? "text-primary dark:text-primaryDark" : "text-light dark:text-dark hover:text-primary dark:hover:text-primaryDark"
      }`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`inline-block h-[2px] bg-primary dark:bg-primaryDark absolute left-0 -bottom-1 transition-[width] ease duration-300 rounded-full ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full sticky top-0 left-0 right-0 flex items-center justify-between px-32 py-5 font-medium z-50 dark:text-light lg:px-16 md:px-12 sm:px-8 bg-light/80 dark:bg-dark/80 backdrop-blur-lg border-b border-dark/10 dark:border-light/10 shadow-sm transition-all duration-300">

      {/* Hamburger (mobile) */}
      <button
        type="button"
        className="flex-col items-center justify-center hidden lg:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? "opacity-0" : "opacity-100"} my-0.5`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
      </button>

      {/* Desktop Nav */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center gap-8">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/contact" title="Contact" />
        </nav>

        <nav className="flex items-center gap-4">
          <motion.a target="_blank" href="https://www.linkedin.com/in/sadatcse/" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={22} />
          </motion.a>
          <motion.a target="_blank" href="https://www.github.com/sadatcse/" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="text-dark dark:text-light hover:text-dark dark:hover:text-white transition-colors" aria-label="GitHub">
            <FaGithub size={22} />
          </motion.a>
          <motion.a target="_blank" href="https://www.facebook.com/Jamy4244" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="text-dark dark:text-light hover:text-blue-600 transition-colors" aria-label="Facebook">
            <FaFacebook size={22} />
          </motion.a>
          <motion.a target="_blank" href="https://twitter.com/MDSadatKhan2" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="text-dark dark:text-light hover:text-sky-400 transition-colors" aria-label="Twitter X">
            <BsTwitterX size={20} />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-2 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 border-2 ${
              mode === "light"
                ? "bg-dark text-light border-dark hover:bg-dark/80"
                : "bg-light text-dark border-light hover:bg-light/80"
            }`}
            aria-label="Toggle theme"
          >
            {mode === "light" ? <FaSun size={16} /> : <IoMdMoon size={16} className="fill-dark" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="min-w-[70vw] sm:min-w-[90vw] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-32 bg-dark/90 dark:bg-light/90 rounded-2xl z-50 backdrop-blur-xl border border-white/10"
            initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <nav className="flex items-center justify-center flex-col gap-6">
              <CustomMobileLink toggle={handleClick} href="/" title="Home" />
              <CustomMobileLink toggle={handleClick} href="/about" title="About" />
              <CustomMobileLink toggle={handleClick} href="/projects" title="Projects" />
              <CustomMobileLink toggle={handleClick} href="/contact" title="Contact" />
            </nav>
            <nav className="flex items-center justify-center gap-5 mt-10">
              <motion.a target="_blank" href="https://www.linkedin.com/in/sadatcse/" whileHover={{ y: -2 }} className="text-light dark:text-dark hover:text-primary dark:hover:text-primaryDark text-2xl" aria-label="LinkedIn">
                <FaLinkedin />
              </motion.a>
              <motion.a target="_blank" href="https://www.github.com/sadatcse/" whileHover={{ y: -2 }} className="text-light dark:text-dark hover:text-white text-2xl" aria-label="GitHub">
                <FaGithub />
              </motion.a>
              <motion.a target="_blank" href="https://www.facebook.com/Jamy4244" whileHover={{ y: -2 }} className="text-light dark:text-dark hover:text-blue-500 text-2xl" aria-label="Facebook">
                <FaFacebook />
              </motion.a>
              <motion.a target="_blank" href="https://twitter.com/MDSadatKhan2" whileHover={{ y: -2 }} className="text-light dark:text-dark hover:text-sky-400 text-2xl" aria-label="Twitter X">
                <BsTwitterX />
              </motion.a>
              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 border-2 ${
                  mode === "light"
                    ? "bg-light text-dark border-light hover:bg-light/80"
                    : "bg-dark text-light border-dark hover:bg-dark/80"
                }`}
                aria-label="Toggle theme"
              >
                {mode === "light" ? <FaSun size={14} /> : <IoMdMoon size={14} className="fill-light" />}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo center */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
