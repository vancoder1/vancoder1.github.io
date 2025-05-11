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
		'Welcome to my portfolio! I am an aspiring software engineer with a strong foundation in various programming languages and a passion for building innovative projects. Explore my work in Python, C#, Kotlin, and more.',
	keywords: [
		'Ivan Zaporozhets',
		'Software Engineer',
		'Computer Programming',
		'Python',
		'C#',
		'Kotlin',
		'Web Development',
		'Mobile Development',
		'Desktop Development',
		'AI',
		'Machine Learning',
		'Data Science',
		'Full-stack Development',
	],
	authors: [{ name: 'Ivan Zaporozhets' }],
	creator: 'Ivan Zaporozhets',
	openGraph: {
		title: 'Ivan Zaporozhets - Portfolio',
		description: 'Software engineer showcasing projects and technical skills.',
		url: 'https://vancoder1.github.io',
		siteName: 'Ivan Zaporozhets - Portfolio',
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
		description: 'Aspiring software engineer showcasing projects and technical skills.',
		creator: '@IvanZaporozhets',
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
