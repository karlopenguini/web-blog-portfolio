const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
		{
			allStrapiGallery {
				edges {
					node {
						date
						description
						title
						slug
						image {
							url
						}
					}
				}
			}
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
	`)
	console.log(data)

	data.allStrapiGallery.edges.forEach((node) => {
		actions.createPage({
			path: "/blog/" + node.slug,
			component: path.resolve("./src/components/blog/blogPostLayout.js"),
			context: {
				title: node.title,
				date: node.date,
				description: node.description,
				blogContent: node.blogContent,
			},
		})
	})

	let listOfImagePath = []

	data.allStrapiBlogPost.edges.forEach((node) => {
		listOfImagePath.push(node.slug)
	})
	data.allStrapiBlogPost.edges.forEach((node) => {
		actions.createPage({
			path: "/gallery/" + node.slug,
			component: path.resolve("./src/components/gallery/imageLayout.js"),
			context: {
				title: node.title,
				date: node.date,
				description: node.description,
				image: node.image,
				slug: node.slug,
				imagePaths: listOfImagePath,
			},
		})
	})
}
