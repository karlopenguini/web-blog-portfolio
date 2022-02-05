import * as React from "react"
import { graphql, Link } from "gatsby"
import Image from "../components/gallery/image.js"

function getSpanEstimate(size) {
	if (size > 250) {
		return 2
	}
	return 1
}

let IndexPage = ({ data }) => {
	let images = data.portfolio_data.galleries.data

	let imageComponentsData = {}

	for (const [key, value] of Object.entries(images)) {
		imageComponentsData[key] = value.attributes
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
		portfolio_data {
			galleries {
				data {
					attributes {
						date
						description
						title
						image {
							data {
								attributes {
									url
									height
									width
								}
							}
						}
						slug
					}
				}
			}
		}
	}
`
export default IndexPage
