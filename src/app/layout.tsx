import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";


const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Mercury | Full-Stack Developer & Game Dev",
  description: "Full-stack developer specializing in Next.js, and modern web technologies. Creator of PrimaMateria Games. Explore my projects and get in touch.",
  keywords: ["Mercury", "Full-Stack Developer", "Next.js", "TypeScript", "Game Development", "Web Development", "Portfolio"],
  authors: [{ name: "Mercury" }],
  creator: "Mercury",
  openGraph: {
    title: "Mercury | Full-Stack Developer & Game Dev",
    description: "Full-stack developer specializing in Next.js, and modern web technologies. Creator of PrimaMateria Games.",
    url: "https://themercury.xyz",
    siteName: "TheMercury.xyz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercury | Full-Stack Developer & Game Dev",
    description: "Full-stack developer specializing in Next.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        {children}
      </body>
    </html>
  );
}