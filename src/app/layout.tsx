import type { Metadata } from "next";
import { Montserrat, Pirata_One } from "next/font/google";

import "./globals.css";

const pirataOne = Pirata_One({
  subsets: ["latin"],
  weight: "400", 
  variable: "--font-pirata", 
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});


export const metadata: Metadata = {
  title: "A La Diablo Hot Sauce",
  description: "Coming Soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pirataOne.variable} ${montserrat.variable} font-sans antialiased `}
      >
         
        {children}
      </body>
    </html>
  );
}
