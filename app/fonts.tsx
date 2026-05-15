import { Geist, Geist_Mono, Open_Sans, Courier_Prime, Comic_Relief } from "next/font/google";
import localFont from 'next/font/local'
import type { AppProps } from 'next/app'

//nextjs default 
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

//nextjs default
export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// access-rider-web default
export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
})

//monospace option
export const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  weight: "400",
  subsets: ["latin"],
})

//comic relief 
export const comicRelief = Comic_Relief({
  variable: "--font-comic-relief",
  weight: "400",
  subsets: ["latin"]
})

//open dyslexic
export const openDyslexic = localFont({
  src: '../public/OpenDyslexic-Regular.woff2',
})

