import React from 'react';
import Head from "next/head";


const termsofservice = () => {
    return (
      <>
       <Head>
        <title>Terms of Service | MD Sadat Khan </title>
        <meta name="description" content="Read our Terms of Service to understand the rules and guidelines for using our website and services provided by Sadat Khan." />
      </Head>
      <div className="container mx-auto py-8">
        
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          
          <p className="mb-4">
            These Terms of Service ("Terms") govern your use of the Sadat Khan website ("Site") operated by Sadat Khan ("us," "we," or "our"). Please read these Terms carefully before accessing or using our Site.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Accounts</h2>
          <p className="mb-4">
            When you create an account with us, you must provide accurate, complete, and updated information. You are solely responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
          </p>
          
          {/* Additional sections */}
          {/* Include more sections as needed */}
          
          <h2 className="text-xl font-semibold mb-4">Termination</h2>
          <p className="mb-4">
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Changes</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">
            If you have any questions about these Terms, please contact us at:
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
  
  export default termsofservice;