import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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
	title: 'Ivan Zaporozhets - Software Engineer',
	description:
		'Software Engineer with 8+ years of programming experience specializing in Python, C#, and AI/ML integration. Building scalable solutions from automated QA platforms to offline LLM applications.',
	keywords: [
		'Ivan Zaporozhets',
		'Software Engineer',
		'Python Developer',
		'C# Developer',
		'AI Engineer',
		'Machine Learning',
		'LLM',
		'LangChain',
		'PyTorch',
		'TensorFlow',
		'React',
		'Node.js',
		'ASP.NET',
		'Full-Stack Developer',
		'Open Source',
		'Portfolio',
	],
	authors: [{ name: 'Ivan Zaporozhets' }],
	creator: 'Ivan Zaporozhets',
	metadataBase: new URL('https://vancoder1.github.io'),
	openGraph: {
		title: 'Ivan Zaporozhets - Software Engineer',
		description: 'Software Engineer specializing in Python, C#, and AI/ML integration.',
		url: 'https://vancoder1.github.io',
		siteName: 'Ivan Zaporozhets - Software Engineer',
		images: [
			{
				url: '/laptop.jpg',
				width: 1200,
				height: 630,
				alt: 'Ivan Zaporozhets - Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ivan Zaporozhets - Software Engineer',
		description: 'Software Engineer specializing in Python, C#, and AI/ML integration.',
		creator: '@Vio_0x',
		images: ['/laptop.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
