/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties } from "react";
import { Button } from "./ui/button";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
interface ButtonProps {
	name: string;
	left_icon?: IconType;
	right_icon?: IconType;
	className?: string;
	style?: CSSProperties | any;
}

const CustomButton = ({ name, left_icon, right_icon, className, style, ...rest }: ButtonProps) => {
	const LeftIcon: IconType | any = left_icon;
	const RightIcon: IconType | any = right_icon;
	const base = `bg-transparent rounded-full text-white text-[15px] !px-5 !py-6 cursor-pointer hover:text-white! transition-all ease-in-out duration-400 font-semibold`;
	return (
		<Button className={cn(base, className)} style={style} {...rest}>
			{left_icon && <LeftIcon className="size-5" />}
			{name}
			{right_icon && <RightIcon className="size-5" />}
		</Button>
	);
};

export default CustomButton;
