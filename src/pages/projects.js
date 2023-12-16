import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/ParcelManagement-webaps.jpg";
import proj2 from "../../public/images/projects/food.jpg";
import proj3 from "../../public/images/projects/Hydrabad.jpg";
import { CgWebsite  } from "react-icons/cg";
import { SiGithub } from "react-icons/si";
import { FaServer } from "react-icons/fa";




import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, client_side ,server_side,technology }) => {

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
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
          <Link
            href={client_side}
            target={"_blank"}
            className="ml-4 rounded-lg
            bg-red-600 p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Client Side
          </Link>
          <Link
            href={server_side}
            target={"_blank"}
            className="ml-4 rounded-lg
            bg-orange-500	p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Server Side
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, technology,summary,client_side,server_side }) => {

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

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          
        </Link>
        <div className="flex w-full items-center  justify-start">
          <Link
            href={client_side}
            target={"_blank"}
            className="my-2 w-8 md:w-6"
            aria-label={title}
          >
            <CgWebsite size={40} />
          </Link>
          <Link
            href={client_side}
            target={"_blank"}
            className="ms-4 w-8 md:w-6"
            aria-label={title}
          >
            <SiGithub size={40} />
          </Link> <Link
            href={server_side}
            target={"_blank"}
            className="ms-4 w-8 md:w-6"
            aria-label={title}
          >
            <FaServer size={40} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects Page | MD Sadat Khan </title>
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
            text="My Latest Project"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Web Application"
                title="Parcel Management System"
                summary="Streamline parcel logistics effortlessly with our intuitive web application, offering three distinct roles: user, delivery personnel, and admin. Seamlessly manage registrations, bookings, and deliveries through user-friendly interfaces. From user registration to parcel booking, our platform ensures a smooth experience for all. Experience convenience at its best with a visually appealing and user-centric home page, making parcel management a breeze."
                img={proj1}
                technology ="React, Tailwind ,DaisyUI , Express.js, Mongodb, Firebase , JWT ,Stripe"
                link="https://sadatfast.web.app/"
                client_side="https://github.com/sadatcse/Parcel-Management-System-Client-side"
                server_side="https://github.com/sadatcse/Parcel-Management-Website-Server-Side-"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website with Dashboard"
                title="Restrurant Buffet Website"
                img={proj2}
                technology ="React,Tailwind,Nodejs,Expressjs,Mongodb,Firebase"
                summary="The Yum Yum Tree Buffet & Restaurant Website offers a delightful experience with a welcoming homepage, comprehensive menu, and seamless user authentication. Enjoy easy access to menu updates, additions, and removals for an enhanced dining journey."
                link="https://myliverestrurant.web.app/"
                client_side="https://github.com/sadatcse/Restaurant-Website-Yum-Yum-Tree-Buffet-Client-side-"
                server_side="https://github.com/sadatcse/Restaurant-Website-Yum-Yum-Tree-Buffet-server-side-"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Brand Shop"
                summary="Hydrabad Technology offers a seamless user experience with individualized cart data, secure registration/login, informative error alerts, and exclusive access to protected content. With a unique, customizable service design powered by MongoDB, dynamic animations, and automatic copyright updates, our site prioritizes user convenience and innovation."
                img={proj3}
                technology ="React,Tailwind,Nodejs,Expressjs,Mongodb,Firebase"
                link="https://some-code-error-but99ok.surge.sh//"
                client_side="https://github.com/sadatcse/Hydrabad-Technology-Brand-Shop-Client-side-"
                server_side="https://github.com/sadatcse/Hydrabad-Technology-Brand-Shop-Server-side"
              />
            </div>
            {/* <div className="col-span-12">
              <FeaturedProject
                type="Portfolio Website"
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                img={proj4}
                link="https://devdreaming.com/videos/build-stunning-portfolio-website-react-js-framer-motion"
                github="https://github.com/sadatcse/react-portfolio-final"
              />
            </div> */}
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Template"
                img={proj5}
                title="Agency Website Template"
                link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                github="https://github.com/sadatcse/wibe-studio"
              />
            </div> */}
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                type="Blog Website"
                img={proj6}
                title="DevDreaming"
                link="https://devdreaming.com"
                github="https://github.com/sadatcse"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
}
