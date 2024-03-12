import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { getURL } from '@/utils/helpers';
import React, { PropsWithChildren, Suspense } from 'react';
import { Toaster } from '@/components/ui/Toasts/toaster';

const inter = Inter({ subsets: ['latin'] });

const meta = {
    title: 'Next.js Subscription Starter',
    description: 'Brought to you by Vercel, Stripe, and Supabase.',
    cardImage: '/og.png',
    robots: 'follow, index',
    favicon: '/favicon.ico',
    url: getURL()
};

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: meta.title,
        description: meta.description,
        referrer: 'origin-when-cross-origin',
        keywords: ['Vercel', 'Supabase', 'Next.js', 'Stripe', 'Subscription'],
        authors: [{ name: 'Vercel', url: 'https://vercel.com/' }],
        creator: 'Vercel',
        publisher: 'Vercel',
        robots: meta.robots,
        icons: { icon: meta.favicon },
        metadataBase: new URL(meta.url),
        openGraph: {
            url: meta.url,
            title: meta.title,
            description: meta.description,
            images: [meta.cardImage],
            type: 'website',
            siteName: meta.title
        },
        twitter: {
            card: 'summary_large_image',
            site: '@Vercel',
            creator: '@Vercel',
            title: meta.title,
            description: meta.description,
            images: [meta.cardImage]
        }
    };
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main id="skip" className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]">
                    {children}
                </main>

                <Suspense>
                    <Toaster />
                </Suspense>
            </body>
        </html>
    );
}
