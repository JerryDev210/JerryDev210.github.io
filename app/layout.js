import { Outfit } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./Components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ramkumar G - Portfolio",
  description: "Ramkumar Gurunathan 's portfolio. Explore my projects, skills, and experience.",
  openGraph: {
    title: "Ramkumar G - Portfolio",
    description: "Explore my projects, skills, and experience.",
    url: "https://JerryDev210.github.io",
    type: "website",
    image: "https://JerryDev210.github.io/preview.png", // Explicitly define the og:image
    images: [
      {
        url: "https://JerryDev210.github.io/preview.png", // Explicit image URL
        width: 1200, // Recommended width
        height: 630, // Recommended height
        alt: "Ramkumar G - Portfolio Preview", // Alt text for accessibility
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} antialiased overflow-x-hidden 
        dark:bg-darkTheme dark:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
