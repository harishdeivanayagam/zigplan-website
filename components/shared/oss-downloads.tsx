"use client"

import { useEffect, useMemo, useState, type ReactNode } from "react"

const GITHUB_REPO = "zetahiveco/zigplan-oss"
const SOURCE_URL = `https://github.com/${GITHUB_REPO}`

type PlatformId = "windows" | "mac"

type Platform = {
  id: PlatformId
  label: string
  detail: string
}

const platforms: Record<PlatformId, Platform> = {
  windows: {
    id: "windows",
    label: "Windows",
    detail: "Installer for Windows 10 and 11",
  },
  mac: {
    id: "mac",
    label: "macOS",
    detail: "Universal DMG for Intel and Apple silicon",
  },
}

type GithubAsset = {
  name: string
  browser_download_url: string
}

function MacIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
    </svg>
  )
}

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M3 5.46 10.96 4.4v7.24H3zm8.96-1.2L21 3v8.64h-9.04zM3 12.8h7.96v7.24L3 18.98zm8.96.04H21V21l-9.04-1.26z" />
    </svg>
  )
}

const platformIcons: Record<PlatformId, (props: { className?: string }) => ReactNode> = {
  mac: MacIcon,
  windows: WindowsIcon,
}

function detectPlatform(): PlatformId {
  if (typeof navigator === "undefined") return "windows"
  const ua = navigator.userAgent
  if (/Mac OS X|Macintosh/i.test(ua)) return "mac"
  return "windows"
}

function pickAsset(assets: GithubAsset[], platform: PlatformId): GithubAsset | undefined {
  if (platform === "windows") {
    return (
      assets.find((asset) => /win.*setup\.exe$/i.test(asset.name)) ??
      assets.find((asset) => /Zigplan-Setup\.exe$/i.test(asset.name)) ??
      assets.find((asset) => /\.exe$/i.test(asset.name) && !/uninstaller/i.test(asset.name))
    )
  }
  // Prefer Apple silicon DMG when present, then Intel, then any DMG.
  return (
    assets.find((asset) => /mac-arm64\.dmg$/i.test(asset.name)) ??
    assets.find((asset) => /mac-x64\.dmg$/i.test(asset.name)) ??
    assets.find((asset) => /mac-universal\.dmg$/i.test(asset.name)) ??
    assets.find((asset) => /\.dmg$/i.test(asset.name))
  )
}

export function OssDownloads() {
  const [detected, setDetected] = useState<PlatformId>("windows")
  const [assets, setAssets] = useState<GithubAsset[]>([])
  const [version, setVersion] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setDetected(detectPlatform())

    void fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`)
      .then(async (response) => {
        if (!response.ok) return
        const data = (await response.json()) as {
          tag_name?: string
          assets?: GithubAsset[]
        }
        setVersion(data.tag_name ?? null)
        setAssets(data.assets ?? [])
      })
      .catch(() => {
        setAssets([])
      })
      .finally(() => setLoaded(true))
  }, [])

  const downloads = useMemo(() => {
    return {
      windows: pickAsset(assets, "windows"),
      mac: pickAsset(assets, "mac"),
    }
  }, [assets])

  const other: PlatformId = detected === "mac" ? "windows" : "mac"
  const ordered = [platforms[detected], platforms[other]]

  return (
    <div>
      {version && (
        <p className="mb-6 text-center text-sm text-neutral-500">
          Latest release {version}
        </p>
      )}
      <div className="edge-grid edge-grid-2 marketing-split">
        {ordered.map((platform, index) => {
          const Icon = platformIcons[platform.id]
          const isDefault = index === 0
          const asset = downloads[platform.id]
          const ready = loaded && Boolean(asset)

          return (
            <article
              key={platform.id}
              className="flex flex-col gap-5 p-6 md:p-8 lg:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center border border-[var(--marketing-line)] bg-white text-brand-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-base font-semibold text-brand-ink">{platform.label}</h2>
                  <p className="text-xs text-neutral-500">{platform.detail}</p>
                </div>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
                {isDefault ? "Recommended for this device" : `Force download for ${platform.label}`}
              </p>
              {ready && asset ? (
                <a
                  href={asset.browser_download_url}
                  download={asset.name}
                  className={`inline-flex h-11 items-center justify-center gap-2 px-6 text-sm font-medium ${
                    isDefault
                      ? "bg-brand text-white hover:bg-brand/90"
                      : "border border-[var(--marketing-line)] bg-white/70 text-brand-ink hover:bg-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {isDefault
                    ? `Download for ${platform.label}`
                    : `Download ${platform.label} instead`}
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className={`inline-flex h-11 items-center justify-center gap-2 px-6 text-sm font-medium opacity-50 ${
                    isDefault
                      ? "bg-brand text-white"
                      : "border border-[var(--marketing-line)] bg-white/70 text-brand-ink"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {!loaded ? "Checking latest build" : "Build publishing soon"}
                </button>
              )}
            </article>
          )
        })}
      </div>
      <p className="px-6 py-8 text-center text-sm text-neutral-500 md:px-10">
        Prefer to build from source? Browse the{" "}
        <a href={SOURCE_URL} className="text-brand-ink underline underline-offset-4">
          GitHub repository
        </a>
        .
      </p>
    </div>
  )
}
