import ContactForm from "@/components/ContactForm";
import React from "react";
import Head from "next/head";
import Personalcontact from "@/components/Personalcontact";
import TransitionEffect from "@/components/TransitionEffect";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me | MD Sadat Khan</title>
        <meta
          name="description"
          content="Get in touch with MD Sadat Khan. Let's collaborate on web design, React applications, and full-stack projects."
        />
      </Head>
      <TransitionEffect />
      <div
        style={{ backgroundImage: "url(/bg-3.jpg)" }}
        className="w-full min-h-[calc(100vh-140px)] bg-cover bg-center flex items-center justify-center py-16 px-4 relative overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/25 dark:bg-primaryDark/25 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px] animate-pulse"></div>

        {/* Dark overlay for rich aesthetics */}
        <div className="absolute inset-0 bg-dark/45 dark:bg-dark/70 z-0"></div>

        <div className="w-full max-w-6xl relative z-10 bg-white/5 dark:bg-dark/40 rounded-3xl border border-white/20 p-8 md:p-14 shadow-2xl backdrop-blur-md grid grid-cols-2 md:grid-cols-1 gap-12 md:gap-16">
          <div className="flex flex-col justify-center">
            <Personalcontact />
          </div>
          <div className="bg-white/5 dark:bg-white/5 p-8 rounded-2xl border border-white/10 shadow-inner flex flex-col justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
