import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '有限会社 秋多運送 | 東京都あきる野市の運送会社',
  description: '東京都あきる野市の運送会社、有限会社秋多運送。昭和48年創業。一般貨物輸送、荷造り梱包。首都圏を中心に安心と信頼をお届けします。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={cn(inter.className, "bg-white text-slate-900 antialiased")}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
