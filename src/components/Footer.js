import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-dark/10 dark:border-light/10 dark:text-light">

      {/* flex-col    -> Mobile (Small Screen): Stacks items Up/Down 
        md:flex-row -> Desktop (Big Screen): Places items Left/Right 
      */}
      <Layout className="py-6 flex flex-col md:flex-row items-center justify-between text-sm text-dark/50 dark:text-light/50">

        {/* TOP ON MOBILE / LEFT ON DESKTOP */}
        <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
          <span>&copy; {year} Sadatkhan.com &mdash; All Rights Reserved.</span>
        </div>

        {/* BOTTOM ON MOBILE / RIGHT ON DESKTOP */}
        <div className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end gap-5">
          <Link href="/privacypolicy" className="hover:text-primary dark:hover:text-primaryDark transition-colors">
            Privacy Policy
          </Link>
          <Link href="/termsofservice" className="hover:text-primary dark:hover:text-primaryDark transition-colors">
            Terms of Service
          </Link>
          <Link href="/cookiessettings" className="hover:text-primary dark:hover:text-primaryDark transition-colors">
            Cookies
          </Link>
        </div>

      </Layout>
    </footer>
  );
};

export default Footer;