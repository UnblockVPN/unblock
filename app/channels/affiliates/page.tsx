// app/channels/affiliates/page.tsx
import React, { useEffect } from 'react';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types_db';
import { cookies } from 'next/headers';
import { fetch } from 'next/navigation';

export default function ChannelsAffiliates() {
  // Direct data fetching within the component
  useEffect(() => {
    // Create a server action client for Supabase interactions
    const supabase = createServerActionClient<Database>({ cookies });

    // Fetch session and determine redirection
    const fetchSessionAndRedirect = async () => {
      const session = await fetch('/api/getSession').then(res => res.json());

      if (!session?.user) {
        window.location.href = `/signin?redirect=${encodeURIComponent('/channels/affiliates')}`;
      } else {
        const userDetails = await fetch('/api/getUserDetails').then(res => res.json());
        const subscription = await fetch('/api/getSubscription').then(res => res.json());

        // Set state or perform actions with userDetails and subscription
      }
    };

    fetchSessionAndRedirect();
  }, []);

  return (
    <section className="mb-32 bg-black">
      {/* Your component JSX */}
    </section>
  );
}
