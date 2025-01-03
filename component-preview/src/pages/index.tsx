import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20`}
    >
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <div className="flex items-center gap-4">
          <Image
            src="/geist-logo.svg"
            alt="Geist Logo"
            width={32}
            height={32}
          />
          <h1 className="text-3xl font-bold">Geist Logo</h1>
        </div>
        <div>
          <Link href="/docs">View components</Link>
        </div>
      </main>
    </div>
  );
}
