import React from "react"

export default function image({ title, date, description, image }) {
	let image_url = "http://localhost:1337" + image.data.attributes.url
	let imageY = image.data.attributes.height
	let imageX = image.data.attributes.width
	let getSpanEstimate = (size) => {
		if (parseInt(size) > 250) {
			return 2
		}
		return 1
	}

	return (
		<div
			className={
				"col-end-" +
				getSpanEstimate(imageX) +
				" row-end-" +
				getSpanEstimate(imageY)
			}>
			<img className=' min-w-full min-h-full' src={image_url} />
		</div>
	)
}
