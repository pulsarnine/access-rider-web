import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import HeaderSimple from "./components/HeaderSimple";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Learn about and Create an Access Rider",
};

// const theme = createTheme({
//    /** Your theme override here */
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      {...mantineHtmlProps}
    >
      <head>

        <title>Access Rider</title> 
      </head>
      <body className="min-h-full flex flex-col">
        <MantineProvider /*theme={theme}*/ defaultColorScheme="dark">{children}</MantineProvider>
      </body>

    </html>
  );
}
