// This import statement imports the `NextApiRequest` and `NextApiResponse` types from the `next` package.
import { NextApiRequest, NextApiResponse } from 'next';

// This import statement imports the `Stripe` class from the `stripe` package.
import Stripe from 'stripe';

// This import statement imports the `Readable` interface from the `node:stream` package.
import { Readable } from 'node:stream';

// This import statement imports the `upsertProductRecord`, `upsertPriceRecord`, and `manageSubscriptionStatusChange` functions from the `@/utils/supabase-admin` directory.
import {
  upsertProductRecord,
  upsertPriceRecord,
  manageSubscriptionStatusChange
} from '@/utils/supabase-admin';

// This code exports the `config` object.
export const config = {
  api: {
    bodyParser: false
  }
};

// This function buffers the request body.
async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

// This variable stores the set of relevant events.
const relevantEvents = new Set([
  'product.created',
  'product.updated',
  'price.created',
  'price.updated',
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted'
]);

// This function handles Stripe webhooks.
const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // This condition checks if the request method is `POST`.
  if (req.method === 'POST') {
    // This code gets the request body.
    const buf = await buffer(req);

    // This code gets the Stripe signature header.
    const sig = req.headers['stripe-signature'];

    // This code gets the Stripe webhook secret from the environment.
    const webhookSecret =
      process.env.STRIPE_WEBHOOK_SECRET_LIVE ??
      process.env.STRIPE_WEBHOOK_SECRET;

    // This variable stores the Stripe event.
    let event: Stripe.Event;

    // This code tries to construct the Stripe event from the request body, signature, and webhook secret.
    try {
      if (!sig || !webhookSecret) return;
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err: any) {
      // This code logs the error.
      console.log(`❌ Error message: ${err.message}`);

      // This code sends a 400 error response.
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
// This code checks if the event type is one of the relevant events.
// If it is, the code then executes the corresponding action.
// The actions include upserting a product record, upserting a price record,
// managing a subscription status change, or throwing an error if the event type is not handled.

    if (relevantEvents.has(event.type)) {
      try {
        switch (event.type) {
          case 'product.created':
          case 'product.updated':
            await upsertProductRecord(event.data.object as Stripe.Product);
            break;
          case 'price.created':
          case 'price.updated':
            await upsertPriceRecord(event.data.object as Stripe.Price);
            break;
          case 'customer.subscription.created':
          case 'customer.subscription.updated':
          case 'customer.subscription.deleted':
            const subscription = event.data.object as Stripe.Subscription;
            await manageSubscriptionStatusChange(
              subscription.id,
              subscription.customer as string,
              event.type === 'customer.subscription.created'
            );
            break;
          case 'checkout.session.completed':
            const checkoutSession = event.data
              .object as Stripe.Checkout.Session;
            if (checkoutSession.mode === 'subscription') {
              const subscriptionId = checkoutSession.subscription;
              await manageSubscriptionStatusChange(
                subscriptionId as string,
                checkoutSession.customer as string,
                true
              );
            }
            break;
          default:
            throw new Error('Unhandled relevant event!');
        }
      } catch (error) {
        console.log(error);
        return res
          .status(400)
          .send('Webhook error: "Webhook handler failed. View logs."');
      }
    }

    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default webhookHandler;
