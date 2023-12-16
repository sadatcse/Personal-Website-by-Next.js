import Link from "next/link";
import React from "react";
import Layout from "./Layout";
// import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy;Sadatkhan.com | All Rights Reserved.</span>

        <div className='flex items-center gap-4 ml-4'>
                    {/* <FaFacebookF className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                    <FaInstagram className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                    <FaTwitter className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                    <FaLinkedin className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/> */}
                </div>

        <div className='space-x-6'>
        <Link className="hover:text-slate-400" href="/privacypolicy">Privacy Policy</Link>
        <Link className="hover:text-slate-400" href="/termsofservice">Terms of Service</Link>
        <Link className="hover:text-slate-400" href="/cookiessettings">Cookies Settings</Link>
                </div>
      </Layout>
    </footer>
  );
};

export default Footer;
