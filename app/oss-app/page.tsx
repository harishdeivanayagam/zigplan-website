import Footer from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"
import { OssDownloads } from "@/components/shared/oss-downloads"
import { MarketingShell } from "@/components/shared/marketing-shell"
import { BookDemoButton } from "@/components/shared/book-demo-button"
import Link from "next/link"
import type { Metadata } from "next"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Free open source takeoff app (Beta) | Zigplan",
  description:
    "Download Zigplan for Windows and macOS. Free open source construction takeoff and quantity estimation in Beta / Early Access — or use zigplan.com as a hosted back office.",
}

const brandButton = "h-11 rounded-none bg-brand px-8 text-white hover:bg-brand/90"

const appPoints = [
  "PDF and image plan sets on your machine",
  "Lengths, areas, counts, and calibrated scale",
  "Project cost database with vendors",
  "No account. No subscription. MIT licensed.",
]

const hostedPoints = [
  "AI plus estimator review on the jobs you send",
  "Estimating and procurement in one workspace",
  "Marked-up PDFs, quantity sheets, and proposals",
  "Starts at $599/mo — cancel whenever",
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

export default function OssAppPage() {
  return (
    <MarketingShell footer={<Footer />}>
      <Navbar />
      <main className="min-w-0">
        <section className="marketing-rule px-6 py-16 text-center md:px-10 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Open source · Beta / Early Access
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-brand-ink sm:text-[2.15rem] md:text-[clamp(2.35rem,4vw,3.15rem)]">
            Free construction takeoff and quantity estimation
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
            Zigplan now has a free desktop app for measuring plans, counting symbols, and keeping a
            cost database locally. It is currently in Beta / Early Access. Download it for Windows
            and Mac — or keep using the hosted back office at{" "}
            <Link href="/" className="text-brand-ink underline underline-offset-4">
              zigplan.com
            </Link>
            .
          </p>
        </section>

        <section id="download" className="marketing-rule scroll-mt-28">
          <div className="px-6 py-12 md:px-10">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Download
            </p>
            <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-brand-ink">
              Download for your computer
            </h2>
          </div>
          <OssDownloads />
        </section>

        <section className="marketing-rule">
          <div className="edge-grid edge-grid-2 marketing-split">
            <div className="space-y-5 p-6 md:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                This app
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-brand-ink md:text-3xl">
                Run takeoff on your own desk
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600">
                Open a drawing, calibrate scale, take off quantities, and price from your cost
                database. Everything stays on disk. MCP support is planned so agents can work with
                Zigplan projects in a later release.
              </p>
              <ul className="space-y-2.5">
                {appPoints.map((point) => (
                  <FeatureBullet key={point}>{point}</FeatureBullet>
                ))}
              </ul>
              <a
                href="https://github.com/zetahiveco/zigplan-oss"
                className="inline-flex h-11 items-center justify-center border border-[var(--marketing-line)] bg-white/70 px-8 text-sm font-medium text-brand-ink hover:bg-white"
              >
                View source on GitHub
              </a>
            </div>
            <div className="space-y-5 p-6 md:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                zigplan.com
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-brand-ink md:text-3xl">
                Or send plans to a full back office
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600">
                The hosted product is a separate service: AI takeoff, estimator review, estimating,
                and procurement for general contractors. Starts at $599/mo.
              </p>
              <ul className="space-y-2.5">
                {hostedPoints.map((point) => (
                  <FeatureBullet key={point}>{point}</FeatureBullet>
                ))}
              </ul>
              <BookDemoButton size="lg" className={`w-full ${brandButton} sm:w-auto`}>
                Book a demo
              </BookDemoButton>
            </div>
          </div>
        </section>

        <section className="marketing-rule px-6 py-16 text-center md:px-10 md:py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink md:text-4xl">
            Unsigned builds, on purpose
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-neutral-600">
            macOS may ask you to allow Zigplan in Privacy &amp; Security, or to right-click and
            Open. Windows SmartScreen can appear on unsigned installers — choose More info, then
            Run anyway.
          </p>
        </section>
      </main>
    </MarketingShell>
  )
}
