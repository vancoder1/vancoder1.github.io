'use client';

import { motion } from 'framer-motion';

const SKILL_GROUPS = [
	{ label: 'Languages', color: 'green', skills: ['Python', 'C#', 'C/C++', 'TypeScript', 'JavaScript', 'Java', 'Kotlin', 'SQL', 'Bash'] },
	{ label: 'AI & ML', color: 'purple', skills: ['PyTorch', 'TensorFlow', 'LangChain', 'Llama 3.1', 'Ollama', 'Faster-Whisper'] },
	{ label: 'Web & Cloud', color: 'blue', skills: ['React', 'Node.js', 'ASP.NET', 'Entity Framework', 'Prisma', 'Next.js'] },
	{ label: 'Databases', color: 'orange', skills: ['PostgreSQL', 'Oracle DB', 'MSSQL', 'MySQL', 'MongoDB', 'SQLite'] },
	{ label: 'Tools', color: 'cyan', skills: ['Git', 'Docker', 'Linux', 'Cypress', 'WPF', 'MVVM'] },
] as const;

const skillClasses: Record<string, string> = {
	green: 'bg-green-500/10 border-green-500/30 text-green-300',
	purple: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
	blue: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
	orange: 'bg-orange-500/10 border-orange-500/30 text-orange-300',
	cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
};

/**
 * Render a terminal-style hero section that presents a name, short summary, and grouped, color-coded skill badges.
 *
 * @returns The JSX element for an animated, terminal-like card containing the "whoami" heading, a summary paragraph, and skill groups mapped from SKILL_GROUPS with styled badges.
 */
export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]">
			{/* Background glows */}
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />

			<div className="relative z-10 max-w-4xl w-full mx-4 py-16">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: 'easeOut' }}
					className="rounded-xl border border-gray-800 overflow-hidden shadow-2xl"
				>
					{/* Terminal title bar */}
					<div className="flex items-center gap-2 px-5 py-3 bg-gray-900 border-b border-gray-800">
						<div className="w-3 h-3 rounded-full bg-red-500/80" />
						<div className="w-3 h-3 rounded-full bg-yellow-500/80" />
						<div className="w-3 h-3 rounded-full bg-green-500/80" />
						<span className="ml-3 text-xs text-gray-500 font-mono">ivan@portfolio ~ </span>
					</div>

					{/* Terminal body */}
					<div className="bg-black/60 backdrop-blur-xl p-6 md:p-8 font-mono space-y-6">
						{/* whoami */}
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
							<p className="text-green-400 text-sm mb-2">$ whoami</p>
							<h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
								Ivan Zaporozhets
							</h1>
							<p className="text-green-400 text-lg mt-2 glow-green">Software Engineer</p>
						</motion.div>

						{/* summary */}
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
							<p className="text-green-400 text-sm mb-2">$ cat summary.txt</p>
							<p className="text-gray-300 leading-relaxed text-sm md:text-base border-l-2 border-green-500/30 pl-4">
								Software Engineer with <span className="text-green-300 font-semibold">8+ years</span> of programming experience,
								specializing in <span className="text-green-300 font-semibold">Python, C#, and AI/ML</span> integration.
								Proven track record of architecting scalable solutions — from automated enterprise QA platforms to offline LLM applications.
							</p>
						</motion.div>

						{/* skills */}
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
							<p className="text-green-400 text-sm mb-3">$ ls ./skills/</p>
							<div className="space-y-3">
								{SKILL_GROUPS.map(({ label, color, skills }) => (
									<div key={label}>
										<span className="text-gray-500 text-xs uppercase tracking-widest"># {label}</span>
										<div className="flex flex-wrap gap-2 mt-1.5">
											{skills.map((skill) => (
												<span
													key={skill}
													className={`px-2.5 py-0.5 rounded border text-xs font-medium ${skillClasses[color]}`}
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
