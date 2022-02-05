import React from "react"

export default function image({ title, date, description, image }) {
	let image_url = "http://localhost:1337" + image.data.attributes.url

	return (
		<div className='relative w-full h-auto aspect-square z-0'>
			<img
				className='absolute w-full h-full object-cover'
				src={image_url}
			/>
			<div className='absolute bottom-0 w-full h-full opacity-0 hover:opacity-100'>
				<div className=' bg-gradient-to-t h-full justify-end  from-black flex flex-col text-white p-4'>
					<h1 className='text-bold text-lg'>{title}</h1>
					<p>{date}</p>
					<p className=''>{description}</p>
				</div>
			</div>
		</div>
	)
}
