/* eslint-disable no-unused-vars */
import React from 'react'
import { NavermapsProvider } from 'react-naver-maps'
import MapContainer from './MapContainer'
import Reveal from './utils/Reveal';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const MyMap = () => {

	return (
		<Reveal>
			<div className='md:py-[15%] pt-[30%] pb-[5%]' id='how-to-get'>
				<p className='text-xl text-center font-bold mb-[10%]'>오시는 길 <PlaceIcon /></p>
				<div className='md:flex flex-none relative justify-cetner'>
					<div className='md:flex md:w-2/3 w-100vw relative md:ml-[15vw] ml-0 mr-[2%]'>
					<NavermapsProvider
						ncpClientId={import.meta.env.VITE_API_MAP_KEY_ID}>
						<MapContainer />
					</NavermapsProvider>
					</div>
				<div className='md:flex md:w-1/3 md:mr-[15vw] justify-center items-center md:text-base text-md'>
					<p className='font-bold md:px-0 md:py-0 px-[15%] py-[5%]'> 서울 서대문구 증가로32안길 31-9 1층.<br /> 증산역 1번 출구에서 277m<br /><br />
					화 - 토 &emsp;12:00 - 21:00 <br /> &emsp;&emsp;&emsp;&emsp;(라스트오더 20:30)<br />
					일 &emsp;&emsp;&emsp;12:00 - 20:00 <br /> &emsp;&emsp;&emsp;&emsp;(라스트오더 19:30)<br />
					월 &emsp;&emsp;&emsp;정기휴무 <br />
					매월 마지막 주 월,화 정기휴무<br /><br />

					<CallIcon fontSize='small'/><a href="tel:+82 507-0178-2871" className='hover:text-[#F13625]'> 0507-0178-2871</a><br />
					<DeliveryDiningIcon /><a onClick={()=> window.open("https://baemin.me/uUtvBbEXG")} className='hover:text-[#F13625] hover:cursor-pointer'> 배달의 민족</a>
					</p>
				</div>
			</div>
		</div>
		</Reveal>
	)
}

export default MyMap
