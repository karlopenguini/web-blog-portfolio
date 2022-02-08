import * as React from "react"

import BlogCard from "../components/blog/blogCard"

import { graphql } from "gatsby"

let IndexPage = ({ data }) => {
	let blogPosts = data.allStrapiBlogPost.edges

	return (
		<div className='flex flex-col space-y-10'>
			<h1 className='font-bold text-2xl tracking-wider'>Posts</h1>
			{Object.keys(blogPosts).length ? (
				Object.entries(blogPosts).map(([id, data]) => (
					<BlogCard
						title={data.node.title}
						date={data.node.date}
						description={data.node.description}
						slug={data.node.slug}
					/>
				))
			) : (
				<p>No posts yet!</p>
			)}
		</div>
	)
}
export const query = graphql`
	{
		allStrapiBlogPost {
			edges {
				node {
					title
					date
					slug
					description
					blogContent
				}
			}
		}
	}
`

export default IndexPage
