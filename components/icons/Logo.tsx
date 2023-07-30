'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Logo = () => {
  const { theme } = useTheme();
  const logoPath = theme === 'light' ? '/logo-dark.svg' : '/logo-light.svg'; {/* logo-dark.svg: white logo */}

  return (
    <Image src={logoPath} alt="Logo" width={160} height={60}/>
  );
};

export default Logo;

