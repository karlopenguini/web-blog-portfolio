import React from "react"
import MDX from "@mdx-js/runtime"
import { useLocation } from "@reach/router"

import {
	FacebookShareButton,
	TwitterShareButton,
	RedditShareButton,
	FacebookIcon,
	TwitterIcon,
	RedditIcon,
} from "react-share"

import { motion } from "framer-motion"

export default function BlogPostLayout(data) {
	console.log(data.pageContext)
	const { title, description, date, blogContent } = data.pageContext
	let ymdStringify = (ymdDate) => {
		let [year, month, _date] = ymdDate.split("-")
		console.log(year, month, _date)
	}

	return (
		<div className=''>
			<header className='flex flex-col'>
				<div className='flex justify-between items-center'>
					<p className='text-base'>Karlo Palisoc | {date}</p>
					<div className='flex space-x-4'>
						<FacebookShareButton url={useLocation().href}>
							<FacebookIcon size={32} round={true} />
						</FacebookShareButton>

						<TwitterShareButton url={useLocation().href}>
							<TwitterIcon size={32} round={true} />
						</TwitterShareButton>

						<RedditShareButton url={useLocation().href}>
							<RedditIcon size={32} round={true} />
						</RedditShareButton>
					</div>
				</div>

				<h1 className='font-black pt-6 text-5xl'>{title}</h1>
				<h3 className='pt-8 text-2xl font-medium'>{description}</h3>
			</header>
			<MDX>{blogContent}</MDX>
		</div>
	)
}
