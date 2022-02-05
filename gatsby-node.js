const { notDeepEqual } = require("assert")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
		query MyQuery {
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
				galleries {
					data {
						attributes {
							date
							description
							title
							slug
							image {
								data {
									attributes {
										url
									}
								}
							}
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

	let listOfImagePath = []

	data.portfolio_data.galleries.data.forEach((node) => {
		listOfImagePath.push(node.attributes.slug)
	})
	data.portfolio_data.galleries.data.forEach((node) => {
		actions.createPage({
			path: "/gallery/" + node.attributes.slug,
			component: path.resolve("./src/components/gallery/imageLayout.js"),
			context: {
				title: node.attributes.title,
				date: node.attributes.date,
				description: node.attributes.description,
				image: node.attributes.image,
				slug: node.attributes.slug,
				imagePaths: listOfImagePath,
			},
		})
	})
}
