// This import statement imports the `NextApiHandler` type from the `next` package.
import { NextApiHandler } from 'next';

// This import statement imports the `createServerSupabaseClient` function from the `@supabase/auth-helpers-nextjs` package.
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

// This import statement imports the `stripe` object from the `@/utils/stripe` directory.
import { stripe } from '@/utils/stripe';

// This import statement imports the `createOrRetrieveCustomer` function from the `@/utils/supabase-admin` directory.
import { createOrRetrieveCustomer } from '@/utils/supabase-admin';

// This import statement imports the `getURL` function from the `@/utils/helpers` directory.
import { getURL } from '@/utils/helpers';

// This function defines the `CreateCheckoutSession` Next.js API handler.
const CreateCheckoutSession: NextApiHandler = async (req, res) => {
  // This condition checks if the request method is `POST`.
  if (req.method === 'POST') {
    // This code parses the request body and stores the `price`, `quantity`, and `metadata` properties in variables.
    const { price, quantity = 1, metadata = {} } = req.body;

    try {
      // This code creates a `Supabase` client instance.
      const supabase = createServerSupabaseClient({ req, res });

      // This code gets the user from Supabase.
      const {
        data: { user }
      } = await supabase.auth.getUser();

      // This code creates or retrieves a customer from Stripe.
      const customer = await createOrRetrieveCustomer({
        uuid: user?.id || '',
        email: user?.email || ''
      });

      // This code creates a checkout session in Stripe.
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        customer,
        line_items: [
          {
            price: price.id,
            quantity
          }
        ],
        mode: 'subscription',
        allow_promotion_codes: true,
        subscription_data: {
          trial_from_plan: true,
          metadata
        },
        success_url: `${getURL()}/account`,
        cancel_url: `${getURL()}/`
      });

      // This code returns the checkout session ID.
      return res.status(200).json({ sessionId: session.id });
    } catch (err: any) {
      // This code logs the error.
      console.log(err);

      // This code returns an error response.
      res
        .status(500)
        .json({ error: { statusCode: 500, message: err.message } });
    }
  } else {
    // This code sets the `Allow` header to `POST`.
    res.setHeader('Allow', 'POST');

    // This code returns a 405 error.
    res.status(405).end('Method Not Allowed');
  }
};

// This code exports the `CreateCheckoutSession` Next.js API handler.
export default CreateCheckoutSession;