import React from "react"
import { useLocation } from "@reach/router"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"

import {
	FacebookShareButton,
	TwitterShareButton,
	RedditShareButton,
	FacebookIcon,
	TwitterIcon,
	RedditIcon,
} from "react-share"

export default function BlogPostLayout(data) {
	console.log(data.pageContext)
	const { title, description, date, blogContent } = data.pageContext

	return (
		<div className='h-full overflow-y-scroll'>
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

				<h1 className='font-black pt-8 text-5xl tracking-wider'>
					{title}
				</h1>
				<h3 className='pt-8 text-2xl font-medium'>{description}</h3>
			</header>

			<div className='pt-14'>
				<ReactMarkdown
					children={blogContent}
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeHighlight]}
					className='prose'
				/>
			</div>
		</div>
	)
}
