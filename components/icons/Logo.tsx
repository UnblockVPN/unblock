'use client';
import { useTheme } from 'next-themes';

const Logo = () => {
  const { theme } = useTheme();
  const logoPath = theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg';

  return (
    <img src={logoPath} alt="Logo" />
  );
};

export default Logo;

