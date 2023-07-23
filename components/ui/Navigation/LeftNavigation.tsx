import React from "react";
import Link from "next/link";
import s from '@/components/ui/Navbar/Navbar.module.css';

const LeftNavigation = () => {
  return (
    <>
    <div className={`${s.leftNav} text-left text-black dark:text-white`}>
      <ul>
        <li>
          <Link href="/legal/terms-of-service">Terms of Service</Link>
        </li>
        <li>
          <Link href="/legal/privacy-policy">Privacy Policy</Link>
        </li>
      </ul>
      </div>
    </>
  );
};

export default LeftNavigation;