// This code imports the following React components:
// - `PropsWithChildren`
// - `Head`
// - `useRouter`
// - `Navbar`
// - `Footer`

// It also imports the following type:
// - `PageMeta`

// The `Props` interface extends the `PropsWithChildren` interface and
// adds a `meta` property.

// The `Layout` function takes two arguments:
// - `children`: The children of the layout component.
// - `meta`: The meta data for the layout component.

// The `Layout` function uses the `useRouter` hook to get the current
// router state.

// It then sets the `meta` property to the following object:
// - `title`: The title of the page.
// - `description`: The description of the page.
// - `cardImage`: The image to use for the page in social media sharing.
// - `...pageMeta`: Any additional meta data provided by the caller.

// The `Layout` function then returns a `<div>` element with the following
// children:
// - A `<Head>` element with the following meta tags:
//    * `title`: The title of the page.
//    * `robots`: `follow, index`
//    * `link`: A link to the favicon.
//    * `meta`: The description of the page.
//    * `meta`: The `og:url` of the page.
//    * `meta`: The `og:type` of the page.
//    * `meta`: The `og:site_name` of the page.
//    * `meta`: The description of the page.
//    * `meta`: The title of the page.
//    * `meta`: The image to use for the page in social media sharing.
// - A `<Navbar>` component.
// - A `<main>` element with the id `skip` and the children of the `children` argument.
// - A `<Footer>` component.


import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

import { PageMeta } from '../types';

interface Props extends PropsWithChildren {
  meta?: PageMeta;
}

export default function Layout({ children, meta: pageMeta }: Props) {
  const router = useRouter();
  const meta = {
    title: 'Next.js Subscription Starter',
    description: 'Brought to you by Vercel, Stripe, and Supabase.',
    cardImage: '/og.png',
    ...pageMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://subscription-starter.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <Navbar />
      <main id="skip">{children}</main>
      <Footer />
    </>
  );
}
