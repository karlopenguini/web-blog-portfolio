import * as React from "react"
import { graphql, Link } from "gatsby"
import Image from "../components/gallery/image.js"

let IndexPage = ({ data }) => {
	let images = data.allStrapiGallery.edges

	let imageComponentsData = {}

	for (const [key, value] of Object.entries(images)) {
		imageComponentsData[key] = value.node
	}

	return (
		<div>
			<div className='grid md:grid-cols-2 grid-cols-3 md:gap-4 gap-1'>
				{Object.entries(imageComponentsData).map(
					([id, { title, date, description, image, slug }]) => (
						<Link to={slug}>
							<Image
								title={title}
								date={date}
								description={description}
								image={image}
							/>
						</Link>
					)
				)}
			</div>
		</div>
	)
}

export const query = graphql`
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
						width
						height
					}
				}
			}
		}
	}
`
export default IndexPage
