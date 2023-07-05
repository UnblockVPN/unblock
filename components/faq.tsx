'use client';
import React from "react";
import Container from '@/components/ui/Hero/Container';
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="mx-auto max-w-screen-sm p-2">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex text-black items-center justify-between w-full px-4 py-4 text-lg text-left rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-black">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-left px-4 pt-4 pb-2 text-black">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Can't reset password?",
    answer: "Go to login page, click on Forgot your password? and follow the instructions.",
  },
  {
    question: "Can't remember login details?",
    answer: "Go to login page, click on Forgot your password? and follow the instructions.",
  },
  {
    question: "Facebook login help? ",
    answer:
      "Try logging back into facebook, then login to UnblockVPN",
  },
  {
    question: "Payment methods ",
    answer:
      "All payment methods supported by stripe https://stripe.com/en-gb-us/payments/features",
  },
];

export default Faq;