import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import { LanguageProvider } from '@/lib/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Jan Truck Wash | Mobile Truck Washing PA, NJ & DE",
  description: "Professional mobile truck washing and fleet detailing for owner-operators and commercial fleets. Serving Pennsylvania, New Jersey, and Delaware. Fully insured. We come to you. Call (267) 444-8115.",
  keywords: [
    "mobile truck wash", "fleet washing Pennsylvania", 
    "truck detailing NJ", "commercial truck wash DE",
    "engine cleaning", "interior detailing trucks",
    "Jan Truck Wash", "mobile fleet cleaning"
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Jan Truck Wash | We Come To You",
    description: "Mobile truck washing & detailing. PA, NJ & DE. Call (267) 444-8115.",
    url: "https://jantruckwash.com",
    siteName: "Jan Truck Wash",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Jan Truck Wash Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Truck Wash | Mobile Truck Washing",
    description: "We come to you. PA, NJ & DE. Call (267) 444-8115.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jantruckwash.com",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg-deep text-white antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
