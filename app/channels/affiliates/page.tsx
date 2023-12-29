// app/channels/affiliates/page.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ChannelsAffiliates() {
  const router = useRouter();

  useEffect(() => {
    // Client-side logic here
    async function fetchSessionAndRedirect() {
      // Example: Fetch session data from an API endpoint
      const sessionResponse = await fetch('/api/getSession');
      const session = await sessionResponse.json();

      if (!session?.user) {
        router.push(`/signin?redirect=${encodeURIComponent('/channels/affiliates')}`);
      } else {
        // Handle logged-in user scenario
      }
    }

    fetchSessionAndRedirect();
  }, [router]);

  return (
    <section className="mb-32 bg-black">
      {/* Your component JSX */}
    </section>
  );
}

ChannelsAffiliates.client = true; // Mark this component as a client component
