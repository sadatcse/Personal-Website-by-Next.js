
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import TransitionEffect from "@/components/TransitionEffect";
import { TypeAnimation } from "react-type-animation";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Home | Sadat Khan</title>
        <meta
          name="description"
          content="Explore Sadat Khan's personal portfolio website, showcasing expertise in React, Tailwind, DaisyUI, Express.js, MongoDB, Firebase, JWT, and Stripe. Built with Next.js, offering insights into web development. Based in Mohammadpur, Dhaka, Bangladesh. "
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="sadatkhan"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center ">
            <p className="text-5xl font-semibold mb-5">Hey, I am Sadat Khan</p>
            <TypeAnimation sequence={[

        'React Developer',
        1000, 
        'UI/UX Designer',
        1000,
        'Web Devloper',
        1000
      ]}
      wrapper="span"
      className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
      speed={50}
      repeat={Infinity}
    />
              <p className="my-4 text-base text-center font-medium md:text-sm sm:!text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/cvsadat.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Download CV <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact ME
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="lightBulb"
          />
        </div>
      </article>
    </>
  );
}
