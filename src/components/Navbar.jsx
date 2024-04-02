/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { navLinks } from "../content_text";
import { HashLink } from 'react-router-hash-link';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';


const Navbar = () => {

	return (
		<div className= "fixed z-30">

		<nav className={`sm:py-6 py-3 w-full flex items-center z-10}`}>
			<div className='fixed w-full justify-between items-center bg-skin/50 sm:backdrop-blur-sm'>
				<ul className='list-none pt-[3%] pb-[1%] justify-center flex-1 sm:flex hidden'>
					{navLinks.map((link) => (
						<li key={link.id}
								className={`${link.index === navLinks.length-1 ? 'mr-0' : 'mr-10'}
													hover:text-[#F13625] text-lg font-bold cursor-pointer z-20`}>
								<HashLink to={`#${link.id}`} smooth>
									{link.title}
								</HashLink>
						</li>
					))}
					<li onClick={()=> window.open("https://baemin.me/uUtvBbEXG")} className='delivery hover:text-[#F13625] text-lg font-bold cursor-pointer z-20'>
					<DeliveryDiningIcon />배달
					</li>
				</ul>

				<div className='sm:hidden fixed w-full z-30'>
						<div className='fixed pt-5 pb-7 px-[10%] bottom-0 w-full backdrop-blur-sm bg-white/50 z-10'>
							<ul className="list-none flex justify-between items-center ">
									{navLinks.map((link) => (
								<li key={link.id}
										className='cursor-pointer text-base font-bold text-black hover:text-[#F13625]'>
									<HashLink to={`#${link.id}`} smooth>
										{link.title}
									</HashLink>
								</li>))}
								<li onClick={()=> window.open("https://baemin.me/uUtvBbEXG")} className='delivery hover:text-[#F13625] text-lg font-bold cursor-pointer z-20'>
								<DeliveryDiningIcon />배달
								</li>
							</ul>
						</div>
				</div>
			</div>

		{/* </div> */}
	</nav>
	</div>
	)
}

export default Navbar
