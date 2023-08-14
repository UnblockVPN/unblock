import s from '../Navbar/Navbar.module.css';
import Container from '@/components/ui/Download/Container';
import { Session, User } from '@supabase/supabase-js';
import Link from 'next/link';

//import LocationComponent from '@/components/location';

interface Props {
  session: Session | null;
  user: User | null | undefined;
  subscription: any; // Add the appropriate type for the 'subscription' prop
  products: any[]; // Add the appropriate type for the 'products' prop
}

const Founders: React.FC<Props> = ({
  session,
  user,
  subscription,
  products
}) => {
  return (
    <>
      <div
        className={`${s.downloadContainer} mx-auto  `}
      >
        <Container className="mx-auto max-w-[1920px] flex flex-col items-center justify-center py-4 ">

          <div className="flex flex-col mt-12 max-w-6xl justify-center items-center px-4 text-center w-full">
            <div className="max-w-2xl">
              <div className="flex justify-center items-center">
                <img
                  src="/download.png"
                  alt="Download"
                  className="h-24 w-32 object-contain"
                />
              </div>
              <h1 className="text-3xl text-center mb-10 font-extrabold sm:text-4xl sm:leading-relaxed sm:text-left whitespace-normal text-left">
                Download UnblockVPN
              </h1>
              <p className="mb-10 leading-normal font-bold text-xl sm:text-xl">
                Unblock direct from your device.
              </p>
              <div className="flex justify-center mb-12 flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <Link
                  href="/order"
                  className="px-6 py-3 mx-auto justify-center font-medium text-center bg-gray-200 rounded-full text-black sm:text-black transition duration-500 ease-in-out transform hover:scale-110"
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="mx-auto max-w-[1920px] flex flex-col text-black items-center justify-center">
        <div className="text-4xl text-center mt-6 mb-6 font-extrabold sm:text-4xl sm:text-4xl sm:leading-relaxed sm:text-center sm:whitespace-normal">
          Easily connect from laptop, mobile, and tablet, too.
        </div>
        <div className="text-3xl text-center mt-6 mb-6 font-extrabold sm:text-4xl sm:text-3xl sm:leading-relaxed sm:text-center whitespace-normal">
          Downloading the app for devices is free & easy.
        </div>

        <div className="flex justify-center">
          <ul className="flex flex-col items-center justify-center sm:flex-row">
            <li className="flex flex-col items-center">
              <div className="w-36 h-36 flex items-center justify-center">
                <img
                  src="/apple.svg"
                  alt="Apple Image"
                  className="h-10 object-contain"
                />
              </div>
             
            </li>
            <li className="flex flex-col items-center">
              <div className="w-36 h-36 flex items-center justify-center">
                <img
                  src="/google-play-badge.png"
                  alt="Play Image"
                  className="h-10 object-contain"
                />
              </div>
             
            </li>
            <li className="flex flex-col items-center">
              <div className="w-36 h-36 flex items-center justify-center">
                <img
                  src="/Get_it_from_Microsoft_Badge.png"
                  alt="Microsoft Image"
                  className="h-10 object-contain"
                />
              </div>
              
            </li>
            <li className="flex flex-col items-center">
              <div className="w-36 h-36 flex items-center justify-center">
                <img
                  src="/amzn.png"
                  alt="Amazon Image"
                  className="h-10 object-contain"
                />
              </div>
              
            </li>
          </ul>
        </div>
      </Container>

      <section id="offer">
        <Container className="mx-auto max-w-[1920px] flex bg-gray-600 text-white flex-col items-center py-4 sm:py-4 sm:px-6">
          <div className="flex justify-center mt-12 items-center">
            <img
              src="/Bezel-All-Hardware-small_2x-removebg-preview.png"
              alt="Download"
              className="h-72 w-102 object-contain"
            />
          </div>
          <div className="text-white text-4xl text-center font-extrabold sm:text-4xl whitespace-nowrap">
            One account, connect everywhere.
          </div>
          <div className="mt-6 mb-12">
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}
            >
              <li style={{ paddingRight: '5px' }}>MOBILE</li>
              <li style={{ color: 'white', padding: '0 5px' }}>&#8226;</li>
              <li style={{ paddingRight: '5px' }}>WATCH</li>
              <li style={{ color: 'white', padding: '0 5px' }}>&#8226;</li>
              <li style={{ paddingRight: '5px' }}>COMPUTER</li>
              <li style={{ color: 'white', padding: '0 5px' }}>&#8226;</li>
              <li style={{ paddingRight: '5px' }}>TABLET</li>
              <li style={{ color: 'white', padding: '0 5px' }}>&#8226;</li>
              <li style={{ paddingRight: '5px' }}>CAR</li>
              <li style={{ color: 'white', padding: '0 5px' }}>&#8226;</li>
              <li style={{ paddingRight: '5px' }}>PLAYSTATION®</li>
              <li style={{ color: 'white', padding: '0 5px' }}>&#8226;</li>
              <li style={{ paddingRight: '5px' }}>XBOX</li>
              <li style={{ color: 'white', padding: '0 5px' }}>&#8226;</li>
              <li style={{ paddingRight: '5px' }}>TV</li>
              <li style={{ color: 'white', padding: '0 5px' }}>&#8226;</li>
              <li style={{ paddingRight: '5px' }}>SPEAKER</li>
              <li style={{ color: 'white', padding: '0 5px' }}>&#8226;</li>
              <li>WEB PLAYER</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Founders;
