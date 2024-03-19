import React from 'react'
import {Container as MapDiv, NaverMap, Marker, useNavermaps} from 'react-naver-maps'
import chwaMarker from '../assets/marker.png'


function MapContainer() {

	const navermaps = useNavermaps()

	return (
		<MapDiv className='border-white border-8 md:w-[95%] w-[100vw] h-[40vh]'>
			<NaverMap
				defaultCenter={new navermaps.LatLng(37.5843955, 126.9125106)}
				defaultZoom={16}>
				<Marker
					defaultPosition={new navermaps.LatLng(37.5843955, 126.9125106)}
					onClick={() => {window.open("https://m.place.naver.com/share?id=1166325015&tabsPath=%2Fhome&appMode=detail")}}
					icon={{ url: chwaMarker,
									scaledSize: {width: 60, height:78},}}/>
			</NaverMap>
		</MapDiv>
	)
}

export default MapContainer
