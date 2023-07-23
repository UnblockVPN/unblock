"use client";
import { useRouter } from 'next/navigation';

const LegalPage = () => {
  const router = useRouter();

  // This will load app/legal/terms-of-service/page.tsx on open.
  router.push("/legal/terms-of-service", {
    replace: true,
  });

  return (
    <>
      <h1>Legal</h1>
      <ul>
        <li>
          <a href="/legal/terms-of-service">Terms of Service</a>
        </li>
        <li>
          <a href="/legal/privacy-policy">Privacy Policy</a>
        </li>
      </ul>
    </>
  );
};

export default LegalPage;