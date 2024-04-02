import React from 'react';
import Reveal from './utils/Reveal'
import { motion } from 'framer-motion'
import chwa from '../assets/logo_eng_kr.png'

const Introduction = () => {

	return (
		<Reveal>
		<div className='md:flex w-full h-[50%] justify-center items-center md:mb-[20%] mb-[50%] md:mt-[1%] md:px-[10%] px-0' >
			<div className='md:flex md:mt-0 mt-[10%] flex-auto md:justify-end justify-center items-center '
			>
				<motion.img src={chwa} alt='주인사진'
					className='basis-1/2 md:w-[30vw] max-w-[300px] w-[40vw] mb-5 md:mx-0 md:ml-[30%] mx-auto'
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 1.0,
						delay: 0.5,
						ease: [0, 0.71, 0.2, 1.01]
					}}
				/>
			</div>
			<motion.div
				className='basis-1/2 text-center border-dotted border-y-[0.2rem] border-[#F13625] md:w-[40vw] mx-[10%] md:mx-[5%] md:mr-[12%] md:ml-[5%] w-100'
				initial={{
					opacity: 0,
					x: -35,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					transition: { duration: 1, delay: 0.2},
				}}
			>
				<p className='md:text-base leading-loose text-sm font-bold p-10'>
				북가좌동 검보, 맥주파는 주화시장입니다!<br /><br />
				검보는 닭고기, 소세지를 베이스로 새우 및 여러 야채와 향신료를 넣고 푹 끓인 미국 남부지역 소울푸드예요.<br />
				우리나라의 육개장이나 부대찌개 느낌의 요리라 이름은 생소하나 맛은 우리 한국인 입맛에 잘 맛는 요리랍니다.<br /><br />
				20년간 맥주 동호회를 운영하신 아버지의 영향으로 맥주 선별에 심혈을 기울이고 있습니다.<br />
				다른 곳에서 보기 드문 맥주도 맛보실 수 있어요.<br /><br />
				검보 외에도 다른 메뉴를 판매하나, 변경될 수 있으니
				<a className='hover:cursor-pointer text-rose-400 hover:text-[#F13625] hover:font-black'
					onClick={()=> window.open('https://www.instagram.com/chwa_market')}> 인스타그램</a> 에서 확인해주세요.<br /><br />
				한걸음 한걸음 발전하는 주화시장이 되겠습니다. 감사합니다!<br />
				</p>
			</motion.div>
		</div>
		</Reveal>
	)
}
export default Introduction
