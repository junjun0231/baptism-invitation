import { Pinyon_Script, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { invitation } from "@/config/invitation";

const script = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: `Baptism & 1st Birthday of ${invitation.childName}`,
  description: `${invitation.opening} the Baptism & 1st Birthday Party of ${invitation.childName}.`,
};

export const viewport = {
  themeColor: "#FBE4E8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${script.variable} ${serif.variable}`}>
      <body className="font-serif text-burgundy antialiased">{children}</body>
    </html>
  );
}
