import React from "react"

export default function BlogPostLayout(data) {
	console.log(data.pageContext)
	const { title, description, date, blogContent } = data.pageContext
	let ymdStringify = (ymdDate) => {
		let [year, month, _date] = ymdDate.split("-")
		console.log(year, month, _date)
	}

	return (
		<div className=''>
			<header className='flex flex-col'>
				<p className='text-base'>Karlo Palisoc | {date}</p>
				<h1 className='font-black pt-4 text-5xl'>{title}</h1>
				<h3 className='pt-10 text-2xl font-medium'>{description}</h3>
			</header>
			<div className='pt-10'>{blogContent}</div>
		</div>
	)
}
