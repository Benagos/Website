/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "./ui/button";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
interface ButtonProps {
	name: string;
	left_icon?: IconType;
	right_icon?: IconType;
	className?: string;
}

const CustomGradientOutlineButton = ({
	name,
	left_icon,
	right_icon,
	className,
	...rest
}: ButtonProps) => {
	const LeftIcon: IconType | any = left_icon;
	const RightIcon: IconType | any = right_icon;
	const base = `bg-black rounded-full text-white text-[14px] !px-4 !py-6 cursor-pointer group-hover:bg-white! group-hover:text-black! transition-all ease-in-out duration-400 font-semibold w-full`;
	return (
		<div className="group transition-all ease-in-out duration-400">
			<div className="p-[2px] rounded-full bg-linear-to-r from-brandOrange to-brandRed group-hover:bg-linear-to-r group-hover:from-white group-hover:to-white">
				<Button className={cn(base, className)} {...rest}>
					{left_icon && <LeftIcon className="size-5" />}
					{name}
					{right_icon && <RightIcon className="size-5" />}
				</Button>
			</div>
		</div>
	);
};

export default CustomGradientOutlineButton;
