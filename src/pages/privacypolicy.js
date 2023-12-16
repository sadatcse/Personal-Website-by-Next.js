


import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Head from 'next/head';

const PrivacyPolicy = () => {
  // Get today's date
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Head>
        <title>Privacy Policy | MD Sadat Khan </title>
        <meta
          name="description"
          content="Understand how we collect, use, and protect your personal information through our Privacy Policy on Sadat Khan website."
        />
      </Head>
      <div className="container mx-auto py-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

          {/* Privacy Policy content */}
          <p className="mb-4">
            This Privacy Policy governs the manner in which Sadat Khan (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, maintains, and discloses information collected from users (&quot;you&quot; or &quot;your&quot;) of the www.sadatkhan.com website (&quot;Site&quot;). This Privacy Policy applies to the Site and all products and services offered by Sadat Khan.
          </p>
          <h3 className='text-xl font-bold my-4'>Personal Identification Information</h3>
        <p className="mb-4">
        We may collect personal identification information from users in various ways, including but not limited to when users visit our Site, register on the Site, fill out a form, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, phone number, and other relevant information. Users may, however, visit our Site anonymously. We will collect personal identification information from users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site-related activities.
        </p>
        <h3 className='text-xl font-bold my-4'>Non-personal Identification Information</h3>
        <p className="mb-4">
        We may collect non-personal identification information about users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer or device, technical information about users means of connection to our Site, such as the operating system and the Internet service providers utilized, and other similar information.
        </p>
        <h3 className='text-xl font-bold my-4'>Web Browser Cookies</h3>
        <p className="mb-4">
        Our Site may use &quot;cookies&quot; to enhance user experience. User&apos;s web browsers place cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
        </p>
        <h3 className='text-xl font-bold my-4'>How We Use Collected Information</h3>
        <p className="mb-4">
        Our Site may use &quot;cookies&quot; to enhance user experience. User&apos;s web browsers place cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
        </p>
        <div className="mt-8">
  <h2 className="text-xl font-semibold mb-4">How We Use Collected Information</h2>
  <ul className="list-disc pl-6">
    <li className="mb-4">
      <p className="mb-2">
        <span className="font-semibold">To improve customer service:</span> Information provided helps us respond to customer service requests more efficiently.
      </p>
    </li>
    <li className="mb-4">
      <p className="mb-2">
        <span className="font-semibold">To personalize user experience:</span> We may use information in the aggregate to understand how our users as a group use the services and resources provided on our Site.
      </p>
    </li>
    <li className="mb-4">
      <p className="mb-2">
        <span className="font-semibold">To improve our Site:</span> We may use feedback provided to improve our products and services.
      </p>
    </li>
    <li>
      <p className="mb-2">
        <span className="font-semibold">To send periodic emails:</span> We may use the email address to respond to inquiries, questions, and/or other requests.
      </p>
    </li>
  </ul>
</div>
<div className="mt-8">
  <h2 className="text-xl font-semibold mb-4">Your Acceptance of These Terms</h2>
  <p className="mb-4">
    By using this Site, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
  </p>
</div>

{/* Contacting Us */}
<div className="mt-8">
  <h2 className="text-xl font-semibold mb-4">Contacting Us</h2>
  <p className="mb-2">
    If you have any questions about this Privacy Policy, the practices of this Site, or your dealings with this Site, please contact us at:
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
      <p>Mobile: +8801715384539</p>
    </li>
  </ul>
</div>
          <div className="flex items-center text-gray-500 text-sm">
            <FaRegCalendarAlt className="mr-2" />
            <span>Last updated: December 16, 2023</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
