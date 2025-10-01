import {Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight:["400","500","600","700"]
});

export const metadata = {
  title: "Ramkumar G - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
