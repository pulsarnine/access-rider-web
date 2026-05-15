import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import HeaderSimple from "./components/HeaderSimple"; 
import {geistSans, geistMono, openSans, courierPrime, comicRelief, openDyslexic } from './fonts';
import siteFont from "./components/FontDropdown";

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
      className={`${courierPrime.variable}  h-full antialiased`}
      {...mantineHtmlProps}
    >
      <head>
        <title>Access Rider</title> 
      </head>
      <body className={`min-h-full flex flex-col ${openSans.className}`}>
        <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
        {/* <MantineProvider theme={customTheme} defaultColorScheme="dark">{children}</MantineProvider> */}
      </body>

    </html>
  );
}
