import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/data/site";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | SP Securities" },
      {
        name: "description",
        content:
          "How SP Securities collects, uses, stores and protects personal information submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy | SP Securities" },
      {
        property: "og:description",
        content:
          "Our commitments on personal data collected through enquiry and job application forms.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="21 September 2026"
      sections={[
        {
          heading: "1. Introduction",
          body: [
            `${company.name} ("we", "us", "our") respects your privacy. This policy explains what information we collect through ${company.website}, why we collect it and how we protect it.`,
          ],
        },
        {
          heading: "2. Information we collect",
          body: [
            "Contact details you submit voluntarily through our enquiry or career forms — name, company, phone number, email address, city and the details of your requirement or work experience.",
            "Basic technical information such as browser type, device type and pages visited, collected through analytics cookies to improve the website.",
          ],
        },
        {
          heading: "3. How we use your information",
          body: [
            "To respond to service enquiries, prepare a deployment plan and schedule site visits.",
            "To process job applications and contact shortlisted candidates.",
            "To improve our website, services and customer communication. We do not sell or rent personal data to third parties.",
          ],
        },
        {
          heading: "4. Storage and security",
          body: [
            "Form submissions are stored on Google Firebase infrastructure with access limited to authorised SP Securities personnel. We apply reasonable technical and organisational safeguards against unauthorised access, loss or misuse.",
          ],
        },
        {
          heading: "5. Data retention",
          body: [
            "Enquiry data is retained for up to 24 months. Job applications are retained for up to 12 months unless you ask us to delete them earlier.",
          ],
        },
        {
          heading: "6. Your rights",
          body: [
            `You may request access to, correction of, or deletion of your personal data by writing to ${company.email}. We respond to verified requests within 30 days.`,
          ],
        },
        {
          heading: "7. Contact",
          body: [
            `${company.name}, ${company.addressLine}, ${company.city} ${company.pincode}, ${company.state}, India. Email: ${company.email} · Phone: ${company.phone}`,
          ],
        },
      ]}
    />
  );
}
