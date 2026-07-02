import { Link } from 'react-router';
import { Shield } from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, such as when you fill out a contact form, request a proposal, subscribe to our newsletter, or communicate with us by email or phone. This may include your name, email address, phone number, company name, job title, and the content of your messages.

We also collect information automatically when you visit our website, including your IP address, browser type, operating system, referring URLs, device identifiers, and information about your visit such as the pages you view, the links you click, and the time you spend on each page. We collect this information through cookies, web beacons, and similar tracking technologies.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to provide, maintain, and improve our services; respond to your inquiries and fulfill your requests; send you technical notices, updates, security alerts, and administrative messages; send you marketing communications about our services, subject to your opt-out rights; analyze trends and usage patterns to improve our website and services; protect against, investigate, and deter fraudulent, unauthorized, or illegal activity; and comply with legal obligations.`,
  },
  {
    title: '3. Sharing of Information',
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties for their marketing purposes. We may share your information with service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential. We may also disclose your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.`,
  },
  {
    title: '4. Data Retention',
    content: `We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need to use your information, we will take reasonable steps to remove it from our systems and records or take steps to anonymize it so that you can no longer be identified from it.`,
  },
  {
    title: '5. Cookies and Tracking Technologies',
    content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.`,
  },
  {
    title: '6. Data Security',
    content: `We implement appropriate technical and organizational security measures designed to protect your information against unauthorized access, disclosure, alteration, or destruction. These measures include encryption in transit and at rest, access controls, and regular security assessments. However, no security system is impenetrable and we cannot guarantee the security of our systems with absolute certainty.`,
  },
  {
    title: '7. Your Rights',
    content: `Depending on your location, you may have the right to access the personal information we hold about you; correct inaccurate or incomplete information; request deletion of your personal information; object to or restrict our processing of your personal information; request portability of your personal information; and withdraw consent at any time where we rely on consent. To exercise these rights, please contact us at privacy@lumoora.com.`,
  },
  {
    title: '8. Third-Party Links',
    content: `Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of every site you visit.`,
  },
  {
    title: '9. Children\'s Privacy',
    content: `Our services are not directed to children under the age of 16. We do not knowingly collect personally identifiable information from anyone under the age of 16. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without parental consent, we take steps to remove that information.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`,
  },
];

export default function Privacy() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#111111] pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield size={20} className="text-[#F5C400]" />
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="font-[Outfit] text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-white/45 text-lg">Last updated: June 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Intro */}
          <div className="prose-custom mb-12 pb-12 border-b border-black/8">
            <p className="text-[#111111]/65 text-lg leading-relaxed">
              LUMOORA, Inc. ("LUMOORA," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our website.
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-black/6 pb-12 last:border-0">
                <h2 className="font-[Outfit] font-bold text-[#111111] text-xl mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-[#111111]/60 text-base leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-16 bg-[#F7F7F7] rounded-2xl p-8">
            <h3 className="font-[Outfit] font-bold text-[#111111] text-lg mb-2">Contact Us</h3>
            <p className="text-[#111111]/60 text-sm leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact our Data Privacy team:
            </p>
            <div className="space-y-1.5 text-sm text-[#111111]/60">
              <p>Email: <a href="mailto:privacy@lumoora.com" className="text-[#F5C400] hover:underline">privacy@lumoora.com</a></p>
              <p>Address: 340 Madison Avenue, Suite 2100, New York, NY 10017</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
