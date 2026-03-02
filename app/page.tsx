'use client';

import HeroSection from './components/HeroSection';
import SystemArchitecture from './components/SystemArchitecture';
import TechnicalMetrics from './components/TechnicalMetrics';
import ContactSection from './components/ContactSection';

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
			<HeroSection />
			<SystemArchitecture />
			<TechnicalMetrics />
			<ContactSection />
		</main>
	);
}
