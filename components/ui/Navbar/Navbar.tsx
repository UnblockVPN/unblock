import Link from 'next/link';
import { createServerSupabaseClient } from '@/app/supabase-server';
import Logo from '@/components/icons/Logo';
import SignOutButton from './SignOutButton';
import s from './Navbar.module.css';
import ThemeChanger from '@/components/DarkSwitch';

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-24 mx-auto bg-white dark:bg-black">
        <div className="relative flex py-0 flex-row justify-between align-center md:py-6">
          <div className="flex items-center">
            <Link href="/" className={s.logo} aria-label="Logo">
              <Logo />
            </Link>
            <div className="hidden md:block ml-2 text-black dark:text-white text-4xl font-extrabold">
              <span></span>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <nav className={`ml-auto ${s.link}`}>
              <Link href="/order" className={s.link}>
                Premium
              </Link>
              <Link href="/support" className={s.link}>
                Support
              </Link>
              <Link href="/download" className={s.link}>
                Download
              </Link>
            </nav>

            {user ? (
              <SignOutButton />
            ) : (
              <Link href="/signin" className={s.link}>
                Log in
              </Link>
            )}
            <ThemeChanger />
          </div>
        </div>
      </div>
    </nav>
  );
}
