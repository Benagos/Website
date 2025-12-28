/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className="bg-black">
			<div className="max-w-[1400px] w-full mx-auto py-25 px-3 sm:px-6 lg:px-10 2xl:px-0">
				<div className="flex flex-col xl:flex-row justify-between w-full gap-10 xl:gap-0">
					<p className="max-w-sm text-sm font-light text-white -tracking-[0.2px]">
						Benagos is a product studio on a mission to build human-first digital tools for connection,
						creativity, clarity, and change. Each of our products is a petal, blooming from one vision: to
						make the internet more thoughtful.
					</p>

					<div className="flex flex-col sm:flex-row gap-8 lg:gap-12 2xl:gap-16">
						{[
							{
								name: "Family Apps",
								items: [
									{
										name: "LilyPad",
										link: "https://lilypad.benagos.com/",
									},
									{
										name: "EatFresh",
										link: "https://eatfresh.benagos.com/",
									},
								],
							},
							{
								name: "Help & Support",
								items: [
									{
										name: "LilyPad Commons",
										link: "/",
									},
									{
										name: "EatFresh Commons",
										link: "/",
									},
								],
							},
							{
								name: "Social",
								items: [
									{
										name: "Linkedin",
										link: "/",
									},
									{
										name: "Instagram",
										link: "/",
									},
									{
										name: "X(Twitter)",
										link: "/",
									},
									{
										name: "TikTok",
										link: "/",
									},
								],
							},
							{
								name: "Contact",
								items: [
									{
										name: "Benagos LLC, Benagos Technologies Limited Lekki, Lagos, Nigeria",
									},
									{
										name: "hello@benagos.com",
									},
								],
							},
						]?.map((f: any, index: number) => (
							<div key={index}>
								<p className="font-semibold text-[15px] text-[#979797] -tracking-[0.5px]">{f?.name}</p>
								<div className="font-light text-[13px] text-white flex flex-col gap-3 sm:gap-4 mt-4">
									{f?.items?.map((m: any, index: number) => (
										<Link
											href={m?.link ?? "#"}
											key={index}
											target="_blank"
											className={`${m?.link ? "cursor-pointer" : "cursor-auto"} hover:${
												m.link ? "text-brandOrange" : "text-white"
											} transition-all ease-in-out duration-300`}
										>
											<p className="max-w-xs -tracking-[0.2px]">{m?.name}</p>
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="relative w-full h-20 sm:h-35 lg:h-40 xl:h-62 2xl:h-72 my-10 xl:my-20">
					<Image src="/footer logo.svg" fill alt="" className="object-contain xl:object-cover" />
				</div>

				<hr className="border-white opacity-10" />
				<div className="my-7 justify-between w-full flex flex-col sm:flex-row sm:items-center gap-5">
					<p className="text-white font-light text-sm -tracking-[0.5px]">
						© Benagos Technologies Limited, {new Date().getFullYear()}
					</p>
					<div className="flex items-center">
						{[
							{ name: "Privacy", link: "" },
							{ name: "Terms", link: "" },
							{ name: "Brand Guide", link: "" },
						]?.map((n: any, index: number, arr: any) => (
							<Link href={n?.link} key={index} className="flex items-center">
								<p className="text-white text-sm font-light hover:text-brandOrange ease-in-out transition-all duration-300 -tracking-[0.5px]">
									{n?.name}
								</p>
								{arr?.length - 1 !== index && <Dot className="text-white size-5 mx-1" />}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
