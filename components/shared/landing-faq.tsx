import type { ReactNode } from "react"
import { Minus, Plus } from "lucide-react"

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "What is Zigplan?",
    answer:
      "Zigplan is the AI native backoffice for general contractors. We run quantity takeoff, estimating, and procurement so your field and preconstruction teams can stay on the job — not rebuilding spreadsheets at night.",
  },
  {
    question: "What is included in quantity takeoff?",
    answer:
      "Upload a PDF or image plan set and Zigplan organizes every sheet. AI counts symbols, measures lengths, and calculates areas across the full set, in metric or imperial. An estimator reviews the quantities before they land in your bid.",
  },
  {
    question: "How does estimating work?",
    answer:
      "Line items stay tied to the drawings. Apply your cost database or location-based pricing, keep quantities and markups in sync, and export a bid-ready proposal without rebuilding deliverables by hand.",
  },
  {
    question: "Do you support procurement after the estimate?",
    answer:
      "Yes. Quantities carry into buyout — RFQs, vendor comparison, and material tracking live in the same workspace as takeoff and estimating, so the bid you win is the bid you can purchase against.",
  },
  {
    question: "Is this software we run, or a done-for-you desk?",
    answer:
      "Both. Run AI takeoff and estimating in your own workflow, or send scope and drawings and our estimating desk handles the rest. Either way, you get software access plus bid-ready files.",
  },
  {
    question: "How accurate are the numbers?",
    answer:
      "AI does the first pass; experienced estimators review quantities, assemblies, and local pricing before anything reaches you. You can still override labor, equipment, and markup in the spreadsheet we deliver.",
  },
  {
    question: "What does $599/mo include?",
    answer:
      "The starting plan covers takeoff, estimating, and procurement in one workspace, estimator review on the jobs you send, and bid-ready exports (marked-up plans, quantity sheets, and proposals). Book a demo and we will size usage to your bid volume.",
  },
  {
    question: "How fast can we get a package back?",
    answer:
      "Most bid packages turn around in a few days once plans and scope are in. Rush bid dates can be accommodated — tell us the due date when you book a demo.",
  },
]

export default function LandingFaq() {
  return (
    <section id="faq" className="marketing-rule scroll-mt-28">
      <div className="edge-grid edge-grid-2">
        <div className="flex flex-col justify-center px-6 py-16 md:px-10 md:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            FAQ
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-brand-ink md:text-4xl">
            Questions contractors ask us first
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            Takeoff, estimates, procurement, and how Zigplan becomes your back office.
          </p>
        </div>
        <div className="px-6 py-8 md:px-10 md:py-10">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              name="faq"
              className="group/faq border-b border-[var(--marketing-line)] last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="text-base font-medium text-brand-ink transition-colors group-hover/faq:text-neutral-600">
                  {faq.question}
                </span>
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center border border-[var(--marketing-line)] bg-transparent text-brand-ink">
                  <Plus className="size-3 group-open/faq:hidden" />
                  <Minus className="hidden size-3 group-open/faq:block" />
                </span>
              </summary>
              <div className="animate-[faq-open_240ms_ease-out] pb-5 pr-11 text-sm leading-relaxed text-neutral-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
