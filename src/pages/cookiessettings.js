import React from 'react';
import Head from "next/head";


const cookiessettings = () => {
    return (
        <>
      <Head>
        <title>Cookies Settings</title>
        <meta name="description" content="Learn about how we use cookies on our website for enhancing user experience and analytical purposes. Manage and control your cookie preferences." />
      </Head>
      <div className="container mx-auto py-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Cookies Settings</h1>
          
          <p className="mb-4">
            This website uses cookies to enhance user experience and for analytical purposes. By using our website, you consent to our use of cookies in accordance with the terms of this policy.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help us improve your experience on our site, understand usage patterns, and serve relevant content and advertisements.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Types of Cookies We Use</h2>
          <p className="mb-4">
            We use both session and persistent cookies. Session cookies are temporary and are deleted when you close your browser, while persistent cookies remain on your device for a set period.
          </p>
          
          {/* Additional sections */}
          {/* Include more sections as needed */}
          
          <h2 className="text-xl font-semibold mb-4">Managing Cookies</h2>
          <p className="mb-4">
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">
            If you have any questions about our Cookie Policy, please contact us at:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <p>Sadat Khan</p>
            </li>
            <li>
              <p>www.sadatkhan.com</p>
            </li>
            <li>
              <p>Mohammadpur, Dhaka, Bangladesh</p>
            </li>
            <li>
              <p>Phone: 01715384539</p>
            </li>
          </ul>
        </div>
      </div>
        </>
      
    );
  };
  
  export default cookiessettings;