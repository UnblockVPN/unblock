import s from '../Navbar/Navbar.module.css';
import Faq from '@/components/faq';
import Container from '@/components/ui/Support/Container';
import { Session, User } from '@supabase/supabase-js';
import Link from 'next/link';

interface Props {
  session: Session | null;
  user: User | null | undefined;
  subscription: any; // Add the appropriate type for the 'subscription' prop
  products: any[]; // Add the appropriate type for the 'products' prop
}

const Support: React.FC<Props> = ({ session, user, subscription, products }) => {
  return (
    <>
      <div className={`${s.supportContainer} mx-auto `}>
        <Container className="mx-auto max-w-full w-full flex flex-col items-center justify-center py-4">
          <div className="flex flex-col mt-12 max-w-6xl justify-center items-center px-4 text-center w-full">
            <div className="max-w-2xl">
              <h1 className="text-3xl text-center mb-10 font-extrabold sm:text-4xl sm:leading-relaxed sm:text-left whitespace-normal text-left">
                How can we help you?
              </h1>
              <p className="leading-normal mb-6 font-bold text-xl sm:text-l">
                <Link href="/signin">Login for faster help</Link>
              </p>
              <Faq />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Support;

