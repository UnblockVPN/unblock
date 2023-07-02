import { Session, User } from '@supabase/supabase-js';
import Pricing from '@/components/Pricing';
import Link from 'next/link';
import Image from "next/image";
import Container from '@/components/ui/Download/Container';
import s from '../Navbar/Navbar.module.css';
import LocationComponent from '@/components/location';

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
  <div className="flex flex-col mt-12 max-w-6xl justify-center items-center px-4 text-center w-full">
    <div className="max-w-2xl">
    <div className="flex justify-center items-center">
        <img src="/download.png" alt="Download" className="h-24 w-32 object-contain"/>
      </div>
      <h1 className=" text-5xl mt-6 mb-10 text-black font-extrabold sm:text-5xl whitespace-nowrap">
        Download UnblockVPN
      </h1>
      <p className=" mb-10 leading-normal text-black font-bold text-l sm:text-l">
      Unblock direct from your device.
      </p>
      <div className="flex justify-center mb-12 flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
        <Link href="/order" className="px-6 py-3 font-medium text-center bg-gray-200 rounded-full text-black sm:text-black transition duration-500 ease-in-out transform hover:scale-110">
          Download
        </Link>

      </div>
    </div>
  </div>
</Container>
<LocationComponent></LocationComponent>
      </div>

     <Container className="mx-auto max-w-[1920px] flex bg-white text-black flex-col items-center  sm:py-12 sm:px-6">
        <div className="text-4xl text-center mt-6 mb-12 font-extrabold sm:text-4xl whitespace-nowrap">
        Easily connect from laptop, mobile and tablet, too.

        </div>
        <div className="text-l text-center font-extrabold sm:text-l whitespace-nowrap">

        Downloading the app for devices is free & easy.
        </div>

        <div className="flex justify-center">
  <ul className="flex flex-row space-x-8 justify-center items-start">
    <li className="flex flex-col items-center">
      <div className="w-36 h-36 flex items-center justify-center">
        <img src="/apple.svg" alt="Apple Image" className="h-10 object-contain" />
      </div>
    </li>
    <li className="flex flex-col items-center">
      <div className="w-36 h-36 flex items-center justify-center">
        <img src="/google-play-badge.png" alt="Play Image" className="h-10 object-contain" />
      </div>
    </li>
    <li className="flex flex-col items-center">
      <div className="w-36 h-36 flex items-center justify-center">
        <img src="/Get_it_from_Microsoft_Badge.png" alt="Microsoft Image" className="h-10 object-contain" />
      </div>
    </li>
    <li className="flex flex-col items-center">
      <div className="w-36 h-36 flex items-center justify-center">
        <img src="/amzn.png" alt="Amazon Image" className="h-10 object-contain" />
      </div>
    </li>
  </ul>
</div>




      </Container>
      

      <section id="offer">

      <Container className="mx-auto max-w-[1920px] flex bg-gray-600 text-white flex-col items-center py-4 sm:py-4 sm:px-6">
          <div className="flex justify-center mt-12 items-center">
            <img src="/Bezel-All-Hardware-small_2x-removebg-preview.png" alt="Download" className="h-72 w-102 object-contain"/>
          </div>
          <div className="text-white text-4xl text-center  font-extrabold sm:text-4xl whitespace-nowrap">
          One account, connect everywhere.
          </div>
          <div className="mt-6 mb-12">
          <ul style={{ display: 'flex', alignItems: 'center' }}>
            <li style={{ paddingRight: '5px' }}>MOBILE</li>
            <li style={{ color: 'white' }}>&#8226;</li>
            <li style={{ paddingLeft: '5px', paddingRight: '5px' }}>WATCH</li>
            <li style={{ color: 'white' }}>&#8226;</li>
            <li style={{ paddingLeft: '5px', paddingRight: '5px' }}>COMPUTER</li>
            <li style={{ color: 'white' }}>&#8226;</li>
            <li style={{ paddingLeft: '5px', paddingRight: '5px' }}>TABLET</li>
            <li style={{ color: 'white' }}>&#8226;</li>
            <li style={{ paddingLeft: '5px', paddingRight: '5px' }}>CAR</li>
            <li style={{ color: 'white' }}>&#8226;</li>
            <li style={{ paddingLeft: '5px', paddingRight: '5px' }}>PLAYSTATION®</li>
            <li style={{ color: 'white' }}>&#8226;</li>
            <li style={{ paddingLeft: '5px', paddingRight: '5px' }}>XBOX</li>
            <li style={{ color: 'white' }}>&#8226;</li>
            <li style={{ paddingLeft: '5px', paddingRight: '5px' }}>TV</li>
            <li style={{ color: 'white' }}>&#8226;</li>
            <li style={{ paddingLeft: '5px', paddingRight: '5px' }}>SPEAKER</li>
            <li style={{ color: 'white' }}>&#8226;</li>
            <li style={{ paddingLeft: '5px' }}>WEB PLAYER</li>
          </ul>
          </div>


          
          
          
          
          

          
</Container>
</section>


    </>
  );
}

export default Download;
