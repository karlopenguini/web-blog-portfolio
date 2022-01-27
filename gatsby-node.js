const { notDeepEqual } = require("assert")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
		query BlogPosts {
			portfolio_data {
				blogPosts {
					data {
						attributes {
							title
							date
							slug
							description
							blogContent
						}
					}
				}
			}
		}
	`)
	data.portfolio_data.blogPosts.data.forEach((node) => {
		actions.createPage({
			path: "/blog/" + node.attributes.slug,
			component: path.resolve("./src/components/blog/blogPostLayout.js"),
			context: {
				title: node.attributes.title,
				date: node.attributes.date,
				description: node.attributes.description,
				blogContent: node.attributes.blogContent,
			},
		})
	})
}
