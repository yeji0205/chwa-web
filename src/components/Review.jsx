import React, { useState, useEffect } from 'react';
import Reveal from './utils/Reveal';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


const Review = () => {

	/* Fetching the data from Naver API ********************************************/
	// 데이터를 조회할 때마다 목록을 갱신하니까, 즉 state가 변경되니까, useState이용한다.
	const [articles, setArticles] = useState([])

	const fetchData = () => {
		// const apiUrl = '/v1/search/blog?query=' + encodeURI('주화시장 검보 맛집') + '&display=8';
		const apiURL = '/v1/search/blog?query=' + encodeURI('주화시장 검보 맛집') + '&display=8'

		return fetch(apiURL, {
					method: 'GET',
					headers: {
						'Content-Type':'application/json',
						'X-Naver-Client-Id': import.meta.env.VITE_API_BLOG_KEY_ID,
						'X-Naver-Client-Secret': import.meta.env.VITE_API_BLOG_KEY_SECRET
					}
		}).then((response) => response.json())
			.then((data) => {
				setArticles(data.items);})
	}

	useEffect(() => {
		fetchData()
	},[])

	return (
		<div className='relative md:py-[0%] pt-[30%] pb-[15%] sm:px-[13%] px-[10%]' >
			<p id='review' className='text-xl text-center font-bold mb-[10%] pt-[15%]'>블로그 리뷰 <FavoriteOutlinedIcon /></p>
			<Reveal>
			<div className='grid md:grid-cols-4 grid-cols-2 auto-row-[150px] md:gap-[3rem] gap-[2rem] '>
					{articles.map((list, index) => (
						<a key={index} href={list.link} target='_blank'
						className='md:text-base text-sm text-black border-black border-2 rounded-lg w-auto h-full p-[12%] hover:shadow-[5px_10px_rgba(249,68,73,0.9)] hover:-translate-y-2 hover:border-[rgba(249,68,73,0.9)] hover:border-0.5 flex flex-col  justify-center'>
							{list.title.replace(/<b>/g, "").replace(/<\/b>/g,"")} <br /><br />
							<div className='md:text-sm text-xs text-right italic text-black/60'>{list.bloggername.replace(/<b>/g, "").replace(/<\/b>/g,"")}</div>
							</a>
						))}
			</div>
			</Reveal>
		</div>
	)
}

export default Review
