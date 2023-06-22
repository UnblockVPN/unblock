import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900">
      <div className="grid grid-cols-1 gap-8 py-12 text-white transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 bg-zinc-900">
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-24"
          >
            <span className="mr-2 border rounded-full border-zinc-700">
              <Logo />
            </span>
            <span></span>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/download"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Download
              </Link>
              </p>
            </li>


            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/download/mac"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Mac VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/download/windows"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Windows PC VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/download/iphone"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Iphone VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/download/android"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Android VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/download/linux"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Linux VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/download/router"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Router VPN
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/features"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Features
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/features/trial"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Risk-Free VPN trial
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/features/streaming"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Streaming Optimizer
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/features/accelerator"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Download Accelerator
              </Link>
            </li>
          </ul>

        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/countries"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                195 Countries
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/usa"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                US VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/canada"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Canada VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/uk"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                UK VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/eu"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Europe VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/australia"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Australia VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                New Zealand VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Singapore VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Hong Kong VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                South America VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/countries/africa"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Africa VPN
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/support"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                support UnblockVPN
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/privacy"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/tos"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Terms of Service
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/trust"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Trust Centre
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/audits"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Security Audits
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/review"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                UnblockVPN Reviews
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/press"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Press
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/careers"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Come work for us!
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/channels"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Channels
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/channels/affiliates"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Affiliates
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/channels/influencers"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Influencers
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/channels/partners"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Partners
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/channels/scholarships"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Scholarships
              </Link>
            </li>
          </ul>
        </div>


        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/support"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Support Centre
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/qsg"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Quick Start Guide
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/faq"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                FAQ
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/support/contact"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200">
              <Link
                href="/learn"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Learn
              </Link>
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/learn/whatis"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                What is a VPN
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/learn/cases"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Use Cases
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/learn/blog"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
{/*         <div className="flex items-start col-span-1 text-white lg:col-span-6 lg:justify-end">
          <div className="flex items-center h-10 space-x-6">
            <a
              aria-label="Github Repository"
              href="https://github.com/vercel/nextjs-subscription-payments"
            >
              <GitHub />
            </a>
          </div>
        </div> */}
      </div>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row bg-zinc-900">
        <div>
          <span>
            &copy; {new Date().getFullYear()} UnblockVPN. All rights reserved.
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-white">Crafted by</span>
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <img
              src="/vercel.svg"
              alt="Vercel.com Logo"
              className="inline-block h-6 ml-4 text-white"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
