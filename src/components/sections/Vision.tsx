/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChartLine, Heart, Mail, TrendingUp, User, Users, Video } from "lucide-react";
import Image from "next/image";
import CustomGradientOutlineButton from "../CustomGradientOutlineButton";

const Vision = () => {
	return (
		<div className="bg-black overflow-hidden " id="vision">
			<div className="h-2 lg:h-4 w-full bg-white" />
			<div className="max-w-[1400px] w-full mx-auto py-25 px-3 sm:px-6 lg:px-10 xl:px-0">
				<div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-0 items-stretch justify-between min-h-64">
					<div className="relative w-full h-60 sm:h-80 lg:w-96 lg:h-auto">
						<Image
							src="/vision1.jpg"
							alt=""
							fill
							className="object-contain lg:object-cover"
							blurDataURL="/vision1.jpg"
							priority={false}
						/>
					</div>

					<div>
						<p className="text-white text-3xl font-bold mb-5 text-center lg:text-start w-fit mx-auto lg:mx-0">
							About & Vision
						</p>
						<p className="text-white font-light max-w-md text-sm text-center lg:text-start w-fit mx-auto lg:mx-0">
							Benagos is a digital product company focused on building thoughtful, well-designed software
							that solves real problems. We create and own a portfolio of products across technology,
							commerce, and intelligence—each built to stand on its own, yet stronger as part of a
							connected ecosystem.
							<br />
							<br />
							Our work blends design, engineering, and strategy to turn complex challenges into simple,
							reliable experiences for people and businesses.
							<br />
							<br />
							Our Vision is to build a trusted ecosystem of digital products that empower individuals and
							organizations to work smarter, grow sustainably, and make better decisions—through clarity,
							quality, and purposeful innovation.
						</p>
					</div>
				</div>

				<div className="grid lg:grid-cols-3 gap-10 sm:gap-4 mx-auto mt-20 lg:mt-32">
					{[
						{
							name: "Invest in Next Round",
							icon: TrendingUp,
							note:
								"Benagos Technologies is open for funding round to support our Family of Apps used by over 20M users globally",
							btnIcon: User,
							btnText: `Let's talk`,
						},
						{
							name: "Invitation as a guest speaker",
							icon: Users,
							note: "Avaliable as a speaker for workspace events or conferences physically or remotely",
							btnIcon: Mail,
							btnText: `Contact`,
						},
						{
							name: "Collab, Funding? Lets connect",
							icon: Heart,
							note: `Lets discuss over a virtual coffee, my timezone is GMT +1 
              Available Thursdays - Saturday 6PM - 10PM`,
							btnIcon: Video,
							btnText: `Schedule Meeting`,
						},
					]?.map((m: any, index: number) => {
						const Icon = m?.icon;

						return (
							<div key={index} className="w-full flex flex-col gap-5">
								<Icon className="text-white size-6 mx-auto" />
								<div>
									<p className="font-medium text-base text-center text-white mx-auto">{m?.name}</p>
									<p className="font-light text-xs text-center text-white max-w-xs mt-2 mx-auto">
										{m?.note}
									</p>
								</div>
								<div className="mt-auto max-w-xs mx-auto w-full">
									<CustomGradientOutlineButton name={m?.btnText} left_icon={m?.btnIcon} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="h-2 lg:h-4 w-full bg-white" />
		</div>
	);
};

export default Vision;
