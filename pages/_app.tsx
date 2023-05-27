import { useEffect, useState } from 'react';
// Import the useEffect and useState React hooks.

import React from 'react';
// Import the React library.

import { AppProps } from 'next/app';
// Import the AppProps type from Next.js.

import { SessionContextProvider } from '@supabase/auth-helpers-react';
// Import the SessionContextProvider component from the Supabase Auth Helpers React library.

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
// Import the createBrowserSupabaseClient function from the Supabase Auth Helpers Next.js library.

import Layout from '@/components/Layout';
// Import the Layout component from the @/components directory.

import { MyUserContextProvider } from '@/utils/useUser';
// Import the MyUserContextProvider component from the @/utils directory.

import type { Database } from 'types_db';
// Import the Database type from the types_db directory.

import 'styles/main.css';
// Import the main.css stylesheet.

import 'styles/chrome-bug.css';
// Import the chrome-bug.css stylesheet.

export default function MyApp({ Component, pageProps }: AppProps) {
// Define the MyApp function, which is the entry point for the Next.js application.

const [supabaseClient] = useState(() =>
createBrowserSupabaseClient<Database>()
);
// Create a useState hook to store the Supabase client instance.

useEffect(() => {
document.body.classList?.remove('loading');
}, []);
// Use the useEffect hook to remove the loading class from the document body when the application loads.

return (
<div className="bg-black">
<SessionContextProvider supabaseClient={supabaseClient}>
<MyUserContextProvider>
<Layout>
<Component {...pageProps} />
</Layout>
</MyUserContextProvider>
</SessionContextProvider>
</div>
);
}