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

// This function defines the `CreatePortalLink` Next.js API handler.
const CreatePortalLink: NextApiHandler = async (req, res) => {
  // This condition checks if the request method is `POST`.
  if (req.method === 'POST') {
    // This code tries to create a `Supabase` client instance.
    try {
      const supabase = createServerSupabaseClient({ req, res });

      // This code gets the user from Supabase.
      const {
        data: { user }
      } = await supabase.auth.getUser();

      // This code checks if the user is not null.
      if (!user) {
        throw Error('Could not get user');
      }

      // This code creates or retrieves a customer from Stripe.
      const customer = await createOrRetrieveCustomer({
        uuid: user.id || '',
        email: user.email || ''
      });

      // This code checks if the customer is not null.
      if (!customer) {
        throw Error('Could not get customer');
      }

      // This code creates a billing portal session in Stripe.
      const { url } = await stripe.billingPortal.sessions.create({
        customer,
        return_url: `${getURL()}/account`
      });

      // This code returns the billing portal session URL.
      return res.status(200).json({ url });
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

// This code exports the `CreatePortalLink` Next.js API handler.
export default CreatePortalLink;