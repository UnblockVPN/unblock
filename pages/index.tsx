// This import statement imports the `GetStaticPropsResult` type from the `next` package.
import { GetStaticPropsResult } from 'next';

// This import statement imports the `Pricing` component from the `@/components` directory.
import Pricing from '@/components/Pricing';

// This import statement imports the `getActiveProductsWithPrices` function from the `@/utils/supabase-client` directory.
import { getActiveProductsWithPrices } from '@/utils/supabase-client';

// This import statement imports the `Product` type from the `types` directory.
import { Product } from 'types';

// This interface defines the props that are passed to the `PricingPage` component.
interface Props {
  products: Product[];
}

// This function exports the `PricingPage` component.
export default function PricingPage({ products }: Props) {
  return <Pricing products={products} />;
}

// This function exports the `getStaticProps` function.
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  // This code calls the `getActiveProductsWithPrices` function to get the active products with prices.
  const products = await getActiveProductsWithPrices();

  // This code returns the `props` and `revalidate` properties.
  return {
    props: {
      products
    },
    revalidate: 60
  };
}