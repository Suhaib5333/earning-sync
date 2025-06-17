import React from "react";
import { FaArrowRight, FaBookOpen, FaLightbulb, FaCheckCircle, FaYoutube, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const topics = [
	{
		icon: FaBookOpen,
		title: "What is Copy Trading?",
		desc: "Learn the basics of copy trading, how it works, and why it's popular among investors.",
	},
	{
		icon: FaLightbulb,
		title: "How EarningSync Works",
		desc: "Understand our strategies, risk management, and how you benefit from our experience.",
	},
	{
		icon: FaCheckCircle,
		title: "Getting Started Safely",
		desc: "Step-by-step guidance on opening your account, funding, and starting your copy trading journey.",
	},
];

const videos = [
	{
		title: "Copy Trading Explained in 5 Minutes",
		url: "https://www.youtube.com/watch?v=8g5n5Q1U7Vw",
		desc: "A quick introduction to the concept of copy trading.",
	},
	{
		title: "How to Start Copy Trading with EarningSync",
		url: "https://www.youtube.com/watch?v=QwQnQyK6r9A",
		desc: "Step-by-step walkthrough for beginners (external example).",
	},
	{
		title: "Risk Management in Copy Trading",
		url: "https://www.youtube.com/watch?v=QwQnQyK6r9A",
		desc: "Learn how to protect your capital and copy trade safely.",
	},
];

const tips = [
	"Start with a small amount to get comfortable.",
	"Always verify the performance history of any strategy.",
	"Never invest money you can't afford to lose.",
	"Diversify your investments for better risk management.",
	"Ask questions! Our team is here to help you succeed.",
];

const Education = () => (
	<div className="min-h-screen bg-[#f7fff6] py-16">
		<div className="max-w-3xl mx-auto px-4">
			<div className="text-center mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#013024]">
					Learn Before You Earn
				</h1>
				<p className="text-lg md:text-xl text-gray-700 mb-6">
					New to copy trading or want to understand how EarningSync works? Start
					here and empower yourself with knowledge before you invest.
				</p>
			</div>

			{/* Topics */}
			<div className="grid md:grid-cols-3 gap-8 mb-16">
				{topics.map((t, i) => (
					<div
						key={t.title}
						className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-[#a7ec4f]/30 hover:border-[#a7ec4f] transition"
					>
						<div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-4 shadow-inner">
							<t.icon className="w-10 h-10 text-[#013024]" />
						</div>
						<h3 className="text-xl font-bold mb-2 text-[#013024]">
							{t.title}
						</h3>
						<p className="text-gray-700 text-base">{t.desc}</p>
					</div>
				))}
			</div>

			{/* Video Learning Section */}
			<div className="mb-16">
				<h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#013024] flex items-center gap-2">
					<FaYoutube className="text-red-500" /> Watch & Learn
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{videos.map((video, idx) => (
						<a
							key={video.title}
							href={video.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center border border-[#a7ec4f]/30 hover:border-[#a7ec4f] transition hover:shadow-2xl"
						>
							<div className="bg-[#a7ec4f]/20 rounded-full p-4 mb-4 shadow-inner flex items-center justify-center">
								<FaPlayCircle className="w-10 h-10 text-[#a7ec4f] group-hover:text-[#013024] transition" />
							</div>
							<h4 className="text-lg font-bold mb-2 text-[#013024]">
								{video.title}
							</h4>
							<p className="text-gray-700 text-sm mb-2">{video.desc}</p>
							<span className="inline-flex items-center gap-1 text-[#a7ec4f] font-semibold text-sm group-hover:underline mt-2">
								Watch Video <FaArrowRight />
							</span>
						</a>
					))}
				</div>
			</div>

			{/* Quick Tips Section */}
			<div className="mb-16">
				<h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#013024]">
					Quick Tips for New Investors
				</h2>
				<ul className="list-disc list-inside text-gray-700 text-base space-y-2 bg-white rounded-2xl shadow p-6 border border-[#a7ec4f]/20">
					{tips.map((tip, i) => (
						<li key={i}>{tip}</li>
					))}
				</ul>
			</div>

			{/* Call to Action */}
			<div className="bg-[#013024] rounded-2xl p-8 text-white text-center shadow-xl">
				<h2 className="text-2xl md:text-3xl font-bold mb-4">
					Ready to Start Copy Trading?
				</h2>
				<p className="mb-6 text-green-100">
					When you feel confident, you can get started in just a few minutes.
				</p>
				<Link
					to="/get-started"
					className="inline-flex items-center px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg group"
				>
					Get Started Now
					<FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
				</Link>
			</div>
		</div>
	</div>
);

export default Education;