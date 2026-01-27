import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: '有限会社 秋多運送 | 東京都あきる野市の運送会社',
  description: '東京都あきる野市の運送会社、有限会社秋多運送。安心と信頼の物流サービスを提供します。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={cn(inter.variable, notoSansJP.variable, "bg-white text-slate-900 font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
