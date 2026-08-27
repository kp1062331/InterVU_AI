import Link from "next/link";
import { ChevronDown } from "@/components/ui/icons";

const faqs = [
  {
    question: "What counts as a practice session?",
    answer:
      "One complete interview from the opening question to the scored report — typically four to eight questions with AI follow-ups. Abandoning a round in the first two minutes does not count against your total.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Yes. Cancel anytime from your account settings. Your plan remains active until the end of your billing cycle with no hidden cancellation fees.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes! The Free plan gives you full scored rounds every month with real hiring rubric feedback, so you can test your readiness with zero risk.",
  },
  {
    question: "How are Teams seats counted?",
    answer:
      "By active candidate or student member in your workspace. You can reassign seats at any time from your cohort dashboard.",
  },
  {
    question: "Do you train AI models on my voice recordings?",
    answer:
      "No. Transcripts and audio streams are processed securely solely to generate your rubric report and personal progress history. You can permanently delete any session.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards and debit cards worldwide through Stripe. Enterprise cohort invoices are also available.",
  },
] as const;

export function PricingFaq() {
  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:gap-16 font-sans">
      <div>
        <h2 className="text-2xl sm:text-3xl font-medium text-[#0B1E3D]">Before you decide</h2>
        <p className="mt-3 text-sm text-slate-600">
          Have questions?{" "}
          <Link
            href="/contact"
            className="text-purple-600 font-semibold underline decoration-purple-500/40 underline-offset-4 hover:text-purple-700"
          >
            Contact our team directly
          </Link>{" "}
          — we respond promptly.
        </p>
      </div>

      <div className="border-t border-slate-200">
        {faqs.map((faq) => (
          <details key={faq.question} className="group border-b border-slate-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-base font-medium text-[#0B1E3D] transition-colors hover:text-purple-600 [&::-webkit-details-marker]:hidden">
              {faq.question}
              <ChevronDown className="size-4 shrink-0 text-purple-600 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="max-w-2xl pb-5 text-sm text-slate-600 leading-relaxed font-normal">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
