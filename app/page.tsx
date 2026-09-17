import Footer from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"
import LandingFaq from "@/components/shared/landing-faq"
import Link from "next/link"
import { ArrowRight, Calculator, Check, Package, Ruler } from "lucide-react"
import { BookDemoButton } from "@/components/shared/book-demo-button"
import { MarketingShell } from "@/components/shared/marketing-shell"

const brandButton = "h-11 rounded-none bg-brand px-8 text-white hover:bg-brand/90"
const ghostButton =
  "rounded-none border-[var(--marketing-line)] bg-white/70 px-8 text-brand-ink backdrop-blur-md hover:bg-white"
const edgeCell = "p-6 md:p-8 lg:p-10"

const offerings = [
  {
    id: "takeoff",
    icon: Ruler,
    title: "Quantity Takeoff",
    body: "Upload a PDF or image plan set. AI counts symbols, measures lengths, and calculates areas across every sheet — metric or imperial.",
    tags: ["PDF & image plans", "Symbol counts", "Length & area", "Estimator review"],
  },
  {
    id: "estimation",
    icon: Calculator,
    title: "Estimation",
    body: "Apply your cost database or location-based pricing. Line items stay tied to the drawings so quantities and markups never drift.",
    tags: ["Your cost database", "Zip-level pricing", "Synced markups", "Bid-ready proposals"],
  },
  {
    id: "procurement",
    icon: Package,
    title: "Procurement",
    body: "Carry quantities into buyout. Run RFQs, compare vendors, and track materials from the same workspace that won the bid.",
    tags: ["RFQs", "Bid comparison", "Material tracking", "One workspace"],
  },
]

const takeoffPoints = [
  "PDF and image plan sets, organized sheet by sheet",
  "Symbol counts, length, and area across the full set",
  "Metric and imperial units",
  "Estimator review before quantities hit your bid",
]

const estimatePoints = [
  "Your cost database or location-based averages",
  "Line items linked to markups on the drawing",
  "Quantities and pricing stay in sync",
  "Marked-up PDFs, takeoff sheets, and client-ready proposals",
]

const procurementPoints = [
  "Quantities flow into RFQs without re-keying",
  "Compare vendor bids against the estimate",
  "Track buyout from award through delivery",
  "One back office from takeoff to purchase",
]

const steps = [
  {
    step: "01",
    title: "Send your plans",
    body: "Upload drawings and scope, or email the invitation to bid. Tell us the bid date and the trades you need covered.",
  },
  {
    step: "02",
    title: "AI plus estimators work",
    body: "Zigplan runs the takeoff. Reviewers check quantities, assemblies, and local pricing so you are not bidding off a first-pass model.",
  },
  {
    step: "03",
    title: "Bid with a full back office",
    body: "Get a PDF takeoff, line-item spreadsheet, and software access — then carry the same numbers into procurement when you win.",
  },
]

const busyPoints = [
  "Takeoff happens on nights and weekends, after the jobsite is closed.",
  "Bids get passed because there is no time to quantify the set.",
  "Pricing lives in a spreadsheet that is already out of date.",
  "Buyout starts from scratch even though the estimate already had the quantities.",
]

const zigplanPoints = [
  "Plans go to an AI native desk that treats takeoff as the first step, not a side job.",
  "You keep bidding the work you can actually win.",
  "Costs stay tied to the drawings, with local pricing and your markups.",
  "Procurement inherits the takeoff, so award and buyout are the same numbers.",
]

const planFeatures = [
  "Quantity takeoff on PDF and image plans",
  "Estimating workspace with your pricing",
  "Procurement, RFQs, and bid comparison",
  "Estimator review on jobs you send",
  "Marked-up plans, quantity sheets, and proposals",
  "Software access for your preconstruction team",
]

function FeatureBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-neutral-700">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-brand/10 text-brand">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      {children}
    </li>
  )
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body?: string
}) {
  return (
    <div className="mx-auto max-w-2xl space-y-3 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-brand-ink md:text-4xl">{title}</h2>
      {body && <p className="text-neutral-600">{body}</p>}
    </div>
  )
}

function MediaFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full min-h-[280px] w-full overflow-hidden bg-brand-ink md:min-h-[420px]">
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <MarketingShell footer={<Footer />}>
      <Navbar />
      <main className="min-w-0">
        <section className="marketing-rule relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover grayscale"
              poster="/media/high-rise.jpg"
            >
              <source src="/media/excavation.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-white/70" />
            <div className="absolute inset-0 bg-linear-to-b from-white/40 via-transparent to-[#f6f6f6]" />
          </div>

          <div className="relative z-10 flex min-h-[calc(100svh-var(--marketing-header-h,7rem))] w-full flex-col items-center justify-center px-6 py-28 text-center md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              For general contractors
            </p>
            <h1 className="mt-5 max-w-3xl text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-brand-ink sm:text-[2.15rem] md:text-[clamp(2.35rem,4vw,3.15rem)]">
              AI Native Backoffice for General Contractors
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
              Quantity takeoff, estimating, and procurement in one desk. Send the plans — Zigplan
              runs the back office so your team stays on the job, not the spreadsheet.
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
              <BookDemoButton size="lg" className={`w-full ${brandButton} sm:w-auto`}>
                Book a demo
              </BookDemoButton>
              <Link
                href="/auth/login"
                className={`inline-flex h-11 w-full items-center justify-center border px-8 text-sm font-medium ${ghostButton} sm:w-auto`}
              >
                Login
              </Link>
            </div>
            <p className="mt-5 text-sm text-neutral-500">
              Starts at $599/mo. Cancel whenever.{" "}
              <Link href="/oss-app" className="text-brand-ink underline underline-offset-4 hover:text-brand">
                or download free opensource app here
              </Link>
              <span className="text-neutral-400"> — Beta / Early Access</span>
            </p>
          </div>
        </section>

        <section id="offerings" className="marketing-rule scroll-mt-28">
          <div className="px-6 py-16 md:px-10 md:py-20">
            <SectionHeading
              eyebrow="What we offer"
              title="Takeoff. Estimate. Procure."
              body="The three jobs that eat preconstruction — run as one AI native back office instead of three disconnected tools."
            />
          </div>
          <div className="edge-grid edge-grid-3 marketing-split">
            {offerings.map((offering) => (
              <article
                key={offering.id}
                className={`${edgeCell} flex scroll-mt-28 flex-col gap-4 md:row-span-3 md:grid md:grid-rows-subgrid`}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-[var(--marketing-line)] bg-white text-brand-ink">
                    <offering.icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-base font-semibold text-brand-ink">{offering.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">{offering.body}</p>
                <div className="flex flex-wrap content-start gap-1.5 border-t border-[var(--marketing-line)] pt-4">
                  {offering.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[var(--marketing-line)] bg-white/70 px-1.5 py-0.5 font-mono text-[10px] text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="takeoff" className="marketing-rule scroll-mt-28">
          <div className="edge-grid edge-grid-2">
            <div className={`${edgeCell} flex flex-col justify-center space-y-5`}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Quantity Takeoff
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-brand-ink md:text-4xl">
                From plans to quantities — without hunting every sheet
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-neutral-600">
                Upload a PDF or image plan set and Zigplan organizes every sheet. AI counts symbols,
                measures lengths, and calculates areas across the full set. Ask in plain language
                for room dimensions or spec answers instead of paging through drawings.
              </p>
              <ul className="space-y-2.5">
                {takeoffPoints.map((point) => (
                  <FeatureBullet key={point}>{point}</FeatureBullet>
                ))}
              </ul>
            </div>
            <div className="min-h-0 min-w-0 w-full self-stretch overflow-hidden">
              <MediaFrame>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                >
                  <source src="/media/takeoff.mp4" type="video/mp4" />
                </video>
              </MediaFrame>
            </div>
          </div>
        </section>

        <section id="estimation" className="marketing-rule scroll-mt-28">
          <div className="edge-grid edge-grid-2">
            <div className="order-2 min-h-0 min-w-0 w-full self-stretch overflow-hidden md:order-1">
              <MediaFrame>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                >
                  <source src="/media/estimation.mp4" type="video/mp4" />
                </video>
              </MediaFrame>
            </div>
            <div className={`${edgeCell} order-1 flex flex-col justify-center space-y-5 md:order-2`}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Estimation
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-brand-ink md:text-4xl">
                Decision-ready numbers, not a weekend spreadsheet
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-neutral-600">
                Most contractors lose work because estimating happens after hours. Zigplan prices
                from your database or local costs, keeps every line item tied to the drawing, and
                exports a proposal you can stand behind — so you stop passing on bids you could win.
              </p>
              <ul className="space-y-2.5">
                {estimatePoints.map((point) => (
                  <FeatureBullet key={point}>{point}</FeatureBullet>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="procurement" className="marketing-rule scroll-mt-28">
          <div className="edge-grid edge-grid-2">
            <div className={`${edgeCell} flex flex-col justify-center space-y-5`}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Procurement
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-brand-ink md:text-4xl">
                Buyout that starts from the takeoff you already have
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-neutral-600">
                Winning the bid is half the job. Zigplan carries quantities into procurement so RFQs,
                vendor comparison, and material tracking sit next to the estimate — not in a separate
                inbox of screenshots.
              </p>
              <ul className="space-y-2.5">
                {procurementPoints.map((point) => (
                  <FeatureBullet key={point}>{point}</FeatureBullet>
                ))}
              </ul>
            </div>
            <div className="min-h-0 min-w-0 w-full self-stretch overflow-hidden">
              <MediaFrame>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                >
                  <source src="/media/procurement.mp4" type="video/mp4" />
                </video>
              </MediaFrame>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="marketing-rule scroll-mt-28">
          <div className="px-6 py-16 md:px-10 md:py-20">
            <SectionHeading
              eyebrow="How it works"
              title="Send plans. Get a back office."
              body="You stay on the deal. Zigplan takes the takeoff, the estimate, and the buyout trail."
            />
          </div>
          <div className="edge-grid edge-grid-3 marketing-split">
            {steps.map((item) => (
              <div key={item.step} className={`${edgeCell} space-y-3`}>
                <p className="font-mono text-xs text-neutral-400">{item.step}</p>
                <h3 className="text-xl font-semibold text-brand-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="marketing-rule">
          <div className="px-6 py-16 md:px-10 md:py-20">
            <SectionHeading
              eyebrow="Why teams switch"
              title="The enemy is not estimating. It is time."
              body="Busy GCs supervise jobs, make deliveries, and sit in meetings. The only hours left for takeoff are nights and weekends."
            />
          </div>
          <div className="edge-grid edge-grid-2 marketing-split">
            <div className={`${edgeCell} space-y-4`}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Without a back office
              </p>
              <h3 className="text-xl font-semibold text-brand-ink">Last night&apos;s kitchen table</h3>
              <ul className="space-y-3">
                {busyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-neutral-600">
                    <span className="mt-2 h-1 w-3 shrink-0 bg-neutral-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${edgeCell} space-y-4`}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Zigplan</p>
              <h3 className="text-xl font-semibold text-brand-ink">Today&apos;s bid desk</h3>
              <ul className="space-y-3">
                {zigplanPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span className="mt-2 h-1 w-3 shrink-0 bg-brand" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="pricing" className="marketing-rule scroll-mt-28 px-6 py-16 md:px-10 md:py-20">
          <SectionHeading
            eyebrow="Pricing"
            title="Starts at $599/mo"
            body="One back office for takeoff, estimating, and procurement. Book a demo and we will size it to how your team bids."
          />
          <div className="mx-auto mt-10 max-w-xl">
            <div className="relative flex flex-col border border-(--marketing-line) bg-white">
              <span className="absolute right-0 top-0 bg-brand px-3 py-1 text-[11px] font-semibold text-white">
                Starting plan
              </span>
              <div className="border-b border-(--marketing-line) px-8 py-8">
                <p className="text-sm font-medium text-neutral-500">Zigplan</p>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-brand-ink">
                  $599<span className="text-2xl font-medium text-neutral-500">/mo</span>
                </p>
                <p className="mt-3 text-sm text-neutral-600">
                  AI native takeoff, estimating, and procurement for contractor teams
                </p>
              </div>
              <ul className="grow space-y-3 px-8 py-7">
                {planFeatures.map((feature) => (
                  <FeatureBullet key={feature}>{feature}</FeatureBullet>
                ))}
              </ul>
              <div className="px-8 pb-8">
                <BookDemoButton size="lg" className={`w-full ${brandButton}`}>
                  Book a demo
                </BookDemoButton>
              </div>
            </div>
          </div>
        </section>

        <LandingFaq />

        <section className="marketing-rule px-6 py-16 text-center md:px-10 md:py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink md:text-4xl">
            Put a back office behind every bid
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-neutral-600">
            Book a 30-minute walkthrough. See takeoff, estimates, and procurement on the plans you
            actually bid.
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <BookDemoButton size="lg" className={`w-full ${brandButton} sm:w-auto`}>
              Book a demo <ArrowRight className="h-4 w-4" />
            </BookDemoButton>
            <Link
              href="/auth/login"
              className="inline-flex h-11 w-full items-center justify-center rounded-none border border-[var(--marketing-line)] bg-transparent px-8 text-sm font-medium text-brand-ink sm:w-auto"
            >
              Login
            </Link>
          </div>
        </section>
      </main>
    </MarketingShell>
  )
}
