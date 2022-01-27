import * as React from "react"
import placeholder from "../images/placeholder.jpeg"
import penguin from "../images/pfp.jpg"
import icon from "../images/icon.png"
import { graphql } from "gatsby"
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
		<div className='gridContainer'>
			{Object.entries(imageComponentsData).map(
				([id, { title, date, description, image }]) => (
					<Image
						title={title}
						date={date}
						description={description}
						image={image}
					/>
				)
			)}
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
					}
				}
			}
		}
	}
`
export default IndexPage
