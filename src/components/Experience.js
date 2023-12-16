import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Assistant Manager"
              company="Al-Amin Electronics               "
              companyLink="https://www.facebook.com/alaminelec5"
              time="2020-2023"
              address="Mohammadpur., Dhaka, Bangladesh"
              work="As an integral part of a home appearance servicing company, I oversee client service maintenance and streamline operational procedures. I meticulously manage data using Excel, handling everything from client records to financial calculations. Additionally, I ensure accurate salary computations for our team while also maintaining and updating our company's website. Overall, my role ensures efficient operations, precise record-keeping, and an engaging online presence for our services."
            />


            <Details
              position="Junior Wordpress Devloper"
              company="Little Bytes"
              companyLink="https://littlebytes.net/"
              time="2018-2020"
              address="Motijheel, Dhaka, Bangladesh"
              work="I specialize in setting up hosting accounts and crafting WordPress websites for clients. From seamless WordPress installations to theme selection and content setup, I ensure a smooth process. My role involves understanding client needs, translating them into visually captivating websites that align with their brand. With expertise in WordPress, I create user-friendly interfaces and technically sound, secure websites. Overall, I empower clients to establish and manage their online presence effortlessly."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
