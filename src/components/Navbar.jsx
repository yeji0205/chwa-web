/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { navLinks } from "../content_text";
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState("");

	return (
		<div className= "fixed z-30">

		<nav className={`sm:py-6 py-3 w-full flex items-center z-10}`}>
			<div className='fixed w-full justify-between items-center bg-skin/50 sm:backdrop-blur-sm'>
				<ul className='list-none pt-[3%] pb-[1%] justify-center flex-1 sm:flex hidden'>
					{navLinks.map((link) => (
						<li key={link.id}
								className={`${link.index === navLinks.length-1 ? 'mr-0' : 'mr-10'}
													${active === link.title ? 'text-[#F13625]' : 'text-black'}
													hover:text-[#F13625] text-lg font-bold cursor-pointer z-20`}
								onClick={() => setActive(link.title)} >
								<HashLink to={`#${link.id}`} smooth>
									{link.title}
								</HashLink>
						</li>

					))}
				</ul>

				<div className='sm:hidden fixed w-full z-30'>
					<div className='flex justify-center '>
						<div className='fixed py-4 px-[15%] bottom-0 w-full backdrop-blur-sm bg-white/50  z-10'>
							<ul className="list-none flex justify-between items-center ">
									{navLinks.map((link) => (
								<li key={link.id}
										className='cursor-pointer text-base font-bold text-black hover:text-[#F13625]'>
									<HashLink to={`#${link.id}`} smooth>
										{link.title}
									</HashLink>
								</li>))}
							</ul>
						</div>
				</div>
			</div>

		</div>
	</nav>
	</div>
	)
}

export default Navbar
