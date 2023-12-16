
import ContactForm from "@/components/ContactForm";
import React from "react";
import Head from "next/head";
import Personalcontact from "@/components/Personalcontact";

const contact = () => {
  return (
<>
  <Head>
    <title>Contact Me</title>
    <meta
      name="contact Me"
      content="As an aspiring developer seeking internship or employment opportunities, I specialize in React and its associated frameworks. Proficient in HTML, CSS, and JavaScript, I aim to contribute dynamic skills to innovative projects."
    />
  </Head>
  <div
    style={{ backgroundImage: "url(bg-3.jpg)" }}
    className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
  >
    <div
      style={{ backgroundImage: "url(atombg-comp.webp)" }}
      className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white flex flex-col md:flex-row"
    >
      <div className="w-full md:w-[50%] flex items-center justify-center">
        <div className="w-[70%] md:w-[80%] mt-5">
          <ContactForm></ContactForm>
        </div>
      </div>
      <div className="w-full md:w-[50%] flex items-center justify-center">
        <div className="w-[70%] md:w-[80%]">
          <Personalcontact></Personalcontact>
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default contact;
