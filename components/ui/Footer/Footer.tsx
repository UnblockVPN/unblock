import Link from 'next/link';
import s from '@/components/ui/Navbar/Navbar.module.css';
import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';

export default function Footer() {
  return (
    <footer className={`${s.footer} `}>
      <div className="grid grid-cols-1 gap-8 py-12  transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 justify-center lg:justify-start">

        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold  transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/download"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Download
              </Link>
              </p>
            </li>


            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/download/mac"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Mac VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/download/windows"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Windows PC VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/download/iphone"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Iphone VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/download/android"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Android VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/download/linux"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Linux VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/download/router"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Router VPN
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold  transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/features"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Features
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/features/trial"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Risk-Free VPN trial
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/features/streaming"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Streaming Optimizer
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/features/accelerator"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Download Accelerator
              </Link>
            </li>
          </ul>

        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold  transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/countries"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                195 Countries
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/usa"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                US VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/canada"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Canada VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/uk"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                UK VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/eu"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Europe VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/australia"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Australia VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                New Zealand VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Singapore VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Hong Kong VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                South America VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/africa"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Africa VPN
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold  transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/about"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                About UnblockVPN
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/legal/privacy-policy#top"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/legal/terms-of-service#top"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Terms of Service
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/legal/cookie-policy#top"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Cookie Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/legal/terms-of-service#top"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Trust Centre
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/about/audits"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Security Audits
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/about/review"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                UnblockVPN Reviews
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/about/press"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Press
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/about/careers"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Come work for us!
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold  transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/channels"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Channels
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/channels/affiliates"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Affiliates
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/channels/influencers"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Influencers
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/channels/partners"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Partners
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/channels/scholarships"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Scholarships
              </Link>
            </li>
          </ul>
        </div>


        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold  transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="https://web3.unblockvpn.io"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Investor Centre
              </Link>

              <Link 
                href="https://web3.unblockvpn.io" 
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Web3 Founder Program 🚀
              </Link>


              </p>
            </li>
          
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/faq"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                FAQ
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/contact"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold  transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/learn"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Learn
              </Link>
              </p>
            </li>
          
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/learn/blog"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold  transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/support"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Support Centre
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/qsg"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Quick Start Guide
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/faq"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                FAQ
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/contact"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold  transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/learn"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Learn
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/learn/whatis"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                What is a VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/learn/cases"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Use Cases
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/learn/blog"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>


        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold  transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/support"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                UnblockVPN Support
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/qsg"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Quick Start Guide
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/faq"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                FAQ
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/contact"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold  transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/learn"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Learn
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/learn/whatis"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                What is a VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/learn/cases"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Use Cases
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/learn/blog"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>




      </div>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row ">
        <div>
          <span>
            &copy; {new Date().getFullYear()} UnblockVPN. All rights reserved.
          </span>
        </div>
        <div className="flex items-center">
          <span className="">Powered by</span>
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <img
              src="/vercel.svg"
              alt="Vercel.com Logo"
              className="inline-block h-6 ml-4 "
            />
          </a>
        </div>
      </div>





    </footer>
  );
}

