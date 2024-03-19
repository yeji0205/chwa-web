/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';

const Reveal = ({ children }) => {

	return (
		<div>
			<motion.div
				initial={{
					opacity: 0,
					y:90,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: { duration:0.6, delay: 0.15}
				}}
			>
				{children}
			</motion.div>
		</div>
	)
}

export default Reveal
