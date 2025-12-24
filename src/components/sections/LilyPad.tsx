/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import { ArrowUpRight } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
const LilyPad = () => {
	return (
		<div className="bg-[#1D1E1F]" id="lily">
			<div className="h-2 lg:h-4 w-full bg-white" />
			<div className="pt-20 lg:pt-32 px-3 sm:px-6 lg:px-10 xl:px-0">
				{/* <div className="bg-[url('/wave.svg')] bg-no-repeat bg-bottom"></div> */}
				<div className="flex flex-col gap-6 lg:gap-5">
					<motion.div
						className="w-40 h-11 relative mx-auto"
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ ease: easeInOut, duration: 0.3, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<Image src="/lilypad-logo.svg" fill alt="" style={{ objectFit: "cover" }} />
					</motion.div>

					<motion.p
						className="text-white text-3xl lg:text-4xl font-semibold max-w-lg lg:max-w-4xl mx-auto text-center leading-8 lg:leading-10 -tracking-[1px]"
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ ease: easeInOut, duration: 0.3, delay: 0.3 }}
						viewport={{ once: true }}
					>
						Great way to make new friends and find your someone in the crowd
					</motion.p>
					<motion.p
						className="text-base max-w-2xl mx-auto text-center font-light text-[#C8CEDE] -tracking-[0.5px]"
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ ease: easeInOut, duration: 0.3, delay: 0.4 }}
						viewport={{ once: true }}
					>
						Real-time conversations with strangers. Whether you’re looking for a quick chat, a fresh
						perspective, or a friendly voice to break up your day, our app lets you connect with people in
						a fun, anonymous way.
					</motion.p>
				</div>
				{/* buttons */}
				<div className="flex gap-4 mx-auto w-fit mt-7 mb-20 lg:mb-32 group flex-col sm:flex-row">
					<motion.div
						className="bg-brandGray rounded-full px-5 py-4 sm:py-2 flex flex-col items-center justify-center w-fit text-white hover:bg-white hover:text-black transition-all ease-in-out duration-300 cursor-pointer"
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ ease: easeInOut, delay: 0.5, duration: 0.3 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center gap-[10px]">
							<div className="relative w-6 h-6">
								<Image src="/appstore.png" fill alt="" style={{ objectFit: "contain" }} />
							</div>
							<div className="relative w-6 h-6">
								<Image src="/play.svg" fill alt="" style={{ objectFit: "contain" }} />
							</div>
							<p className="text-base font-medium">Download App</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ ease: easeInOut, delay: 0.5, duration: 0.3 }}
						viewport={{ once: true }}
						className="mx-auto sm:mx-0 w-full sm:w-fit"
					>
						<CustomButton
							name="Explore LilyPad"
							className="border-2 border-brandGreen hover:bg-brandGreen w-full sm:w-fit"
							right_icon={ArrowUpRight}
						/>
					</motion.div>
				</div>
			</div>
			<motion.div
				className="lg:bg-[url('/wave.webp')] w-full bg-cover bg-no-repeat pb-2 lg:pb-4 lg:pt-16 "
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ ease: easeInOut, delay: 0.6, duration: 0.3 }}
				viewport={{ once: true }}
			>
				<div className="lg:flex gap-6 mx-auto w-full max-w-[1100px] overflow-hidden hidden">
					{[
						{ img: "/img1.webp" },
						{ img: "/img2.png" },
						{ img: "/img3.webp" },
						{ img: "/img-4.png" },
					].map((i: any, index: number) => (
						<div
							className={`h-[421px] min-w-[110px] w-full flex-1 relative ${
								index % 2 !== 0 ? "mt-10" : "mt-0"
							} rounded-2xl overflow-hidden`}
							key={index}
						>
							<Image src={i?.img} fill alt="" style={{ objectFit: "contain" }} />
						</div>
					))}
				</div>
				<div className="relative h-[450px] sm:h-[680px] md:h-[800px] w-full lg:hidden">
					<Image src="/img-mobile.svg" fill alt="" style={{ objectFit: "cover" }} />
				</div>
			</motion.div>
			<div className="h-2 lg:h-4 w-full bg-white" />
		</div>
	);
};

export default LilyPad;
