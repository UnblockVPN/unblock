import { Session, User } from '@supabase/supabase-js';
import Pricing from '@/components/Pricing';
import Link from 'next/link';
import Image from "next/image";
import Container from '@/components/ui/Download/Container';
import s from '../Navbar/Navbar.module.css';

interface Props {
  session: Session | null;
  user: User | null | undefined;
  subscription: any; // Add the appropriate type for the 'subscription' prop
  products: any[]; // Add the appropriate type for the 'products' prop
}


const Download: React.FC<Props> = ({ session, user, subscription, products }) => {
  return (
    <>
          <div className={`${s.downloadContainer} mx-auto max-w-[1920px]  py-4 `}>

          <Container className="mx-auto max-w-[1920px] flex items-center justify-center py-4 ">
  <div className="flex flex-col mt-2 max-w-6xl justify-center items-center px-4 text-center w-full">
    <div className="max-w-2xl">
    <div className="flex justify-center items-center">
        <img src="/download.png" alt="Download" className="h-24 w-32 object-contain"/>
      </div>
      <h1 className=" text-5xl mt-6 mb-10 text-black font-extrabold sm:text-5xl whitespace-nowrap">
        Download UnblockVPN
      </h1>
      <p className=" mb-10 leading-normal text-black text-l sm:text-l">
      Connect to 158 countries from your device.
      </p>
      <div className="flex justify-center  flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
        <Link href="/order" className="px-6 py-3 font-medium text-center bg-gray-200 rounded-full text-black sm:text-black transition duration-500 ease-in-out transform hover:scale-110">
          Download
        </Link>

      </div>
    </div>
  </div>
</Container>

      </div>

     <Container className="mx-auto max-w-[1920px] flex bg-white text-black flex-col items-center  sm:py-12 sm:px-6">
        <div className="text-4xl text-center mb-10 font-extrabold sm:text-4xl whitespace-nowrap">
          Why go premium?
        </div>
        <ul className="flex flex-col space-y-4 ">
          <div className="flex flex-row space-x-4 ">
            <div className="flex flex-col items-center ">
              <div className="h-36 w-36"><img src="/music.png" alt="My Image" /></div>
              <div className="ml-4">
                <p className="font-bold text-center text-black">Stream music.</p>
                <p className="text-black text-center text-black ">Listen like a local.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
            <div className="h-36 w-36"><img src="/play.png" alt="My Image" /></div>
              <div className="ml-4">
                <p className="font-bold text-center text-black">Stream movies and TV.</p>
                <p className="text-black text-center text-black">Enjoy the entire catalog.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
            <div className="h-36 w-36"><img src="/privacy.png" alt="My Image" /></div>
              <div className="ml-4">
                <p className="font-bold text-center text-black">Keep your privacy.</p>
                <p className="text-black text-center text-black">Even on mobile.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
            <div className="h-36 w-36"><img src="/bank.png" alt="My Image" /></div>
              <div className="ml-4">
                <p className="font-bold text-center text-black">Banking where you want.</p>
                <p className="text-black text-center text-black">Unlocked opportunities.</p>
              </div>
            </div>
          </div>
          
        </ul>
      </Container>
      

      <section id="offer">
      <Container className="mx-auto max-w-[1920px] flex bg-gray-200 text-black flex-col items-center py-4 sm:py-24 sm:px-6">
          <div className="text-black text-4xl text-center  font-extrabold sm:text-4xl whitespace-nowrap">
            Pick your premium
          </div>



          <div className="">
            <Pricing session={session} user={user} subscription={subscription} products={products} />
          </div>
</Container>
</section>


    </>
  );
}

export default Download;
