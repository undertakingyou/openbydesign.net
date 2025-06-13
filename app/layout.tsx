import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Open By Design',
    description: 'Open By Design home site',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
                <div id="container" className="flex flex-col min-h-screen bg-gradient-to-b from-blue-500 to-gray-50">
                    <header className="flex flex-col justify-items-center align-center mx-auto">
                        <Link href="/">
                            <Image src="/logo.png" width={569} height={255} alt="Open By Design logo" />
                        </Link>
                        <div id="nav" className="flex justify-between pt-4 text-xl font-bold">
                            <Link href="/services">Services</Link>
                            <Link href="/about">About Me</Link>
                            <Link href="/contact">Contact Me</Link>
                        </div>
                    </header>
                    <main className="flex-grow p-4 justify-items-center align-center mx-auto">{children}</main>
                </div>
            </body>
        </html>
    );
}
