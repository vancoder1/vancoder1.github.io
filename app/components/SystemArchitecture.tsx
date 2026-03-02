'use client';

import { motion } from 'framer-motion';

const PROJECTS = [
	{
		title: 'SynTA',
		subtitle: 'LLM-Powered UAT Automation',
		year: '2026',
		role: 'Lead Developer & Co-Author',
		description: 'Architected an AI-powered enterprise application that automates User Acceptance Testing by generating Gherkin scenarios from user stories.',
		details: [
			'Engineered conversion of Gherkin scenarios into executable Cypress test scripts, drastically reducing QA overhead.',
			'Co-authored an academic publication based on this system\u2019s research and results.',
		],
		tech: ['C#', 'Cypress', 'AI', 'Gherkin'],
	},
	{
		title: 'AsukaAI',
		subtitle: 'Local Offline AI Companion',
		year: '2023 \u2013 Present',
		role: 'AI Developer (Open Source)',
		description: 'Engineered a fully offline AI companion with optimized speech-to-text and text-generation pipelines for near real-time interactions.',
		details: [
			'Integrated Llama 3.1 3B with LangChain for secure, API-independent infrastructure.',
			'Most-starred personal GitHub repository — built entirely without external API dependencies.',
		],
		tech: ['Python', 'PyTorch', 'Llama 3.1', 'LangChain', 'Ollama', 'Faster-Whisper'],
	},
	{
		title: 'TaleWeaver',
		subtitle: 'AI/ML Text Adventure Game',
		year: '2025',
		role: 'AI/ML Developer (Open Source)',
		description: 'Developed an AI-driven text adventure game that uses ML to dynamically generate adaptive narratives.',
		details: [
			'Architected a collaborative storytelling environment supporting single-player and multiplayer modes.',
			'Leveraged Python ML pipelines for context-aware, procedurally generated story branches.',
		],
		tech: ['Python', 'Machine Learning'],
	},
	{
		title: 'YTubeD',
		subtitle: 'Desktop Media Downloader',
		year: '2024',
		role: 'Software Engineer (Open Source)',
		description: 'Built a robust WPF desktop application for concurrent MP4/MP3 media processing and downloading.',
		details: [
			'Implemented strict MVVM architecture for a scalable and maintainable codebase.',
			'Designed an intuitive Material Design UI for a polished end-user experience.',
		],
		tech: ['C#', 'WPF', '.NET', 'MVVM'],
	},
];

/**
 * Render the "Engineering Experience" section with a responsive grid of project cards.
 *
 * Each card displays project metadata (title, subtitle, year, role, description, details, and tech badges)
 * and includes in-view animations and a hover accent.
 *
 * @returns A JSX section element containing the animated project list populated from `PROJECTS`.
 */
export default function SystemArchitecture() {
	return (
		<section className="py-24 px-4 bg-[#0f0f0f]">
			<div className="max-w-5xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-14 text-center"
				>
					<p className="text-green-400 font-mono text-sm mb-2 tracking-widest uppercase">$ ls ./projects</p>
					<h2 className="text-3xl md:text-4xl font-bold text-white">Engineering Experience</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{PROJECTS.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.08 }}
							className="card-hover group relative bg-gray-900/60 rounded-xl border border-gray-800 hover:border-green-500/40 overflow-hidden"
						>
							{/* accent top border */}
							<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							<div className="p-6">
								<div className="flex items-start justify-between gap-2 mb-1">
									<h3 className="text-xl font-bold text-white">{project.title}</h3>
									<span className="text-xs text-gray-500 font-mono bg-gray-800 px-2 py-0.5 rounded shrink-0">{project.year}</span>
								</div>
								<p className="text-green-400 text-xs font-semibold uppercase tracking-wide mb-0.5">{project.subtitle}</p>
								<p className="text-gray-500 text-xs italic mb-4">{project.role}</p>

								<p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

								<ul className="space-y-1.5 mb-5">
									{project.details.map((detail) => (
										<li key={detail} className="flex gap-2 text-sm text-gray-300">
											<span className="text-green-500 shrink-0 mt-0.5">›</span>
											<span>{detail}</span>
										</li>
									))}
								</ul>

								<div className="flex flex-wrap gap-1.5">
									{project.tech.map((tech) => (
										<span key={tech} className="text-xs px-2.5 py-0.5 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
