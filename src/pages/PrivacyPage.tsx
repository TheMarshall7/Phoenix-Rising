import { LegalPageLayout } from "../components/LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="Last updated · March 2026"
    >
      <p>
        This website is operated by Maria Amiouni. We respect your privacy and are committed to protecting any personal
        information you share with us when you use this site, book a session, or join programs such as Phoenix Rising.
      </p>
      <p>
        Information you submit through contact forms, booking widgets, or email may be used only to respond to your
        inquiry, deliver services you have requested, and send relevant updates you have opted into.
      </p>
      <p>
        We do not sell your personal data. Third-party tools we use (for example scheduling or payment providers) have
        their own privacy policies governing data they process on our behalf.
      </p>
      <p className="border-l border-sage/30 pl-6 text-cream/90 italic">
        For questions about this policy or your data, contact{" "}
        <a
          href="mailto:mariaamiouni@gmail.com"
          className="font-medium text-sage underline decoration-sage/40 underline-offset-4 transition-colors hover:text-cream"
        >
          mariaamiouni@gmail.com
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
