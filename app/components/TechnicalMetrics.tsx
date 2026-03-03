'use client';

import { motion } from 'framer-motion';

const EDUCATION = [
	{
		institution: 'Red Deer Polytechnic',
		degree: 'Computer Programming Diploma',
		period: 'Sep 2024 \u2013 May 2026',
		location: 'Red Deer, AB',
		points: [
			'Core focus: Cloud Programming, Java EE, Databases (Oracle, PostgreSQL), Full-Stack Web.',
			'Studied React, Node.js, ASP.NET, Entity Framework, MongoDB, Git, and Agile practices.',
			'Collaborated on team capstone and software development projects.',
		],
	},
	{
		institution: 'Ivan Puluj Technical University',
		degree: 'Software Engineering Coursework',
		period: '2022 \u2013 2023',
		location: 'Ternopil, Ukraine',
		points: [
			'Completed intensive coursework in advanced software engineering principles, algorithms, and data structures.',
		],
	},
	{
		institution: 'IT Step Academy',
		degree: 'Programming & Architecture Coursework',
		period: '2019 \u2013 2021',
		location: 'Ukraine',
		points: [
			'Mastered C#, C++, SQL Server, and ASP.NET through rigorous software projects and technical examinations.',
			'Completed interview-format exams simulating real-world engineering hiring processes.',
		],
	},
];

export default function TechnicalMetrics() {
	return (
		<section className="py-24 px-4 bg-gray-950/80">
			<div className="max-w-5xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-14 text-center"
				>
					<p className="text-green-400 font-mono text-sm mb-2 tracking-widest uppercase">$ cat education.log</p>
					<h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
				</motion.div>

				{/* Timeline */}
				<div className="relative">
					{/* vertical line */}
					<div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-green-500/20 to-transparent hidden md:block" />

					<div className="space-y-6">
						{EDUCATION.map((edu, index) => (
							<motion.div
								key={edu.institution}
								initial={{ opacity: 0, x: -16 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="relative md:pl-12"
							>
								{/* timeline dot */}
								<div className="absolute left-1 top-5 w-6 h-6 rounded-full bg-gray-900 border-2 border-green-500/60 hidden md:flex items-center justify-center">
									<div className="w-2 h-2 rounded-full bg-green-400" />
								</div>

								<div className="card-hover bg-gray-900/60 rounded-xl border border-gray-800 hover:border-green-500/30 p-6">
									<div className="flex flex-wrap items-start justify-between gap-2 mb-1">
										<h4 className="text-lg font-bold text-white">{edu.institution}</h4>
										<span className="text-xs text-gray-500 font-mono bg-gray-800 px-2 py-0.5 rounded">{edu.period}</span>
									</div>
									<p className="text-green-400 text-sm font-semibold">{edu.degree}</p>
									<p className="text-gray-500 text-xs mb-4">{edu.location}</p>
									<ul className="space-y-2">
										{edu.points.map((point, ptIdx) => (
											<li key={`${index}-${ptIdx}`} className="flex gap-2 text-sm text-gray-400">
												<span className="text-green-500 shrink-0 mt-0.5">›</span>
												<span>{point}</span>
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
