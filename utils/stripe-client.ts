// This code imports the loadStripe and Stripe functions from the @stripe/stripe-js module.

// The stripePromise variable is a promise that resolves to a Stripe object.
// The getStripe function first checks if the stripePromise variable is already resolved.
// If it is, the getStripe function returns the stripePromise variable.
// If the stripePromise variable is not resolved, the getStripe function creates a new promise.
// The getStripe function then calls the loadStripe function with the Stripe publishable key from the NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable.
// The getStripe function then returns the new promise.

import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE ??
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ??
        ''
    );
  }

  return stripePromise;
};
