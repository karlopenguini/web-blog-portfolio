import * as React from "react";

import BlogCard from "../components/blog/blogCard";

import { graphql } from "gatsby";

let IndexPage = ({ data }) => {
	let blogPosts = data.portfolio_data.blogPosts.data;
	console.log(blogPosts);
	return (
		<div className="flex flex-col space-y-10">
			<h1 className="font-bold text-lg">Posts</h1>
			{Object.entries(blogPosts).map(([id, data]) => (
				<BlogCard
					title={data.attributes.title}
					date={data.attributes.date}
					description={data.attributes.description}
					slug={data.attributes.slug}
				/>
			))}
		</div>
	);
};
export const query = graphql`
	{
		portfolio_data {
			blogPosts {
				data {
					attributes {
						title
						date
						description
						slug
					}
				}
			}
		}
	}
`;

export default IndexPage;
