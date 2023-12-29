// app/channels/affiliates/page.tsx
import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { getSession, getUserDetails, getSubscription } from '@/app/supabase-server';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types_db';
import { cookies } from 'next/headers';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children?: ReactNode;
}

export default async function ChannelsAffiliates(props: Props) {
  const { title, description, footer, children } = props;
  const router = useRouter();

  // Create a server action client for Supabase interactions
  const supabase = createServerActionClient<Database>({ cookies });

  const session = await getSession();

  if (!session?.user) {
    // Redirect to sign-in if not logged in with a return URL
    router.push(`/signin?redirect=${encodeURIComponent(router.asPath)}`);
    return null;
  }

  const [userDetailsResponse, subscriptionResponse] = await Promise.all([
    getUserDetails(),
    getSubscription()
  ]);

  const user = session.user;

  const subscriptionPrice = subscriptionResponse &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscriptionResponse?.prices?.currency!,
      minimumFractionDigits: 0
    }).format((subscriptionResponse?.prices?.unit_amount || 0) / 100);

  // Example: Using Supabase client for updating user details (as needed)
  // const updateName = async (newName: string) => {
  //   const { error } = await supabase
  //     .from('users')
  //     .update({ full_name: newName })
  //     .eq('id', user.id);
  //   if (error) {
  //     console.error(error);
  //     // Revalidation logic here
  //   }
  // };

  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            {title || 'Affiliates'}
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            {description || 'Call to action here'}
          </p>
          {children}
        </div>
        <div>
          <p>Welcome, {userDetailsResponse?.full_name || user?.email}</p>
          <p>Your subscription: {subscriptionPrice}</p>
          {/* Additional functionality or content here */}
        </div>
      </div>
    </section>
  );
}
