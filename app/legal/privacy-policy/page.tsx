// Legal.js

import React from "react";
import Link from "next/link";
import s from '@/components/legal.module.css';

const Legal = () => {
  return (
    <div>
      <div className={`${s.legalContainer}`}>
        <div className={`${s.legalPolicyText}`}>
          <h2>Legal Policies</h2>
          
          <ul className={`${s.legalLinks}`}>
            <li><Link href="/legal/terms-of-service">Terms of Service</Link></li>
            <li><Link href="/legal/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/legal/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>

        <div className={`${s.legalPolicyContent}`}>
        <section id="top"></section>
        <h1 className="text-4xl mb-2">Privacy Policy</h1>
        <p className="mb-4">Last updated: July 1, 2023</p>
        <p><strong>INTRODUCTION</strong></p>
        <p className="mb-4">
          This document (“Privacy Policy”) explains the privacy rules applicable to personal data and other information collected or submitted when you access, install, or use UnblockVPN Services and Websites regardless of the device (computer, mobile phone, tablet, etc.) you use.
        </p>
        <p className="mb-4">
          The data controller of your personal data, as described in this Privacy Policy, is UnblockVPN Limited (address: 188 Quay Street, Auckland, New Zealand; email: privacy@unblockvpn.io) (“UnblockVPN”, “we”, “us”, or “our”).
        </p>
        <p className="mb-4">
          The capitalized words used in this Privacy Policy as definitions are defined here or in our General Terms.
        </p>
        <p className="mb-4">
          By visiting our Websites, by submitting your personal data to us, and by accessing, installing, and/or using our Services, you confirm that you have read this Privacy Policy and agree to be bound by this Privacy Policy. If you do not agree with this Privacy Policy or any provisions hereof, please do not use our Services and Websites.
        </p>
        <h2 className="text-xl font-bold mb-4">Product-specific Privacy Notices</h2>
        <p className="mb-4">
          As UnblockVPN products cater to different user needs, they may process different personal data points during their performance. The following links provide further information on:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>UnblockVPN Privacy Notice (additional terms)</li>
        </ul>
        <p className="mb-4">
          Additional information on your personal data may also be indicated in contractual terms, supplemental privacy statements, or notices.
        </p>
        <h2 className="text-xl font-bold mb-4">PROCESSING OF YOUR PERSONAL DATA</h2>
        <p className="mb-4">
          UnblockVPN processes personal data to a limited scope to provide Services, process payments for the Services, and enable the functioning of our Websites and mobile applications. We may process the following categories of personal data:
        </p>
        <h3 className="text-lg font-bold mb-2">Information for creating your Account</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Email address. We ask for your email address as part of your registration. It is necessary for the creation of your UnblockVPN Account, retrieving a lost password, and using the Services.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2">Subscription information</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Subscription data. When you subscribe to our Services we process certain subscription information (e.g., your email address, the subscription plan you have chosen, subscription term, subscription ID, subscription frequency, amount, currency, status, auto-renewal status, information about enabled/disabled features such as multi-factor authentication (MFA), etc.).</li>
        </ul>
        <h3 className="text-lg font-bold mb-2">Payment related information (if using paid Services)</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Payment data. This information is necessary to collect payments for the Services. Our payment processing partners process basic billing information for payment processing and refund requests (e.g., date of purchase, payer’s IP address, postal (ZIP) code, credit card owner's full name and credit card information). We also process some of such billing information ourselves (e.g., date of purchase, credit card owner's full name, part of your credit card number, its expiration date) in cases of recurring payments or when you provide your payment details directly to us.</li>
          <li>Country details. When making a purchase we process information on the user’s country the purchase takes place from. This information is necessary for VAT calculation purposes.</li>
          <li>Information for payment fraud prevention. To prevent fraudulent payments for the Services, your personal data (such as payer's email address and device information) can be verified by our and/or our payment processing partners fraud management tools. A payment transaction that is considered high risk may be rejected by us.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2">Communication data</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Email address. We use your email address to: i) send you important updates and announcements related to your use of the Services and Websites; ii) respond to your requests or inquiries; iii) send you offers, surveys, and other marketing content (you can opt-out of those at any time).</li>
          <li>Customer support inquiries. We keep the information that you provide to our customer support team that was necessary to resolve the query. Depending on what information is necessary, it can consist of, but not limited to: payment information for customer verification processes, your country name, information of your OS, local application logs, etc.</li>
          <li>Communication optimization data. We use various tools to help us optimize our emailing campaigns. These tools may track actions you perform with an email, such as open it or unsubscribe from further communication. We may also be able to see the user device’s operating system (e.g., Windows, Mac, iOS, Android) and country in order to optimize push and email notifications and automatically set the language.</li>
          <li>Chatbot. If you contact us via our chatbot on our Websites, in addition to processing your contact information, we will be able to collect your device information and IP address.</li>
          <li>Live chat widget. If you contact us via live chat widget, in addition to processing your contact information, we will also process your device information (such as type of the operating system and browser) and IP address. This information is necessary for our support to determine the user's country, prevent abuse, see if the user is connected to our servers, and help our support to process queries faster.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2">Information collected on our applications and Websites</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Service usage. We collect information about specific UnblockVPN Services and features you use.</li>
          <li>Access logs. As most websites on the internet, our Websites collect access logs (such as IP address, browser type, operating system) to operate our Services and ensure their secure, reliable, and robust performance. This information is also essential for fighting against DDoS attacks, scanning, and similar hacking attempts.</li>
          <li>Cookies. Cookies, pixels, and other similar technologies are usually small text or image files that are placed on your device when you visit our Websites. Some cookies are essential for our Websites to operate smoothly; others are used to improve Websites’ functionality, analyze aggregated usage statistics to improve Websites’ performance, and for advertising. We also use affiliate cookies to identify the customers referred to our Websites by our partners so that we can grant the referrers their commission. You can check what cookies we use at our Cookie policy.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2">Referrals data</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Information for participating in referral programs. Participation in referral programs maintained by UnblockVPN requires referrers to submit personal data (e.g., full name, e-mail address, phone number, relationship with the referred party) about themselves and a referred party so that UnblockVPN could i) reach out to the referred party; ii) contact referrers with regards to their participation in referral programs and/or provision of rewards. It is the referrer's responsibility to abide by applicable privacy laws when disclosing third parties’ personal data to UnblockVPN, including informing third parties that they are providing referred parties’ personal data to UnblockVPN and how it will be used and processed. Referred parties may unsubscribe from any future communication at any time. If you believe that one of your contacts has provided us with your personal data and you would like it to be removed from our database, please contact us.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2">Promotional games data</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Information for participating in our promotional games (e.g., sweepstakes, giveaways, contests). When you decide to participate in any promotional game that requires additional personal information, you will be explicitly requested to provide it. The personal data we ask you to provide typically includes your full name, e-mail address, phone number, information about the purchased subscription plan. However, you have the right to refuse to provide such information and cease your participation in the promotional game at any time. In certain cases, we also may share the mentioned data with third parties that help us to organize/coordinate such promotional games. Please carefully review the terms and conditions of each promotional game in which you participate as they may contain specific additional information about the processing of your personal data. If the terms and conditions of such promotional games concerning the treatment of your personal data conflict with this Privacy Policy, the terms and conditions of such promotional games shall prevail.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2">Social networks data</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Account data. For the purpose of managing and administering our profiles on social networks (e.g., “Facebook”, “Instagram”, “Twitter”, "LinkedIn"), we may process certain personal data related to your social media accounts. This may include your username, profile picture, and other information you choose to make public on those platforms.</li>
        </ul>
        <h2 className="text-xl font-bold mb-4">LEGAL BASIS FOR PROCESSING</h2>
        <p className="mb-4">
          We process your personal data based on the following legal grounds:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Contractual necessity: We process personal data that is necessary for the performance of a contract with you, such as providing the Services, processing payments, and managing your account.</li>
          <li>Legitimate interests: We process personal data based on our legitimate interests, such as improving and optimizing our Services, conducting research and analysis, ensuring the security of our Services and Websites, and communicating with you about important updates and offers. When processing personal data based on legitimate interests, we always carefully balance our interests against your rights and freedoms.</li>
          <li>Legal obligations: We may process personal data to comply with applicable laws and regulations, including tax and accounting requirements.</li>
          <li>Consent: In some cases, we may rely on your explicit consent to process certain personal data. If we do, we will obtain your consent in accordance with applicable laws and regulations.</li>
        </ul>
        <h2 className="text-xl font-bold mb-4">HOW WE USE YOUR PERSONAL DATA</h2>
        <p className="mb-4">
          We use your personal data for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Providing and improving our Services: We use your personal data to provide and improve our Services, including processing payments, managing your account, and delivering customer support.</li>
          <li>Communicating with you: We use your contact information to communicate with you about your account, respond to your inquiries and requests, and send you important updates and announcements about our Services and Websites. We may also send you marketing content and offers, but you can opt-out of receiving such communications at any time.</li>
          <li>Fraud prevention and security: We use personal data, such as device information and IP address, to prevent fraudulent payments and ensure the security of our Services and Websites. This includes verifying payment transactions and detecting and preventing unauthorized access or use of our Services.</li>
          <li>Research and analysis: We may use personal data for research and analysis purposes, such as analyzing user behavior and preferences, conducting surveys and market research, and improving the effectiveness of our Services and marketing campaigns.</li>
          <li>Legal compliance: We may process personal data to comply with applicable laws and regulations, including tax and accounting requirements.</li>
        </ul>
        <h2 className="text-xl font-bold mb-4">SHARING OF YOUR PERSONAL DATA</h2>
        <p className="mb-4">
          We may share your personal data with the following recipients or categories of recipients:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Service providers: We may share your personal data with third-party service providers who perform services on our behalf, such as payment processors, customer support providers, and IT service providers. These service providers are only authorized to process your personal data as necessary to provide the services to us and are contractually obligated to protect the confidentiality and security of your personal data.</li>
          <li>Business partners: We may share personal data with our business partners, such as affiliate partners, who assist us in marketing our Services and driving customer referrals. These business partners are required to handle your personal data in accordance with applicable privacy laws and regulations.</li>
          <li>Legal requirements: We may disclose personal data if required to do so by law or in response to valid legal requests, such as subpoenas, court orders, or government regulations.</li>
          <li>Protection of rights: We may disclose personal data to protect our rights, privacy, safety, or property, and that of our users, or to enforce our terms and conditions.</li>
          <li>Corporate transactions: In the event of a merger, acquisition, or sale of all or a portion of our assets, personal data may be transferred or disclosed as part of the transaction. We will take appropriate measures to ensure the confidentiality and security of your personal data during such transactions.</li>
          <li>Aggregated and anonymized data: We may share aggregated and anonymized data with third parties for various purposes, including research, analysis, and marketing.</li>
        </ul>
        <h2 className="text-xl font-bold mb-4">INTERNATIONAL DATA TRANSFERS</h2>
        <p className="mb-4">
          We may transfer your personal data to recipients located in countries outside of your own country or the European Economic Area (EEA) that may have different data protection laws. In such cases, we will ensure that appropriate safeguards are in place to protect your personal data, such as implementing standard contractual clauses approved by the European Commission or relying on other lawful mechanisms for international data transfers.
        </p>
        <h2 className="text-xl font-bold mb-4">RETENTION OF YOUR PERSONAL DATA</h2>
        <p className="mb-4">
          We will retain your personal data for as long as necessary to fulfill the purposes for which it was collected and to comply with our legal obligations. The specific retention period will depend on the nature of the personal data and the purposes for which it is processed. After the retention period, we will securely delete or anonymize your personal data.
        </p>
        <h2 className="text-xl font-bold mb-4">YOUR RIGHTS</h2>
        <p className="mb-4">
          Subject to applicable laws, you have certain rights regarding your personal data. These rights may include the right to access, correct, delete, or restrict the processing of your personal data, as well as the right to object to the processing of your personal data or to receive a copy of your personal data in a structured, machine-readable format. To exercise your rights, please contact us using the contact information provided below.
        </p>
        <h2 className="text-xl font-bold mb-4">DATA SECURITY</h2>
        <p className="mb-4">
          We take the security of your personal data seriously and have implemented appropriate technical and organizational measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee the absolute security of your personal data.
        </p>
        <h2 className="text-xl font-bold mb-4">UPDATES TO THIS PRIVACY POLICY</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our privacy practices or legal obligations. We will post the updated Privacy Policy on our Websites and indicate the date of the latest revision. We encourage you to review the Privacy Policy periodically for any updates.
        </p>
        <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
        <p className="mb-4">
          If you have any questions, concerns, or requests regarding this Privacy Policy or the processing of your personal data, please contact us at:
        </p>
        <p className="mb-4">
          Address: 188 Quay Street, Auckland, New Zealand
        </p>
        <p className="mb-4">
          Email: privacy@unblockvpn.io
        </p>
        <p className="mb-4">
          We will respond to your inquiries and requests in accordance with applicable privacy laws.
        </p>
        <p className="mb-4">
          Please note that this Privacy Policy applies to UnblockVPN Services and Websites only. If you access or use third-party websites, products, or services linked to or integrated with UnblockVPN Services, their privacy policies and practices will govern your use of those websites, products, or services. We encourage you to review the privacy policies of such third-party websites, products, or services before providing any personal data.
        </p>
          </div>
        </div>
      </div>
  );
};

export default Legal;
