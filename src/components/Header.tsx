import React from "react";

interface Props {
	title: string;
}

const Header = ({ title }: Props) => {
	return (
		<div className="mx-auto max-w-screen-xl p-4 py-8">
			<h1 className="mb-2">
				<span className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-tr from-purple-400 to bg-purple-600 md:text-5xl tracking-tighter">
					{title}
				</span>
			</h1>
		</div>
	);
};

export default Header;
