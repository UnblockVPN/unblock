import { Session, User } from '@supabase/supabase-js';
import Pricing from '@/components/Pricing';
import Link from 'next/link';
import Image from "next/image";
import Container from '@/components/ui/Hero/Container';
import heroImg from "../../../public/couple_02.png";
import s from '../Navbar/Navbar.module.css';



interface Props {
  session: Session | null;
  user: User | null | undefined;
  subscription: any; // Add the appropriate type for the 'subscription' prop
  products: any[]; // Add the appropriate type for the 'products' prop
}


const Hero: React.FC<Props> = ({ session, user, subscription, products }) => {
  return (
    <>
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

export default Hero;
