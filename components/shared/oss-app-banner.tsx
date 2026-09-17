import Link from "next/link"

export function OssAppBanner() {
  return (
    <Link
      href="/oss-app"
      className="flex min-h-10 items-center justify-center bg-brand-ink px-4 py-2 text-center text-xs font-medium text-white transition-colors hover:bg-black sm:text-sm"
    >
      <span className="sm:hidden">
        Free open source takeoff app — Beta
        <span className="ml-2 underline underline-offset-4">Download</span>
      </span>
      <span className="hidden sm:inline">
        Zigplan now has a free open source takeoff app (Beta / Early Access) — download for Windows
        and Mac
        <span className="ml-2 underline underline-offset-4">Get the app</span>
      </span>
    </Link>
  )
}
