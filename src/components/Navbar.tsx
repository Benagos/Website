/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { Globe, User } from "lucide-react";
import CustomGradientButton from "./CustomGradientButton";
import { TbMenu, TbX } from "react-icons/tb";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Navbar = () => {
	const [activeLang, setActiveLang] = useState("English");
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="bg-black py-4 px-3 sm:px-6 lg:px-10 2xl:px-30" id="top">
			<AnimatePresence mode="wait">
				{menuOpen && (
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 50, opacity: 0 }}
						transition={{ ease: easeInOut, duration: 0.3 }}
						className="fixed left-0 top-0 w-full min-h-screen backdrop-blur-sm z-10 p-2"
					>
						<div className="bg-[#111111] p-4 max-w-md ml-auto min-h-screen">
							<div className="flex flex-row-reverse justify-between items-center w-full">
								<TbX className="text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)} />
								<Select onValueChange={(value: any) => setActiveLang(value)} value={activeLang}>
									<SelectTrigger className="w-fit bg-brandGray rounded-full px-3 py-5 focus-visible:ring-0 border-0 border-transparent cursor-pointer">
										<div className="flex items-center gap-[10px]">
											<Globe className="text-white size-4" />
											<p className="text-white text-sm capitalize">{activeLang}</p>
										</div>
									</SelectTrigger>
									<SelectContent
										position="popper"
										className="bg-[#111111] text-white border-0 border-transparent focus-visible:border-0"
									>
										<SelectGroup>
											{[{ name: "English" }, { name: "French" }, { name: "German" }]?.map(
												(l: any, index: number) => (
													<SelectItem
														value={l?.name.toLowerCase()}
														key={index}
														className="hover:bg-[#333333]! hover:text-white! cursor-pointer"
													>
														{l?.name}
													</SelectItem>
												)
											)}
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col gap-8 mt-12">
								{[
									{ name: "LilyPad", link: "#lily" },
									{ name: "EatFresh", link: "#eatfresh" },
								]?.map((n: any, index: number) => (
									<Link href={n?.link} key={index} onClick={() => setMenuOpen(!menuOpen)}>
										<p className="text-white text-end text-xl hover:text-brandOrange transition-all ease-in-out duration-300">
											{n?.name}
										</p>
									</Link>
								))}
							</div>
							<div className="flex flex-col gap-4 ml-auto w-fit mt-8">
								<CustomGradientButton
									name="Invest in Next Round"
									left_icon={User}
									className="!py-6 !lg:py-5"
								/>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -50, opacity: 0 }}
				transition={{ ease: easeInOut, duration: 0.3 }}
			>
				<div className="flex items-center justify-between">
					{/* logo and links */}
					<div className="flex items-center gap-8">
						<div className="relative w-40 h-10">
							<Image src="/logo.svg" alt="" fill style={{ objectFit: "contain" }} />
						</div>
						<div className="lg:flex items-center gap-8 hidden">
							{[
								{ name: "LilyPad", link: "#lily" },
								{ name: "EatFresh", link: "#eatfresh" },
							]?.map((n: any, index: number) => (
								<Link href={n?.link} key={index}>
									<p className="text-white text-[14px] hover:text-brandOrange transition-all ease-in-out duration-300">
										{n?.name}
									</p>
								</Link>
							))}
						</div>
					</div>

					<div className="lg:flex items-center gap-4 hidden">
						<Select onValueChange={(value: any) => setActiveLang(value)} value={activeLang}>
							<SelectTrigger className="w-fit bg-brandGray rounded-full px-3 py-5 focus-visible:ring-0 border-0 border-transparent cursor-pointer">
								<div className="flex items-center gap-[10px]">
									<Globe className="text-white size-4" />
									<p className="text-white text-sm capitalize">{activeLang}</p>
								</div>
							</SelectTrigger>
							<SelectContent
								position="popper"
								className="bg-[#111111] w-fit text-white border-0 border-transparent focus-visible:border-0"
							>
								<SelectGroup>
									{[{ name: "English" }, { name: "French" }, { name: "German" }]?.map(
										(l: any, index: number) => (
											<SelectItem
												value={l?.name.toLowerCase()}
												key={index}
												className="hover:bg-[#333333]! hover:text-white! cursor-pointer"
											>
												{l?.name}
											</SelectItem>
										)
									)}
								</SelectGroup>
							</SelectContent>
						</Select>
						<CustomGradientButton name="Invest in Next Round" left_icon={User} />
					</div>

					<div
						className="bg-[#1D1E1F] py-2 sm:py-[10px] px-3 sm:px-4 rounded-full flex gap-2 items-center lg:hidden "
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<AnimatePresence mode="wait">
							{!menuOpen ? (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ ease: easeInOut, duration: 0.1 }}
									key="open"
								>
									<TbMenu className="text-white text-2xl" />
								</motion.div>
							) : (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ ease: easeInOut, duration: 0.1 }}
									key="close"
								>
									<TbX className="text-white text-2xl" />
								</motion.div>
							)}
						</AnimatePresence>
						<p className="text-white text-base sm:text-lg">MENU</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Navbar;
