import React from "react";

const Navbar = () => {
	return (
		<div className="bg-[#FFFFFF]">
			{/*  */}
			<div className="container mx-auto p-2 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
				<h2 className="text-xl font-bold">CS — Ticket System</h2>
				<nav>
					<ul className="flex flex-col lg:flex-row items-center lg:gap-16 gap-5">
						<li className="">
							<a
								href="#"
								className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
							>
								Home
							</a>
						</li>
						<li className="">
							<a
								href="#"
								className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
							>
								FAQ
							</a>
						</li>
						<li className="">
							<a
								href="#"
								className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
							>
								Changelog
							</a>
						</li>
						<li className="">
							<a
								href="#"
								className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
							>
								Blog
							</a>
						</li>
						<li className="">
							<a
								href="#"
								className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
							>
								Download
							</a>
						</li>
						<li className="">
							<a
								href="#"
								className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
							>
								Contact
							</a>
						</li>
						<div>
							<button className="btn text-white mt-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
								+ New Ticket
							</button>
						</div>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
