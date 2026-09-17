import Image from "next/image"
import Link from "next/link"
import { BookDemoButton } from "@/components/shared/book-demo-button"

const productLinks = [
  { href: "/#takeoff", label: "Quantity Takeoff" },
  { href: "/#estimation", label: "Estimation" },
  { href: "/#procurement", label: "Procurement" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/oss-app", label: "Open source app" },
]

const companyLinks = [
  { href: "/#faq", label: "FAQ" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
]

const linkClass = "text-sm text-white/60 transition hover:text-white"

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-brand-ink text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 15% 0%, rgba(210,210,210,0.14), transparent 55%), radial-gradient(ellipse 60% 40% at 90% 100%, rgba(255,255,255,0.08), transparent 50%)",
        }}
      />
      <div className="relative w-full px-6 py-14 md:px-10 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm space-y-4">
            <Link href="/" className="inline-flex">
              <Image
                src="/logo-full-white.svg"
                alt="Zigplan"
                height={56}
                width={170}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              AI native backoffice for general contractors. Quantity takeoff, estimating, and
              procurement — so your team stays on the job, not the spreadsheet.
            </p>
            <BookDemoButton className="rounded-none bg-white px-4 py-2 text-sm font-medium text-brand-ink hover:bg-white/90">
              Book a demo
            </BookDemoButton>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white">Product</p>
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white">Company</p>
              {companyLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white">Account</p>
              <Link href="/auth/login" className={linkClass}>
                Login
              </Link>
              <BookDemoButton
                variant="ghost"
                className="h-auto justify-start rounded-none px-0 py-0 text-sm font-normal text-white/60 hover:bg-transparent hover:text-white"
              >
                Book a demo
              </BookDemoButton>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-sm text-white/45">© 2026 Zigplan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
