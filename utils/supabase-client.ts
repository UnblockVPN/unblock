// This code imports the createBrowserSupabaseClient and User functions from the @supabase/auth-helpers-nextjs module.

// The supabase variable is a Supabase client that can be used to make Supabase API requests.
// The supabase client is created with the createBrowserSupabaseClient function.

// The getActiveProductsWithPrices function returns a list of active products with their prices.
// The getActiveProductsWithPrices function takes no arguments.
// The getActiveProductsWithPrices function first makes a Supabase query to the products table.
// The getActiveProductsWithPrices function then filters the results to only include active products.
// The getActiveProductsWithPrices function then makes a second Supabase query to the prices table.
// The getActiveProductsWithPrices function then filters the results to only include prices for active products.
// The getActiveProductsWithPrices function then merges the results of the two queries and returns them.

// The updateUserName function updates the name of a user.
// The updateUserName function takes two arguments:
// - user: The user to update.
// - name: The new name for the user.
// The updateUserName function first makes a Supabase query to the users table.
// The updateUserName function then updates the full_name property of the user record.
// The updateUserName function then commits the changes to the database.

import {
  createBrowserSupabaseClient,
  User
} from '@supabase/auth-helpers-nextjs';

import { ProductWithPrice } from 'types';
import type { Database } from 'types_db';

export const supabase = createBrowserSupabaseClient<Database>();

export const getActiveProductsWithPrices = async (): Promise<
  ProductWithPrice[]
> => {
  console.log('Getting active products with prices...');

  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' });

  if (error) {
    console.log(error.message);
  }

  console.log('Finished getting active products with prices.');

  // TODO: improve the typing here.
  return (data as any) || [];
};

export const updateUserName = async (user: User, name: string) => {
  console.log('Updating user name...');

  await supabase
    .from('users')
    .update({
      full_name: name
    })
    .eq('id', user.id);

  console.log('Finished updating user name.');
};

