import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ title, issuer, issuerLink, time, credentialId, description }) => {
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
          {title}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={issuerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{issuer}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time}
          {credentialId && (
            <> &mdash; <span className="text-xs tracking-wide">ID: {credentialId}</span></>
          )}
        </span>
        <p className="font-medium w-full md:text-sm mt-1">{description}</p>
      </motion.div>
    </li>
  );
};

const Certification = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Courses &amp; Certificates
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark
          origin-top dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">

          <Details
            title="Full Stack Web Development"
            issuer="Udemy"
            issuerLink="https://www.udemy.com/"
            time="2024 · Certificate of Completion"
            credentialId="UC-2024-FSW-001"
            description="Completed an intensive full-stack web development course covering HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and REST API design. Built multiple real-world projects including an e-commerce platform and a social media application."
          />

          <Details
            title="React & Next.js – The Complete Guide"
            issuer="Coursera"
            issuerLink="https://www.coursera.org/"
            time="2023 · Professional Certificate"
            credentialId="CRS-2023-RNJSG-482"
            description="Mastered modern React including hooks, context API, server-side rendering with Next.js, dynamic routing, and deployment strategies. Earned a verified professional certificate upon successful completion of all projects and assessments."
          />

          <Details
            title="UI/UX Design Fundamentals"
            issuer="Google"
            issuerLink="https://grow.google/"
            time="2023 · Google Career Certificate"
            credentialId="GGL-UX-2023-00921"
            description="Gained foundational knowledge in user-centred design, wireframing, prototyping, and usability testing using Figma. Learned design thinking principles and how to apply them to build accessible, beautiful, and functional digital products."
          />

        </ul>
      </div>
    </div>
  );
};

export default Certification;
