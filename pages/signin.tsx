// This import statement imports the `useRouter` hook from the `next/router` package.
import { useRouter } from 'next/router';

// This import statement imports the `useEffect` hook from the `react` package.
import { useEffect } from 'react';

// This import statement imports the `useUser` hook and `useSupabaseClient` function from the `@supabase/auth-helpers-react` package.
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

// This import statement imports the `Auth` component from the `@supabase/auth-ui-react` package.
import { Auth } from '@supabase/auth-ui-react';

// This import statement imports the `ThemeSupa` theme from the `@supabase/auth-ui-shared` package.
import { ThemeSupa } from '@supabase/auth-ui-shared';

// This import statement imports the `LoadingDots` component from the `@/components/ui` directory.
import LoadingDots from '@/components/ui/LoadingDots';

// This import statement imports the `Logo` component from the `@/components/icons` directory.
import Logo from '@/components/icons/Logo';

// This import statement imports the `getURL` function from the `@/utils/helpers` directory.
import { getURL } from '@/utils/helpers';

// This function defines the `SignIn` component.
const SignIn = () => {
  // This variable stores the `useRouter` hook instance.
  const router = useRouter();

  // This variable stores the `useUser` hook instance.
  const user = useUser();

  // This variable stores the `useSupabaseClient` function instance.
  const supabaseClient = useSupabaseClient();

  // This function is used to redirect the user to the account page if they are logged in.
  useEffect(() => {
    if (user) {
      router.replace('/account');
    }
  }, [user]);

  // This condition checks if the user is logged in.
  if (!user) {
    // This code renders the sign-in form.
    return (
      <div className="flex justify-center height-screen-helper">
        <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
          <div className="flex justify-center pb-12 ">
            <Logo width="64px" height="64px" />
          </div>
          <div className="flex flex-col space-y-4">
            <Auth
              supabaseClient={supabaseClient}
              providers={['github','apple', 'google', 'azure']}
              redirectTo={getURL()}
              magicLink={true}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#404040',
                      brandAccent: '#52525b'
                    }
                  }
                }
              }}
              theme="dark"
            />
          </div>
        </div>
      </div>
    );
  }

  // This code renders a loading spinner if the user is not logged in.
  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
};

// This function exports the `SignIn` component.
export default SignIn;