import React from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

export default function imageLayout(data) {
	let { title, description, date, image, imagePaths, slug } = data.pageContext

	let imageURL = image.data.attributes.url
	let index = imagePaths.indexOf(slug, 0)

	return (
		<div className='w-full justice-between flex bg-black flex-col text-white h-full'>
			<div className=' relative h-full flex justify-between items-center min-w-0'>
				{index - 1 >= 0 ? (
					<div className=' min-w-[3rem] h-full flex flex-col items-center'>
						<Link
							className='pt-5 opacity-50 hover:opacity-100'
							to='/gallery/'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z'
									fill='white'
								/>
							</svg>
						</Link>

						<Link
							className='h-full w-full pl-[25%] pr-[25%] flex items-center opacity-50 hover:opacity-100'
							to={"/gallery/" + imagePaths[index - 1]}>
							<svg
								className=' relative'
								width='24'
								height='24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M15.535 3.515L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.929L15.535 3.515Z'
									fill='#FFFFFF'
								/>
							</svg>
						</Link>
					</div>
				) : (
					<div className='min-w-[3rem] h-full  flex flex-col items-center'>
						<Link
							className='pt-5   opacity-50 hover:opacity-100'
							to='/gallery/'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z'
									fill='white'
								/>
							</svg>
						</Link>
					</div>
				)}
				<AnimatePresence>
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						src={"http://localhost:1337" + imageURL}
						className='object-scale-down  h-full min-w-0'
					/>
				</AnimatePresence>

				{index + 1 < imagePaths.length ? (
					<div className='min-w-[3rem] h-full flex flex-col items-center'>
						<Link
							className=' h-full w-full pl-[25%] pr-[25%] flex items-center opacity-50 hover:opacity-100'
							to={"/gallery/" + imagePaths[index + 1]}>
							<svg
								className='relative'
								width='24'
								height='24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M8.46501 20.485L16.95 12L8.46501 3.515L7.05001 4.929L14.122 12L7.05001 19.071L8.46501 20.485Z'
									fill='#FFFFFF'
								/>
							</svg>
						</Link>
					</div>
				) : (
					<div className='min-w-[3rem] h-full'></div>
				)}
			</div>
		</div>
	)
}
