import { Link } from 'react-router';
import { FileText } from 'lucide-react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using the LUMOORA website and services, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use our services. If you disagree with any part of these terms, you may not access our services.`,
  },
  {
    title: '2. Services Description',
    content: `LUMOORA provides digital services including website development, mobile application development, UI/UX design, brand identity, software development, AI solutions, and cloud consulting. The specific services, deliverables, timelines, and fees for each engagement are governed by separate Statement of Work (SOW) or project agreement documents executed between LUMOORA and the client.`,
  },
  {
    title: '3. Intellectual Property',
    content: `Upon full payment of all fees, LUMOORA assigns to the client all intellectual property rights in the final deliverables created specifically for the client under a project agreement, excluding: (a) LUMOORA's pre-existing intellectual property; (b) third-party tools, frameworks, and libraries; (c) general know-how and methodologies. LUMOORA retains the right to display the work in its portfolio unless the client requests otherwise in writing.`,
  },
  {
    title: '4. Payment Terms',
    content: `Unless otherwise specified in a project agreement, payment terms are as follows: 50% of the total project fee is due upon contract execution; the remaining 50% is due upon project completion and before final delivery. For retainer engagements, fees are due at the beginning of each month. All invoices are due within 14 days of receipt. Late payments accrue interest at 1.5% per month.`,
  },
  {
    title: '5. Confidentiality',
    content: `Each party agrees to keep confidential all proprietary and confidential information of the other party and to not disclose such information to any third party without the prior written consent of the disclosing party. This obligation survives termination of any agreement. LUMOORA will implement reasonable security measures to protect client confidential information.`,
  },
  {
    title: '6. Limitation of Liability',
    content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LUMOORA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES. LUMOORA'S TOTAL LIABILITY FOR ANY CLAIM RELATED TO OUR SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY THE CLIENT IN THE SIX MONTHS PRECEDING THE CLAIM.`,
  },
  {
    title: '7. Warranties and Representations',
    content: `LUMOORA warrants that: (a) it has the right to enter into agreements with clients; (b) its services will be performed in a professional and workmanlike manner; (c) the deliverables will not knowingly infringe any third-party intellectual property rights. LUMOORA does not warrant that the services will be error-free or that defects will be corrected, beyond the support periods specified in project agreements.`,
  },
  {
    title: '8. Termination',
    content: `Either party may terminate a project agreement with 30 days written notice. In the event of termination, the client shall pay LUMOORA for all services rendered through the termination date, plus reasonable costs incurred in connection with the termination. If the client terminates without cause, cancellation fees may apply as specified in the project agreement.`,
  },
  {
    title: '9. Dispute Resolution',
    content: `Any dispute, claim, or controversy arising out of or relating to these Terms or services shall first be addressed through good-faith negotiation. If negotiation fails, the parties agree to submit to mediation before pursuing litigation. Any legal proceedings shall be conducted in the courts of the State of New York, County of New York, and each party consents to personal jurisdiction in those courts.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. This agreement is subject to applicable federal law where relevant.`,
  },
  {
    title: '11. Changes to Terms',
    content: `We reserve the right to modify these Terms at any time. We will notify users of material changes by updating the "Last Updated" date and, for significant changes, by providing prominent notice on our website or via email. Continued use of our services after such changes constitutes acceptance of the new Terms.`,
  },
];

export default function Terms() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#111111] pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText size={20} className="text-[#F5C400]" />
            <span className="text-[#F5C400] text-xs font-semibold tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="font-[Outfit] text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">Terms & Conditions</h1>
          <p className="text-white/45 text-lg">Last updated: June 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 pb-12 border-b border-black/8">
            <p className="text-[#111111]/65 text-lg leading-relaxed">
              These Terms and Conditions ("Terms") govern your use of the LUMOORA website and any services provided by LUMOORA, Inc. ("LUMOORA," "we," "us," or "our"). Please read these Terms carefully before using our services. These Terms constitute a legally binding agreement between you and LUMOORA.
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

          <div className="mt-16 bg-[#F7F7F7] rounded-2xl p-8">
            <h3 className="font-[Outfit] font-bold text-[#111111] text-lg mb-2">Questions About These Terms?</h3>
            <p className="text-[#111111]/60 text-sm leading-relaxed mb-4">
              If you have questions about these Terms and Conditions, please contact our legal team:
            </p>
            <div className="space-y-1.5 text-sm text-[#111111]/60">
              <p>Email: <a href="mailto:legal@lumoora.com" className="text-[#F5C400] hover:underline">legal@lumoora.com</a></p>
              <p>Address: 340 Madison Avenue, Suite 2100, New York, NY 10017</p>
              <p className="mt-3 text-xs text-[#111111]/40">
                Also see our <Link to="/privacy-policy" className="text-[#F5C400] hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
