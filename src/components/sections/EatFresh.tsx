import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import { ArrowUpRight } from "lucide-react";
import { motion, easeInOut } from "framer-motion";

const EatFresh = () => {
	return (
		<div className="bg-[url('/eat-fresh.png')] overflow-hidden" id="eatfresh">
			<div className="pt-20 lg:pt-32 px-3 sm:px-6 lg:px-10 xl:px-0">
				<div className="flex flex-col gap-6 lg:gap-5">
					<motion.div
						className="w-50 h-10 relative mx-auto"
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ ease: easeInOut, duration: 0.3, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<Image src="/eatfresh.svg" fill alt="" style={{ objectFit: "contain" }} />
					</motion.div>
					<motion.p
						className="text-white text-3xl lg:text-4xl font-semibold max-w-lg lg:max-w-3xl mx-auto text-center leading-8 lg:leading-10"
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ ease: easeInOut, duration: 0.3, delay: 0.3 }}
						viewport={{ once: true }}
					>
						Your fridge? Always stocked — Your everyday meals freshly made just for you{" "}
					</motion.p>
					<motion.p
						className="text-base max-w-2xl mx-auto text-center font-light text-[#C8CEDE]"
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ ease: easeInOut, duration: 0.3, delay: 0.4 }}
						viewport={{ once: true }}
					>
						Overall, Kusala has been a game-changer for our business. It has completely transformed how we
						automate workflows, streamline processes, and collaborate efficiently all in one place.
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
						className="mx-auto sm:mx-0"
					>
						<CustomButton
							name="Explore EatFresh"
							className="border-2 border-brandRed hover:bg-brandRed bg-[#191f28]"
							right_icon={ArrowUpRight}
						/>
					</motion.div>
				</div>
			</div>
			<motion.div
				className="relative h-[300px] w-full sm:h-[400px] sm:w-[400px] mx-auto"
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ ease: easeInOut, delay: 0.6, duration: 0.3 }}
				viewport={{ once: true }}
			>
				<Image src="/phone.png" fill alt="" className="object-contain md:ml-4 lg:ml-0" />
				{/* right mockup web */}
				<div className="absolute -bottom-1 -right-43 lg:-right-40 hidden md:block">
					<div className="relative w-70 h-70">
						<Image src="/right phone mockup.png" alt="" fill className="object-cover" />
					</div>
				</div>

				{/* right mockup mobile */}
				<div className="absolute -bottom-1 -right-5 sm:-right-32 md:hidden">
					<div className="relative w-40 sm:w-70 h-40 sm:h-70">
						<Image src="/right phone mockup mobile.png" alt="" fill className="object-contain" />
					</div>
				</div>

				{/* left mockup web */}
				<div className="absolute top-13 -left-35 lg:-left-40 hidden md:block">
					<div className="relative w-50 h-50">
						<Image src="/left phone mockup.svg" alt="" fill className="object-contain" />
					</div>
				</div>

				{/* left mockup mobile */}
				<div className="absolute top-18 sm:top-32 left-8 sm:-left-1 md:hidden">
					<div className="relative w-40 sm:w-60 h-20">
						<Image src="/left mockup mobile.png" alt="" fill className="object-contain" />
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default EatFresh;
