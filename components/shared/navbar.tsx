"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Calculator, Lock, Menu, Package, Ruler, X } from "lucide-react"
import { BookDemoButton } from "@/components/shared/book-demo-button"
import { OssAppBanner } from "@/components/shared/oss-app-banner"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const solutionLinks = [
  {
    href: "/#takeoff",
    label: "Quantity Takeoff",
    description: "Counts, lengths, and areas from PDF or image plans.",
    icon: Ruler,
  },
  {
    href: "/#estimation",
    label: "Estimation",
    description: "Price from your database with line items tied to drawings.",
    icon: Calculator,
  },
  {
    href: "/#procurement",
    label: "Procurement",
    description: "Carry quantities into RFQs, vendor comparison, and buyout.",
    icon: Package,
  },
]

const linkClass =
  "px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-brand-ink"

export default function Navbar() {
  const [show, setShow] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`marketing-nav marketing-rule transition-colors duration-300 ${
          scrolled ? "bg-white/70 backdrop-blur-xl" : "bg-white/50 backdrop-blur-lg"
        }`}
      >
        <OssAppBanner />
        <div className="flex h-18 items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-6">
            <Link href="/" className="inline-flex shrink-0">
              <Image
                src="/logo-full.svg"
                alt="Zigplan"
                height={36}
                width={110}
                className="h-8 w-auto md:h-9"
                priority
              />
            </Link>
            <div className="hidden items-center md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`${linkClass} h-auto rounded-none bg-transparent hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent`}
                    >
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-1">
                      <ul className="grid w-[22rem] gap-0.5">
                        {solutionLinks.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink
                              href={item.href}
                              className="flex items-start gap-3 rounded-none p-3 hover:bg-neutral-100 focus:bg-neutral-100"
                              render={<Link href={item.href} />}
                            >
                              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--marketing-line)] bg-white text-brand-ink">
                                <item.icon className="h-4 w-4" />
                              </span>
                              <span className="flex min-w-0 flex-col gap-0.5">
                                <span className="text-sm font-medium text-brand-ink">
                                  {item.label}
                                </span>
                                <span className="text-xs leading-relaxed text-neutral-500">
                                  {item.description}
                                </span>
                              </span>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link href="/#pricing" className={linkClass}>
                Pricing
              </Link>
              <Link href="/oss-app" className={linkClass}>
                Open source
              </Link>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/auth/login"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-brand-ink"
            >
              <Lock className="h-4 w-4" />
              Login
            </Link>
            <BookDemoButton className="rounded-none bg-brand px-5 text-white hover:bg-brand/90">
              Book a demo
            </BookDemoButton>
          </div>

          <button
            className="mt-1 block text-neutral-700 md:hidden"
            onClick={() => setShow(!show)}
            aria-label="Toggle menu"
          >
            {show ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {show && (
          <div className="absolute inset-x-0 top-full z-30 border-b border-neutral-200 bg-white/95 py-5 shadow-lg backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-1 px-6">
              <p className="pt-1 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Solutions
              </p>
              {solutionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 font-medium text-brand-ink"
                  onClick={() => setShow(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#pricing"
                className="py-2 font-medium text-brand-ink"
                onClick={() => setShow(false)}
              >
                Pricing
              </Link>
              <Link
                href="/oss-app"
                className="py-2 font-medium text-brand-ink"
                onClick={() => setShow(false)}
              >
                Open source
              </Link>
              <Link
                href="/auth/login"
                className="inline-flex items-center gap-1.5 py-2 font-medium"
                onClick={() => setShow(false)}
              >
                <Lock className="h-4 w-4" />
                Login
              </Link>
              <BookDemoButton
                className="mt-2 w-full rounded-none bg-brand text-white hover:bg-brand/90"
                onClick={() => setShow(false)}
              >
                Book a demo
              </BookDemoButton>
            </div>
          </div>
        )}
      </nav>
      <div className="h-(--marketing-header-h) w-full shrink-0" aria-hidden />
    </>
  )
}
