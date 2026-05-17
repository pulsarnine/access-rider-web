import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import HeaderSimple from "./components/HeaderSimple";
import { Fonts } from './components/fonts';
import siteFont from "./components/FontDropdown";
import { SetFontProvider } from "./components/SetFontProvider";

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
      className={`${Fonts.courierPrime.variable}  h-full antialiased`}
      {...mantineHtmlProps}
    >
      <head>
        <title>Access Rider</title>
      </head>

      <body className={`min-h-full flex flex-col`}>
        <SetFontProvider>
          <MantineProvider defaultColorScheme="dark"><HeaderSimple />{children}</MantineProvider>
        </SetFontProvider>
        {/* <MantineProvider theme={customTheme} defaultColorScheme="dark">{children}</MantineProvider> */}
      </body>

    </html>
  );
}
