// Legal.js

import React from "react";
import Link from "next/link";
import s from '@/components/legal.module.css';

const Legal = () => {
  return (
    <div>
      <div className={`${s.legalContainer}`}>
        <div className={`${s.legalPolicyText}`}>
          <h2 className="text-black">Legal Policies</h2>
          
          <ul className={`${s.legalLinks}`}>
            <li><Link href="/legal/terms-of-service">Terms of Service</Link></li>
            <li><Link href="/legal/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/legal/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>

        <div className={`${s.legalPolicyContent}`}>
        <section id="top"></section>

        <h1 className="text-4xl mb-2">Cookie Policy</h1>
        <p className="mb-4">Last updated: July 1, 2023</p>
        <p><strong>INTRODUCTION</strong></p>
        <p>This website uses cookies to improve your experience. We use cookies to remember your preferences, compile statistics and to show you relevant content.</p>
        <p>By using this website, you agree to the use of cookies in accordance with our Cookie Policy.</p>
        <h2>What are cookies?</h2>
        <p>Cookies are small text files that are placed on your computer by websites you visit. They are used to store information about your browsing history, preferences, and other data.</p>
        <h2>Why do we use cookies?</h2>
        <p>We use cookies for a variety of reasons, including:</p>
        <ul>
          <li>To remember your preferences, such as your language selection.</li>
          <li>To compile statistics about how you use our website, so that we can improve it.</li>
          <li>To show you relevant content, such as products or services that you may be interested in.</li>
        </ul>
        <h2>What types of cookies do we use?</h2>
        <p>We use the following types of cookies:</p>
        <ul>
          <li><strong>Essential cookies:</strong> These cookies are essential for the website to function properly. They allow you to browse the website and use its features.</li>
          <li><strong>Performance cookies:</strong> These cookies collect information about how you use the website, such as the pages you visit and the links you click. This information is used to improve the website's performance.</li>
          <li><strong>Targeting cookies:</strong> These cookies are used to show you relevant content, such as products or services that you may be interested in.</li>
        </ul>
        <h2>How can I control cookies?</h2>
        <p>You can control cookies through your browser settings. You can choose to accept all cookies, reject all cookies, or choose to accept or reject cookies on a case-by-case basis.</p>
        <p>To learn more about how to control cookies, please visit <a href="https://www.aboutcookies.org/">aboutcookies.org</a>.</p>
        <h2>How to contact us</h2>
        <p>If you have any questions about our cookie policy, please contact us at legal@unblockvpn.io</p>
        <h2>Changes to our cookie policy</h2>
        <p>We may update our cookie policy from time to time. The latest version of the cookie policy will always be available on this page.</p>
        <h2>This cookie policy was last updated on July 24, 2023.</h2>
        <p>**Please note that by continuing to use this website, you consent to the use of cookies in accordance with our Cookie Policy.**</p>



        </div>
      </div>
    </div>
  );
};

export default Legal;
