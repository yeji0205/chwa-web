import React, { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { menus } from "../content_text";
import Reveal from './utils/Reveal';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';


const MenuGallery = () => {

	const [ zoom, setZoom ] = useState(false);
	const [ temImgSrc, setTempImgSrc ] = useState('');
	const boxStyle = 'rounded-xl p-1 flex flex-col items-center justify-center'

	const getImg = (imgSrc) => {
		setTempImgSrc(imgSrc);
		setZoom(true);
	}

	useEffect(() =>  {
		const openZoom = () => {document.body.style.overflow = 'hidden';}
		const closeZoom = () => {document.body.style.overflow = '';}

		if (zoom) openZoom()
		else closeZoom()
		return () => closeZoom()
	}, [zoom])

	return (
		<div id='menu' className='py-[15%]'>
			<div className={zoom? 'zoom open' : 'zoom'}>
					<img src={temImgSrc} />
					<CloseIcon fontSize='small' onClick={()=> setZoom(false)} />
			</div>
		<Reveal>
		<p className='text-xl font-bold text-center mb-[10%]'>메뉴 갤러리 <LocalDiningOutlinedIcon /></p>

				{/* Bento Grid */}
				<div className='grid md:grid-cols-4 grid-cols-2 auto-rows-[250px] gap-2 mt-[1%]'>
					{menus.map((item, index)=> {
						return(
							<div className={`${boxStyle}
								${index === 0 || index === 9 ? 'sm:col-span-2': ''}
								${index === 2 ? 'sm:row-span-2': ''}
								${index === 4 ? 'sm:row-span-2 sm:col-span-2': ''}
								`}
								key={index} onClick={()=> getImg(item.imgSrc)}>
								<img src={item.imgSrc} className='relative w-[100%] h-[100%] border-2 border-black rounded-lg overflow-hidden object-cover hover:border-[#F13625] hover:cursor-zoom-in hover:rotate-3'/>
							</div>)
					})}
				</div>
			</Reveal>
		</div>
	)
}

export default MenuGallery