import Image from "next/image";
import React from "react";
import CustomGradientOutlineButton from "../CustomGradientOutlineButton";
import { ArrowDown, Eye } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
	return (
		<div className="bg-[#0F0F0F] h-full lg:min-h-[90vh] overflow-hidden">
			<div className="flex items-stretch justify-between">
				<div className="relative w-[25%] h-[90vh] shrink-0 hidden lg:flex">
					<Image src="/ribbon-green.svg" alt="" fill style={{ objectFit: "cover" }} />
				</div>

				<div className=" px-3 sm:px-6 lg:px-0 pt-14 sm:pt-32 h-full lg:pt-0 lg:min-h-[90vh] flex flex-col justify-center items-center w-full gap-3 sm:gap-6 ">
					<motion.p
						className="text-white font-medium text-base sm:text-lg text-center"
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ ease: easeInOut, delay: 0.1 }}
					>
						Welcome to the Product Company
					</motion.p>
					<motion.p
						className="text-white font-bold text-3xl sm:text-5xl text-center"
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ ease: easeInOut, delay: 0.3 }}
					>
						From a single heart,
						<br /> we build for the curious, the creative, and the community
					</motion.p>
					<motion.p
						className="text-center font-light text-white text-sm sm:text-base"
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ ease: easeInOut, delay: 0.5 }}
					>
						Benagos is a product company on a mission to digital application for connection,{" "}
						<br className="hidden lg:block" />
						creativity, and disruption. Each of our products is a chamber, beating from one heart,
						<br className="hidden lg:block" /> one vision: to make the internet more enjoyable.
					</motion.p>
					<div className="flex items-center gap-4 flex-col-reverse sm:flex-row mt-4 lg:mt-0">
						<motion.div
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ ease: easeInOut, delay: 0.5 }}
						>
							<CustomGradientOutlineButton name="Explore our Family of Apps" left_icon={ArrowDown} />
						</motion.div>

						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ ease: easeInOut, delay: 0.5 }}
						>
							<Link href="#vision">
								<CustomGradientOutlineButton name="Benagos Vision" left_icon={Eye} />
							</Link>
						</motion.div>
					</div>
				</div>

				<div className="relative w-[25%] h-[90vh] shrink-0 hidden lg:flex">
					<Image src="/ribbon-red.svg" alt="" fill style={{ objectFit: "cover" }} />
				</div>
			</div>

			<div className="flex w-full justify-between lg:hidden">
				<div className="relative h-38 sm:h-60 w-40 sm:w-64 -ml-8 sm:-ml-10 -mt-16 pointer-events-none">
					<Image
						src="/ribbon-green-mobile.svg"
						alt=""
						fill
						style={{ objectFit: "cover", objectPosition: "center" }}
					/>
				</div>
				<div className="relative h-36 sm:h-60 w-40 sm:w-64 -mr-3 sm:-mr-4 -mt-14 pointer-events-none">
					<Image
						src="/ribbon-red-mobile.svg"
						alt=""
						fill
						style={{ objectFit: "cover", objectPosition: "center" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
