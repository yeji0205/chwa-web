import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {

	return (
		<footer className='grid sm:grid-cols-2 gap-1 sm:py-[2%] py-[5%] sm:mb-0 mb-10 bg-white sm:rounded-t-full justify-center'>

			<div className='flex justify-center items-center sm:ml-[20%] '>
				<p className='font-poppins sm:text-sm text-xs sm:text-left text-center'> <CopyrightIcon style={{fontSize: '1em'}} /> 2024 Chonghwa Park. All rights reserved.<br />
				<span className='text-xs text-slate-400	'>This website made by
					<a className='hover:text-[#F13625] hover:font-semibold hover:cursor-pointer ' onClick ={()=> window.open('https://first-universe.vercel.app/')}> Yeji</a>
				</span>
				</p>
			</div>

			<div className='justify-center sm:w-full flex items-center sm:mr-[20%] my-[6%]'>
					<p className='text-sm font-poppins text-center'>
					Follow us &ensp;
					<InstagramIcon fontSize='medium' sx={{ "&:hover": { color: '#F13625', transition: 'color', cursor: 'pointer'} }} onClick={()=> window.open('https://www.instagram.com/chwa_market')} /> </p>

					</div>
		</footer>

	)
}

export default Footer
