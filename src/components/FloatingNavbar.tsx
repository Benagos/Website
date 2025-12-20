/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const FloatingNavbar = () => {
	return (
		<div className="fixed bottom-6 w-full left-0 right-0 z-10 flex justify-center items-stretch gap-4">
			<div className="flex gap-4 sm:gap-6 bg-brandGray rounded-full py-2 pl-2 pr-4 sm:pr-6 items-center mx-1 sm:mx-0">
				<Link href="#top" className="">
					<div className="w-12 h-12 bg-white rounded-full flex flex-col justify-center items-center">
						<ArrowUp className="text-black size-7" />
					</div>
				</Link>

				{[
					{ name: "LilyPad", link: "#lily" },
					{ name: "EatFresh", link: "#eatfresh" },
					{ name: "Contact", link: "#contact" },
					{ name: "Benagos Vision", link: "#vision" },
				].map((n: any, index: number) => (
					<Link href={n?.link} key={index} className="hidden md:flex">
						<p className="text-white font-[14px] hover:text-brandOrange transition-all ease-in-out duration-300">
							{n?.name}
						</p>
					</Link>
				))}

				{[
					{ name: "LilyPad", link: "#lily" },
					{ name: "EatFresh", link: "#eatfresh" },
					{ name: "Invest in Next Round", link: "/" },
				].map((n: any, index: number) => (
					<Link href={n?.link} key={index} className="flex md:hidden">
						<p className="text-white text-sm sm:text-[14px] hover:text-brandOrange transition-all ease-in-out duration-300 text-center">
							{n?.name}
						</p>
					</Link>
				))}
			</div>

			<div className="gap-6 bg-brandGray rounded-full min-h-10 px-6 items-center hidden md:flex ">
				<Link href="#top" className="">
					<p className="text-white font-[14px] hover:text-brandOrange transition-all ease-in-out duration-30">
						Invest in Next Round
					</p>
				</Link>
			</div>
		</div>
	);
};

export default FloatingNavbar;
