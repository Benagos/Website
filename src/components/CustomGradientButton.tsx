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

const CustomGradientButton = ({ name, left_icon, right_icon, className, ...rest }: ButtonProps) => {
	const LeftIcon: IconType | any = left_icon;
	const RightIcon: IconType | any = right_icon;
	const base = `bg-linear-to-r from-brandOrange to-brandRed rounded-full text-white text-[14px] !px-4 !py-5 cursor-pointer hover:bg-white! hover:text-black! hover:from-white hover:to-white transition-all ease-in-out duration-400 font-semibold`;
	return (
		<Button className={cn(base, className)} {...rest}>
			{left_icon && <LeftIcon className="size-4" />}
			{name}
			{right_icon && <RightIcon className="size-4" />}
		</Button>
	);
};

export default CustomGradientButton;
