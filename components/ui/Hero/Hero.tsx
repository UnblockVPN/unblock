
import Pricing from '@/components/Pricing';
import Link from 'next/link';
import Image from "next/image";
import Container from '@/components/ui/Hero/Container';
import heroImg from "../../../public/couple_02.png";
import s from '../Navbar/Navbar.module.css';

const Hero = ({ session, user, subscription, products }) => {
  return (
    <>
          <div className={`${s.heroContainer} mx-auto max-w-[1920px]  py-4 `}>

      <Container className="mx-auto max-w-[1920px]  py-4 ">
        <div className="flex flex-col mt-2 max-w-6xl items-center px-4 text-left w-full">
          <div className="max-w-2xl">
            <h2 className="text-left text-2xl mb-4  font-extrabold sm:text-2xl">
              Protect your digital life 24/7
            </h2>
            <h1 className="text-left text-4xl mb-10 font-extrabold sm:text-4xl whitespace-nowrap">
              Get Premium VPN free for 1 month
            </h1>
            <p className="text-left mb-10 leading-normal text-xl sm:text-2xl">
              Only $9.99/month after. Cancel anytime.
            </p>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href="/order" className="px-8 py-2 font-medium text-center dark:bg-white bg-black rounded-full sm:text-white dark:text-black">
                Get started
              </Link>
              <Link href="/order" className="px-8 py-2 font-medium text-center dark:bg-white bg-black rounded-full text-white dark:text-black">
                View plans
              </Link>
            </div>
            <div className="flex flex-col mt-4 items-start text-sm font-medium space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              Terms and conditions apply. 1 month free not available for users who have already tried Premium.
            </div>
          </div>
        </div>
      </Container>
      </div>

     <Container className="mx-auto max-w-[1920px] flex bg-white text-black flex-col items-center  sm:py-12 sm:px-6">
        <div className="text-4xl text-center mb-10 font-extrabold sm:text-4xl whitespace-nowrap">
          Why go premium?
        </div>
        <ul className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-4 ">
            <div className="flex flex-col items-center">
              <div><img src="/Ellipse.svg" alt="My Image" /></div>
              <div className="ml-4">
                <p className="font-bold text-center text-black">Stream music.</p>
                <p className="text-black text-center text-black ">Listen local.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
            <div><img src="/Ellipse.svg" alt="My Image" /></div>
              <div className="ml-4">
                <p className="font-bold text-center text-black">Stream movies and TV.</p>
                <p className="text-black text-center text-black">Enjoy the full catalog.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
            <div><img src="/Ellipse.svg" alt="My Image" /></div>
              <div className="ml-4">
                <p className="font-bold text-center text-black">Keep your privacy.</p>
                <p className="text-black text-center text-black">Even on mobile.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
            <div><img src="/Ellipse.svg" alt="My Image" /></div>
              <div className="ml-4">
                <p className="font-bold text-center text-black">Keep your privacy.</p>
                <p className="text-black text-center text-black">Even on mobile.</p>
              </div>
            </div>
          </div>
          
        </ul>
      </Container>
      


      <Container className="mx-auto max-w-[1920px] flex bg-gray-200 text-black flex-col items-center py-4 sm:py-24 sm:px-6">
          <div className="text-black text-5xl text-center  font-extrabold sm:text-5xl whitespace-nowrap">
            Pick your premium
          </div>



          <div className="">
            <Pricing session={session} user={user} subscription={subscription} products={products} />
          </div>
</Container>



    </>
  );
}

export default Hero;
