import React from "react";

interface IWrapperProps {
	className?: string;
	children: React.ReactNode;
}
export default function MaxWidthWrapper({
	className,
	children,
}: IWrapperProps) {
	return (
		<div
			className={`h-full mx-auto max-w-full mx:max-w-screen-xl px-4 md:px-12 lg:px20 ${className}`}
    >
      {children}
    </div>
	);
}
