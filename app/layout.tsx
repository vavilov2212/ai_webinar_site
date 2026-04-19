import type {Metadata} from 'next';
import { Manrope, Dancing_Script } from 'next/font/google';
import './globals.css'; // Global styles

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Webinar - The Cinematic Horizon',
  description: 'Создавай музыку и видео с помощью AI',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dancingScript.variable} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
