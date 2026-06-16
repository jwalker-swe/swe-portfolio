import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Jordan Walker - Software Engineer",
  description: "Jordan Walker's Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
	  suppressHydrationWarning
      className={`h-full antialiased font-poppins ${poppins.variable}`}
    >
      <body className="min-h-full flex flex-col bg-red">{children}</body>
    </html>
  );
}
