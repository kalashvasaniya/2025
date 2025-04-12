import "./globals.css";

export const metadata = {
  title: "2025 - It Is",
  description: "2025 - It Is - A countdown to the year 2025",
  openGraph: {
    title: "2025 - It Is",
    description: "2025 - It Is - A countdown to the year 2025",
    url: "https://2025-it-is.vercel.app",
    siteName: "2025 - It Is",
    images: [
      {
        url: "https://2025-it-is.vercel.app/755b702f-57c0-45e9-bc5e-8251228ab6f3.webp",
        width: 1200,
        height: 630,
        alt: "2025 - It Is countdown preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2025 - It Is",
    description: "2025 - It Is - A countdown to the year 2025",
    images: ["https://2025-it-is.vercel.app/755b702f-57c0-45e9-bc5e-8251228ab6f3.webp"],
    creator: "@amikalash",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
