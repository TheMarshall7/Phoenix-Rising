import { LegalPageLayout } from "../components/LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms of Service"
      updated="Last updated · March 2026"
    >
      <p>
        By using this website and any services offered through it, you agree to these terms. Content on this site is
        for general information and inspiration; it is not a substitute for professional medical, mental health, or
        legal advice.
      </p>
      <p>
        Program fees, cancellations, and refunds for mentorship, pilgrimages, circles, or Phoenix Rising are as stated
        at the time of purchase or in the confirmation you receive from us or our payment partners.
      </p>
      <p>
        We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of
        the revised terms.
      </p>
      <p className="border-l border-sage/30 pl-6 text-cream/90 italic">
        Questions?{" "}
        <a
          href="mailto:mariaamiouni@gmail.com"
          className="font-medium text-sage underline decoration-sage/40 underline-offset-4 transition-colors hover:text-cream"
        >
          mariaamiouni@gmail.com
        </a>
      </p>
    </LegalPageLayout>
  );
}
