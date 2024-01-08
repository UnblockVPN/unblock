import { Session, User } from '@supabase/supabase-js';
import React from "react";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import Container from "@/components/ui/Hero/Container";
import s from "../Navbar/Navbar.module.css";

interface Props {
  session: Session | null;
  user: User | null | undefined;
  subscription: any; // Add the appropriate type for the 'subscription' prop
  products: any[]; // Add the appropriate type for the 'products' prop
}

const Hero: React.FC<Props> = ({ session, user, subscription, products }) => {
  return (
    <>
      <div
        className={`${s.heroContainer} mx-auto max-w-screen-sm py-4 sm:py-12 sm:px-8`}
      >
        <Container className="mx-auto max-w-[2560px] flex items-center  py-4">
          <div className="flex flex-col mt-12 mb-12 max-w-6xl items-center px-4 text-center w-full">
            <div className="max-w-2xl">
            <div className="max-w-2xl">
              <h2 className="text-2xl text-center mb-4 font-extrabold sm:text-lg sm:text-left sm:leading-relaxed">
                Protect your digital life 24/7
              </h2>
              <h1 className="text-3xl  mb-10 font-extrabold sm:text-left text-left">
                Get Premium VPN free for 1 month
              </h1>
              <p className="mb-10 text-center leading-normal text-xl sm:text-lg sm:text-left sm:leading-relaxed">
                Only $9.99/month after. Cancel anytime.
              </p>
              <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/order"
                className="px-6 py-3 border border-black border-2 font-medium text-center bg-black rounded-full sm:text-white transition duration-500 ease-in-out transform hover:scale-110"
              >
                Try Free For 1 Month
              </Link>
              <Link
                href="#offer"
                scroll={false}
                className="bg-blue-600 border border-white border-2 px-6 py-3 font-medium text-center rounded-full text-white transition duration-500 ease-in-out transform hover:scale-110"
              >
                View All Premium Plans
              </Link>
            </div>
              <div className="flex flex-col text-center mt-4 items-start text-sm font-medium space-y-3 sm:space-x-4 sm:space-y-0 sm:text-left sm:items-center sm:flex-row">
              Offer only available if you haven't tried Premium before. Terms apply.
              </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="mx-auto max-w-[2560px] mb-24 bg-white dark:bg-black dark:text-white text-black flex flex-col items-center py-4 sm:py-12 sm:px-8">
  <div className="text-4xl mb-10 font-extrabold sm:text-4xl sm:leading-relaxed">
    Why go premium?
  </div>
  <ul className="flex flex-col space-y-4">
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="flex flex-col items-center">
        <div className="h-36 w-36">
          <img src="/music.png" alt="My Image" />
        </div>
        <div className="ml-4 text-center"> {/* Updated: Added text-center class */}
          <p className="font-bold">Safer on public Wi-Fi</p>
          <p className="text-black">Increase protection.</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-36 w-36">
          <img src="/movies.png" alt="My Image" />
        </div>
        <div className="ml-4 text-center"> {/* Updated: Added text-center class */}
          <p className="font-bold">Stream music, movies and TV.</p>
          <p>Enjoy the entire catalog.</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-36 w-36">
          <img src="/privacy.png" alt="My Image" />
        </div>
        <div className="ml-4 text-center"> {/* Updated: Added text-center class */}
          <p className="font-bold">Keep your internet privacy.</p>
          <p>Even on mobile.</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-36 w-36">
          <img src="/bank.png" alt="My Image" />
        </div>
        <div className="ml-4 text-center"> {/* Updated: Added text-center class */}
          <p className="font-bold">Shop without limits.</p>
          <p>Location bias shopping.</p>
        </div>
      </div>
    </div>
  </ul>
</Container>



      <section id="offer">
  <Container className="mx-auto max-w-[2560px] bg-gray-200 text-black flex flex-col items-center py-4 sm:py-24 sm:px-8">
    <div className=" text-4xl text-center font-extrabold sm:text-4xl sm:leading-relaxed whitespace-nowrap">
      Pick your premium
    </div>

    <div className="">
      <Pricing session={session} user={user} subscription={subscription} products={products} />
    </div>
  </Container>
</section>

    </>
  );
};

export default Hero;
