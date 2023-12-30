// app/auth/callback/route.ts

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Database } from '@/types_db';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const redirectPath = requestUrl.searchParams.get('redirect') || '/';

  // Log the received code and redirect path
  console.log(`Received code: ${code}`);
  console.log(`Redirect path: ${redirectPath}`);

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    const response = await supabase.auth.exchangeCodeForSession(code);
  
    // Log the entire response
    console.log('Response:', response);
  }

  // Construct the redirect URL
  const redirectUrl = new URL(redirectPath, requestUrl.origin).href;
  console.log(`Redirecting to: ${redirectUrl}`);

  // Redirect to the specified path or to the home page
  return NextResponse.redirect(redirectUrl);
}

