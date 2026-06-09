import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import imgResturant from "../../public/images/projects/Resturant.jpg";
import imgDoctor from "../../public/images/projects/Doctor.jpg";
import imgMDL from "../../public/images/projects/MDL.jpg";
import imgMultigymNextJs from "../../public/images/projects/multigym-next-js.jpg";
import imgChefSpecial from "../../public/images/projects/chefs-special.png";
import imgDataIT from "../../public/images/projects/DataIT.jpg";
import imgSkyroot from "../../public/images/projects/Skyroot.jpg";
import imgResilientSlope from "../../public/images/projects/ResilientSlope.jpg";
import imgMultigym from "../../public/images/projects/multigym.png";
import { CgWebsite } from "react-icons/cg";
import { SiGithub } from "react-icons/si";
import { FaServer } from "react-icons/fa";




import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, client_side, server_side, technology }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <p className="my-2 rounded-md font-medium  text-dark dark:text-light sm:text-sm">Technology Use :{technology}</p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {link && (
            <Link
              href={link}
              target={"_blank"}
              className="rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
              aria-label={`Visit ${title}`}
            >
              Visit Project
            </Link>
          )}
          {client_side && (
            <Link
              href={client_side}
              target={"_blank"}
              className="rounded-lg bg-red-600 p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
              aria-label={`View client code for ${title}`}
            >
              {server_side ? "Client Side" : "GitHub"}
            </Link>
          )}
          {server_side && (
            <Link
              href={server_side}
              target={"_blank"}
              className="rounded-lg bg-orange-500 p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
              aria-label={`View server code for ${title}`}
            >
              Server Side
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, technology, summary, client_side, server_side }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
          {title} <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        </h2>


        <p className="my-2 rounded-md font-medium  text-dark dark:text-light sm:text-sm">Technology Use :{technology}</p>

        <div className="flex w-full items-center justify-start mt-2">
          {link && (
            <Link
              href={link}
              target={"_blank"}
              className="my-2 w-8 md:w-6 text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors"
              aria-label={title}
            >
              <CgWebsite size={40} />
            </Link>
          )}
          {client_side && (
            <Link
              href={client_side}
              target={"_blank"}
              className="ms-4 my-2 w-8 md:w-6 text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors"
              aria-label={title}
            >
              <SiGithub size={40} />
            </Link>
          )}
          {server_side && (
            <Link
              href={server_side}
              target={"_blank"}
              className="ms-4 my-2 w-8 md:w-6 text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors"
              aria-label={title}
            >
              <FaServer size={40} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects Page | MD Sadat Khan</title>
        <meta
          name="description"
          content="Explore the freshest web application projects by a Next.js specialist proficient in React.js and full-stack development. Dive into software engineering articles and tutorials offering insights for crafting your personal portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="My Latest Projects"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {/* Teaxo POS - Featured */}
            <div className="col-span-12">
              <FeaturedProject
                type="Smart POS & Restaurant Management System"
                title="Teaxo POS"
                summary="A state-of-the-art, feature-rich Point of Sale (POS) and comprehensive restaurant operation management client. It features real-time kitchen display synchronization using Socket.io, recipe/ingredient costing, vendor ledgers, granular role-based access control (RBAC), and AI-powered daily sales forecasting. Fully functional offline using IndexedDB (Dexie.js) and Progressive Web App (PWA) technologies."
                img={imgResturant}
                technology="React 18, React Router v7, Tailwind CSS v3, DaisyUI, Socket.io, Dexie.js (IndexedDB), Axios, Recharts, JSPDF, Moment.js"
                link="https://teaxo-pos-client.vercel.app/"
                client_side="https://github.com/sadatcse/Teaxo-Pos--client"
                server_side="https://github.com/sadatcse/Texao-a-back"
              />
            </div>

            {/* DataIT RX - Featured */}
            <div className="col-span-12">
              <FeaturedProject
                type="Healthcare Dashboard & Prescription System"
                title="DataIT RX"
                summary="A hybrid clinic management and prescription generation dashboard designed for doctors and clinical assistants. Built with an offline-first hybrid architecture, it uses Dexie.js (IndexedDB) with a serialized sync queue, client-side AES-256 cryptographic security to protect patient vitals and history transparently at rest, and dynamic action-level role-based permissions (RBAC)."
                img={imgDoctor}
                technology="React 18, React Router v7, Tailwind CSS, DaisyUI, Dexie.js, Crypto-JS (AES), Axios, Recharts, Moment.js"
                link="https://data-rx-frontend.vercel.app/demo-login"
                client_side="https://github.com/sadatcse/DataRX-Frontend"
                server_side="https://github.com/sadatcse/Data-Rx-Backend"
              />
            </div>

            {/* MDL Real Estate - Featured */}
            <div className="col-span-12">
              <FeaturedProject
                type="Company Website with Dashboard Admin"
                title="Mohammadi Developers Limited (MDL)"
                summary="Welcome to the official web application for Mohammadi Developers Ltd (MDL), a premier real estate development company. This platform showcases luxury residential and commercial properties, corporate achievements, and structural services. It features a fully responsive client-facing site and a secure administrative dashboard."
                img={imgMDL}
                technology="Next.js 16 (App Router), React 19, Tailwind CSS v4, MongoDB (Mongoose), Jose (JWT), Bcrypt.js, Framer Motion"
                link="https://mdl-wo28.vercel.app/"
                client_side="https://github.com/sadatcse/MDL"
              />
            </div>

            {/* Multigym v2.0 - Normal */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website with Dashboard Admin & AI Chatbot"
                title="Multigym Premium v2.0"
                summary="A comprehensive, full-stack gym management system showcasing a premium gym facility. Features dynamic content management, trainer profiles, class scheduling, and role-based client & admin dashboards."
                img={imgMultigymNextJs}
                technology="Next.js 16 (App Router), Tailwind CSS, DaisyUI, MongoDB (Mongoose), Firebase Auth, JWT, TanStack React Query, Framer Motion"
                link="https://mgmp-next.vercel.app/"
                client_side="https://github.com/sadatcse/MGMP-NEXT"
              />
            </div>

            {/* Chef's Special - Normal */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Restaurant Website"
                title="Chef's Special Restaurant"
                summary="A premium, modern restaurant web application featuring dynamic menus, online table reservation, slider banners, E-Commerce shop, and ultra-smooth animations powered by GSAP and AOS."
                img={imgChefSpecial}
                technology="React 19, Vite, TypeScript, Bootstrap 5, GSAP, AOS, Swiper, React Router, React Helmet"
                link="https://chefspecial.vercel.app/"
                client_side="https://github.com/sadatcse/Chefspecial"
              />
            </div>

            {/* Data IT - Featured */}
            <div className="col-span-12">
              <FeaturedProject
                type="Agency Portfolio & Software Platform"
                title="Data IT"
                summary="A premium agency portfolio showcasing digital services and software solutions. Features dynamic SEO, interactive contact system with CAPTCHA, job careers portal, and comprehensive service portfolios."
                img={imgDataIT}
                technology="React, Vite, Tailwind CSS, DaisyUI, Framer Motion, EmailJS, SweetAlert2, React Helmet Async"
                link="https://www.datait.com.bd/"
                client_side="https://github.com/sadatcse/Data-IT"
              />
            </div>

            {/* Skyroot Real Estate - Normal */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Company Website "
                title="Skyroot Real Estate"
                summary="A high-performance real estate platform featuring smooth Framer Motion animations, property directories, and an interactive AI real estate assistant powered by Google Gemini."
                img={imgSkyroot}
                technology="React 19, Vite, Tailwind CSS v4, Framer Motion, Google Gemini AI, DaisyUI"
                link="https://skyroot-two.vercel.app/"
                client_side="https://github.com/sadatcse/Skyroot"
              />
            </div>

            {/* ResilientSlope - Normal */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="ResilientSlope"
                summary="A professional engineering and consulting website featuring dynamic project pages, interactive service categories with AOS animations, and custom contact forms validated with SweetAlert2."
                img={imgResilientSlope}
                technology="React, Tailwind CSS, AOS, SweetAlert2"
                link="https://www.resilientslope.com/"
                client_side="https://github.com/sadatcse/ResilientSlope"
              />
            </div>

            {/* Multigym v1.0 - Featured */}
            <div className="col-span-12">
              <FeaturedProject
                type="Website With Dashboard Admin"
                title="Multigym Premium v1.0"
                summary="A full-stack gym platform featuring class schedules, trainer rosters, interactive client registration portals, and robust backend service integration."
                img={imgMultigym}
                technology="React, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase"
                link="https://www.multigympremium.com/"
                client_side="https://github.com/sadatcse/GYM-Website"
                server_side="https://github.com/sadatcse/multigym-premium-server"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
