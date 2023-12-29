import React from 'react';
import { getSession } from '@/app/supabase-server';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types_db';
import { revalidatePath } from 'next/cache';

export async function getServerSideProps(context) {
  // Create a server action client for Supabase interactions
  const supabase = createServerActionClient<Database>({
    cookies: context.req.cookies,
  });

  const session = await getSession(context);

  if (!session?.user) {
    // Redirect to the sign-in page with a return URL
    return {
      redirect: {
        destination: `/signin?redirect=${encodeURIComponent('/channels/affiliates')}`,
        permanent: false,
      },
    };
  }

  // Example of using the supabase client for fetching user details
  const { data: userDetails, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', session.user.id)
    .single();

  // Handle errors or no data scenarios
  if (error || !userDetails) {
    // Log error and revalidate path if necessary
    console.error(error);
    revalidatePath('/channels/affiliates');
    return { props: {} };
  }

  // Additional logic for fetching subscription details or other user data
  // ...

  return {
    props: {
      user: session.user,
      userDetails,
      // Include other relevant data
    },
  };
}

function AffiliateChannelPage({ user, userDetails }) {
  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Affiliates
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            Welcome to the Affiliate Channel, {userDetails?.full_name || user?.email}
          </p>
          {/* Additional user-specific content */}
        </div>
      </div>
    </section>
  );
}

interface Props {
  title: string;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export default AffiliateChannelPage;
