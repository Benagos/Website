import Image from "next/image";
import Link from "next/link";
import { TbMenu, TbX } from "react-icons/tb";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { ArrowUpRight } from "lucide-react";
import { footer } from "framer-motion/client";

// types for navbar
interface Navs {
	name: string;
	link: string;
}

interface Stacks {
	image: string;
}

interface Projects {
	logo: string;
	info: string;
	link: string;
	btnText: string;
	btnColor: string;
}

interface Connect {
	logo: string;
	name: string;
	link: string;
}

const Ehiziojie = () => {
	const navs: Navs[] = [
		{ name: "Benagos", link: "/" },
		{ name: "LilyPad", link: "/" },
		{ name: "EatFresh", link: "/" },
		{ name: "Zozo Interactive", link: "/" },
	];

	const stacks: Stacks[] = [
		{ image: "/figma.png" },
		{ image: "/chatgpt.png" },
		{ image: "/diamond.png" },
		{ image: "/flutter.png" },
		{ image: "/firebase.png" },
		{ image: "/swift.png" },
		{ image: "/google.png" },
		{ image: "/supabase.png" },
	];

	const projects: Projects[] = [
		{
			logo: "lilypadalt.svg",
			info:
				"Inspired by nature, LilyPad is a social platform whether it’s meaningful talks or lighthearted moments, LilyPad is your safe, welcoming space to explore the world, one conversation at a time.",
			link: "/",
			btnText: "Explore LilyPad",
			btnColor: "#6DAF20",
		},
		{
			logo: "eatfresh alt.svg",
			info:
				"Rooted in freshness and simplicity, EatFresh brings curated, freshly prepared meals closer to you—helping you eat better, with less effort, week after week. Its like having your personal Chef.",
			link: "/",
			btnText: "Explore EatFresh",
			btnColor: "#DA3832",
		},
		{
			logo: "zozo.svg",
			info:
				"Zozo Interactive operates at the cutting edge of technology, partnering with visionary brands and creatives to design and execute immersive digital experiences that redefine industry standards.",
			link: "/",
			btnText: "Explore Zozo Interactive",
			btnColor: "#0772EC",
		},
	];

	const connect: Connect[] = [
		{ name: "Product Hunt", logo: "/connect1.png", link: "/" },
		{ name: "Linkedin", logo: "/connect2.png", link: "/" },
		{ name: "Twitter", logo: "/connect3.png", link: "/" },
		{ name: "F65", logo: "/connect4.png", link: "/" },
		{ name: "TikTok", logo: "/connect5.png", link: "/" },
		{ name: "Substack", logo: "/connect6.png", link: "/" },
	];

	const footer: Navs[] = [
		{ name: "Visit Benagos", link: "" },
		{ name: "Try out LilyPad", link: "" },
		{ name: "Try out EatFresh", link: "" },
		{ name: "Explore Zozo Interactive", link: "" },
	];

	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="bg-white" id="altFont">
			{/* mobile sidebar ----------------------------------------------- */}
			<AnimatePresence mode="wait">
				{menuOpen && (
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 50, opacity: 0 }}
						transition={{ ease: easeInOut, duration: 0.3 }}
						className="fixed left-0 top-0 w-full min-h-screen backdrop-blur-sm z-40 p-2"
					>
						<div className="bg-[#111111] p-4 max-w-md ml-auto min-h-screen">
							<div className="flex flex-row-reverse justify-between items-center w-full">
								<TbX className="text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)} />
							</div>
							<div className="flex flex-col gap-8 mt-12">
								{navs?.map((n: Navs, index: number) => (
									<Link href={n?.link} key={index} onClick={() => setMenuOpen(!menuOpen)}>
										<p className="text-white text-end text-xl hover:text-white/80 transition-all ease-in-out duration-300">
											{n?.name}
										</p>
									</Link>
								))}
							</div>
							<div className="w-full flex flex-col justify-end mt-8">
								<Link
									href="/"
									className="text-white flex flex-col justify-center items-center bg-black px-8 py-3 rounded-full w-fit ml-auto text-lg hover:bg-black/80 transition-all ease-in-out duration-300"
								>
									Visit Blog
								</Link>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/*  navbar -------------------------------------------------------- */}
			<div className="fixed w-full py-3 left-0 right-0 bg-white px-3 sm:px-6 lg:px-10 2xl:px-0 z-20">
				<motion.div
					className="max-w-[1350px] w-full mx-auto flex justify-between items-center"
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
				>
					<div className="flex gap-8 items-center">
						<div className="relative w-38 h-12">
							<Image src="/logo-port.svg" fill alt="" className="object-contain" />
						</div>

						<div className="md:flex items-center gap-8 hidden">
							{navs?.map((n: Navs, index: number) => (
								<Link
									href={n?.link}
									key={index}
									className="text-black text-base font-medium hover:opacity-55 transition-all ease-in-out duration-300"
								>
									{n?.name}
								</Link>
							))}
						</div>
					</div>

					<Link
						href="/"
						className="text-white bg-black px-4 py-2.5 rounded-full w-fit text-sm hover:bg-black/80 transition-all ease-in-out duration-300 hidden md:flex"
					>
						Visit Blog
					</Link>

					<div
						className="bg-[#1D1E1F] py-2 sm:py-[10px] px-3 sm:px-4 rounded-full flex gap-2 items-center md:hidden "
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<TbMenu className="text-white text-2xl" />

						<p className="text-white text-base sm:text-lg">MENU</p>
					</div>
				</motion.div>
			</div>

			{/* body */}
			<div className="max-w-[1320px] w-full mx-auto px-3 sm:px-6 lg:px-10 2xl:px-0 pt-32">
				{/* hero section -------------------------------------------------- */}
				<motion.p
					className="text-[35px] sm:text-[46px] text-black font-normal leading-10 sm:leading-13"
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ ease: "anticipate", duration: 0.5, delay: 0.3 }}
				>
					Ehizojie is a Founder,
					<br /> Digital Product Designer & Software Product Maker
					<br /> creating internet products you’ve probably used
				</motion.p>

				<div className="flex gap-4 items-center-safe mt-5.5">
					{stacks?.map((s: Stacks, index: number) => (
						<motion.div
							key={index}
							className="relative w-7 h-7"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ ease: "easeIn", duration: 0.5, delay: index * 0.2 }}
						>
							<Image src={s.image} alt="" fill className="object-contain" />
						</motion.div>
					))}
				</div>

				<motion.p
					className="text-[#6E6D7A] font-normal text-lg mt-6"
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ ease: "easeIn", duration: 0.5, delay: 0.6 }}
				>
					Currently Lead Product Designer at Peerless & building my product company{" "}
					<span className="text-black font-semibold underline">
						<Link href="/">Benagos.</Link>
					</span>
				</motion.p>

				{/* projects -------------------------------------------------- */}
				<div className="mt-20 lg:mt-25">
					<p className="text-3xl text-black">My current “Preneur”</p>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
						{projects?.map((p: Projects, index: number) => (
							<motion.div
								key={index}
								className="max-w-[300px] flex flex-col gap-5"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ ease: "easeIn", duration: 0.5, delay: index * 0.2 }}
							>
								<div className="h-8 relative w-25">
									<Image src={p?.logo} alt="" fill className="object-contain" />
								</div>
								<p className="text-[#6E6D7A] text-base">{p?.info}</p>
								<CustomButton
									name={p?.btnText}
									className={`bg-white text-black hover:bg-[${p?.btnColor}] hover:bg-[var(--hover-bg)] hover:border-[var(--hover-border)]  hover:text-white transition-all ease-in-out duration-300 border-2 !py-5.5 w-fit`}
									right_icon={ArrowUpRight}
									style={{
										"--hover-bg": p?.btnColor,
										"--hover-border": p?.btnColor,
										borderColor: p?.btnColor,
									}}
								/>
							</motion.div>
						))}
					</div>
				</div>

				{/* connect --------------------------------------------------- */}
				<div className="mt-20 lg:mt-25">
					<p className="text-3xl text-black">Connect with me</p>
					<div className="flex flex-wrap gap-4 items-stretch mt-6">
						{connect?.map((c: Connect, index: number) => (
							<Link href={c?.link} key={index}>
								<motion.div
									className="bg-[#F2F5FA] px-5.5 py-3 rounded-full flex items-center justify-center gap-3"
									key={index}
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ ease: "easeIn", duration: 0.5, delay: index * 0.2 }}
								>
									<div className="relative w-[20px] h-[19.5px]">
										<Image src={c?.logo} fill alt="" className="object-cover" />
									</div>
									<p className="text-black font-semibold">{c?.name}</p>
								</motion.div>
							</Link>
						))}
					</div>
				</div>

				{/* info --------------------------------------------------- */}
				<div className="mt-20 lg:mt-25">
					<motion.p
						className="text-base text-[#6E6D7A]"
						initial={{ y: 50, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ ease: "anticipate", duration: 0.5 }}
					>
						With over 10 years experience, Ehizojie is a product designer who thinks a lot about how
						people interact with digital experiences and how to make them seamless, exciting, and
						impactful. Ehizojie believes in the power of simplicity, strategy, and a good design system.
						Beyond design, I enjoy learning new skills—whether it’s mobile development, AI, or exploring
						new business models.
						<br />
						Other than that, Ehizojie lead teams, build products across industries, and occasionally share
						knowledge with those starting their design journey. In Ehizojie’s spare time, you’ll probably
						him diving into history and science, watching the latest tv show, bursting love to animals on
						TikTok, tinkering with new ideas or appreciating the beauty of well crafted technology.
					</motion.p>
				</div>

				<hr className="border-[#D7D5EE] my-10" />

				{/* footer ------------------------------------------------- */}
				<div className="mb-5 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-start md:items-center">
					<p className="text-sm text-[#6E6D7A]">Copyright © 2025. All rights reserved.</p>

					<div className="flex flex-wrap gap-4 items-center">
						{footer?.map((f: Navs, index: number) => (
							<Link
								href={f?.link}
								key={index}
								className="text-[#6E6D7A] font-medium text-sm tracking-tighter hover:text-[#6E6D7A]/80 transition-all ease-in-out duration-300 w-fit"
							>
								{f?.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ehiziojie;
