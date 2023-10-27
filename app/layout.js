import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Pricehunt",
  description: "Track product prices effortlessly and save money.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <main className="max-w-[1600px] md:px-36 px-6 mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
