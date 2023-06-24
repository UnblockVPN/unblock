import ManageSubscriptionButton from './ManageSubscriptionButton';
import {
  getSession,
  getUserDetails,
  getSubscription
} from '@/app/supabase-server';
import Button from '@/components/ui/Button';
import { Database } from '@/types_db';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function About() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);

  const user = session?.user;

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscription?.prices?.currency!,
      minimumFractionDigits: 0
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  const updateName = async (formData: FormData) => {
    'use server';

    const newName = formData.get('name') as string;
    const supabase = createServerActionClient<Database>({ cookies });
    const session = await getSession();
    const user = session?.user;
    const { error } = await supabase
      .from('users')
      .update({ full_name: newName })
      .eq('id', user?.id);
    if (error) {
      console.log(error);
    }
    revalidatePath('/about');
  };

  const updateEmail = async (formData: FormData) => {
    'use server';

    const newEmail = formData.get('email') as string;
    const supabase = createServerActionClient<Database>({ cookies });
    const { error } = await supabase.auth.updateUser({ email: newEmail });
    if (error) {
      console.log(error);
    }
    revalidatePath('/about');
  };

  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Building Trust
          </h1>
          <p className="max-w-2xl m-auto mt-5 mb-2 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            As a privacy-focused company, UnblockVPN is trusted by our users to
            provide industry-leading protection through a combination of
            advanced technology and skilled professionals. Here's how we earn
            that trust.
          </p>

        </div>
      </div>

      <div className="mb-2 m-auto max-w-2xl sm:flex sm:flex-col text-left">
            <h2 className="max-w-2xl mt-5 text-left text-2xl font-semibold leading-6 sm:text-left text-zinc-200 underline mb-2">
              Security at UnblockVPN: Our 4 Key Strategies
            </h2>
            <p className="max-w-2xl m-auto mt-5 mb-2 text-xl text-zinc-200 sm:text-left sm:text-2xl">
            Discover how we prioritize cybersecurity to ensure the protection of
            our systems and users.
          </p>
          </div>


      <div className="sm:text-left text-left max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-2 lg:px-8">
        <div className="m-auto max-w-2xl sm:flex sm:flex-col text-left">

          <h3 className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
              1. Strengthening System Security
            </h3>

          <p className="  mt-5 mb-2 text-xl text-zinc-200 sm:text-left sm:text-2xl">
            The first line of defense is fortifying our systems. We employ a
            range of techniques, such as utilizing independently verified build
            verification systems, employing hardware security devices, and
            implementing state-of-the-art encryption, to make it challenging for
            unauthorized access.
          </p>

          <ul className="sm:text-left pl-4 list-disc">
            <li>Independent build verification system</li>
            <li>Hardware security devices</li>
            <li>Code review</li>
            <li>Hardened secure shell (SSH)</li>
            <li>Prompt application of patches</li>
          </ul>

          <h3 className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            2. Mitigating Potential Damages
          </h3>

          <p className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            While we strive to prevent breaches, we recognize the possibility of
            motivated attackers penetrating our defenses. Therefore, we
            implement measures to minimize the potential harm resulting from an
            initial breach.
          </p>
          <ul className="sm:text-left pl-4 list-disc">
            <li>Embracing a zero-trust approach</li>
            <li>Implementing zero-knowledge encryption</li>
            <li>Secure design principles</li>
            <li>Principle of least privilege</li>
          </ul>

          <h3 className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            3. Reducing Compromise Duration
          </h3>
          <p className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            In addition to minimizing the impact of a breach, we focus on
            reducing the time attackers can remain undetected within our
            systems.
          </p>
          <ul className="sm:text-left pl-4 list-disc">
            <li>Continuous security monitoring</li>
            <li>Automated system rebuilds</li>
          </ul>

          <h3 className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            4. Validating Security Controls
          </h3>
          <p className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            To ensure that our software and services meet the highest standards
            of privacy and security, we subject them to rigorous testing and
            evaluation.
          </p>
          <ul className="sm:text-left pl-4 list-disc">
            <li>Internal validation: Penetration tests</li>
            <li>
              External validation: Security audits conducted by third parties
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-5 leading-6 sm:text-left mb-2">Commitment to Innovation</h2>
          <p className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            As we strive to exceed industry security standards, we continuously
            innovate to enhance the protection of our products and users'
            privacy. Here, we highlight two groundbreaking technologies
            developed by UnblockVPN.
          </p>

          <h3 className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            1. FightLocker: Elevating the VPN Experience
          </h3>
          <p className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            FightLocker is our custom-built VPN protocol designed to provide
            users with superior performance, reliability, and security. It
            utilizes the extensively scrutinized SSL cryptography library,
            including compliance with the FIPS 140-2 standard. With perfect
            forward secrecy and regular key regeneration, FightLocker ensures
            robust encryption. Additionally, the core library of FightLocker is
            open-source, allowing for transparent evaluation of its security.
          </p>
          <p className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            Explore FightLocker further and gain insights into its technical
            workings through our&nbsp;
            <a
              className="text-pink-500 underline"
              href="https://unblockvpn.io/learn/blog"
              rel="noopener noreferrer"
              target="_blank"
            >
                dev blog
            </a>
           
            
            , where UnblockVPN software developers
            share their expertise.
          </p>

          <h3 className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            2. TrustBox: Data Wipe with Every Reboot
          </h3>
          <p className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            TrustBox, our VPN server technology, enhances user security by
            operating solely on volatile memory (RAM). By avoiding writing data
            to hard drives, all information is wiped upon each power cycle,
            preventing both data persistence and potential intruders. TrustBox
            enhances consistency and reduces vulnerabilities, as every
            UnblockVPN server runs the most up-to-date software simultaneously.
            PwC has independently audited the TrustBox technology, reaffirming
            its reliability.
          </p>
          <p className="max-w-2xl mt-5 text-xl text-zinc-200 sm:text-left sm:text-2xl text-left">
            For an in-depth exploration of TrustBox and its robust user
            protection capabilities, delve into our comprehensive technical
            analysis authored by our certified chief security engineer, who
            designed the system.
          </p>
        </div>
      </div>
    </section>
  );
}

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}
