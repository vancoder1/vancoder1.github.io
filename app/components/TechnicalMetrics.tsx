'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Education</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Red Deer Polytechnic</h4>
								<p className="text-gray-400">Computer Programming, 2024-Present</p>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Developing expertise in Python, JavaScript, Java, C# and industry-standard development tools.</li>
									<li>• Strengthening teamwork and problem-solving through collaborative application development.</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">IT Step Online Computer Academy</h4>
								<p className="text-gray-400">Programming, 2019-2021</p>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Mastered C#, C++, SQL Server, ASP.NET, ADO.NET, and Entity Framework.</li>
									<li>• Delivered multiple individual and team projects simulating real-world software scenarios.</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
