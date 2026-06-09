import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ title, issuer, issuerLink, time, credentialId, certificateLink, description }) => {
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
          {certificateLink && (
            <>
              {" "}
              &mdash;{" "}
              <a
                href={certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary dark:text-primaryDark"
              >
                View Certificate
              </a>
            </>
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
            title="Next.js 14 & React - The Complete Guide"
            issuer="Udemy"
            issuerLink="https://ude.my/UC-e5d69f65-7fe0-4e0d-8b86-979ec6547253"
            time="March 2024 · Certificate of Completion"
            credentialId="UC-e5d69f65-7fe0-4e0d-8b86-979ec6547253"
            certificateLink="/images/certificates/udemy-nextjs-react.jpg"
            description="Mastered React and Next.js, including the App Router, Server Components, Server Actions, Client Components, routing, page rendering, state management, security, and authentication. Acquired deep knowledge of React Hooks, Context API, and state optimization."
          />

          <Details
            title="Complete Web Development Course"
            issuer="Programming Hero"
            issuerLink="https://web.programming-hero.com/"
            time="2023 · Certificate of Achievement"
            credentialId="WEB8-3195"
            certificateLink="/images/certificates/programming-hero-web-development.png"
            description="Completed an intensive web development course covering HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript (ES6), React, Node.js, Express.js, MongoDB, and deployment. Built multiple full-stack projects and gained hands-on experience in modern web technologies."
          />

        </ul>
      </div>
    </div>
  );
};

export default Certification;
