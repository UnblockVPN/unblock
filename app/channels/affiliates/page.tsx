// app/channels/affiliates/page.tsx
import React, { ReactNode } from 'react';
import { getSession, getUserDetails, getSubscription } from '@/app/supabase-server';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types_db';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children?: ReactNode;
  user: any; // Adjust this type based on your user data
  userDetails: any; // Adjust this type based on userDetails data
  subscriptionPrice: string;
}

// This function fetches data and returns props for the component
export async function getServerSideProps() {
  const supabase = createServerActionClient<Database>({ cookies });
  const session = await getSession();

  if (!session?.user) {
    return {
      redirect: {
        destination: `/signin?redirect=${encodeURIComponent('/channels/affiliates')}`,
        permanent: false,
      },
    };
  }

  const [userDetailsResponse, subscriptionResponse] = await Promise.all([
    getUserDetails(),
    getSubscription()
  ]);

  const subscriptionPrice = subscriptionResponse &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscriptionResponse?.prices?.currency!,
      minimumFractionDigits: 0
    }).format((subscriptionResponse?.prices?.unit_amount || 0) / 100);

  return {
    props: {
      user: session.user,
      userDetails: userDetailsResponse,
      subscriptionPrice,
    },
  };
}

// The actual page component
function ChannelsAffiliates({ title, description, footer, children, user, userDetails, subscriptionPrice }: Props) {
  // JSX rendering
  return (
    <section className="mb-32 bg-black">
      {/* Your component JSX */}
    </section>
  );
}

export default ChannelsAffiliates;
