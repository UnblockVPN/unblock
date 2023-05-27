// This code imports the Stripe class from the stripe module.

// The stripe variable is a Stripe object that can be used to make Stripe API requests.
// The stripe object is created with the Stripe secret key from the STRIPE_SECRET_KEY environment variable.
// The stripe object is also configured with the following options:

// - apiVersion: The Stripe API version to use.
// - appInfo: Information about the plugin, such as its name and version.

import Stripe from 'stripe';

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY_LIVE ?? process.env.STRIPE_SECRET_KEY ?? '',
  {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2022-11-15',
    // Register this as an official Stripe plugin.
    // https://stripe.com/docs/building-plugins#setappinfo
    appInfo: {
      name: 'Next.js Subscription Starter',
      version: '0.1.0'
    }
  }
);
