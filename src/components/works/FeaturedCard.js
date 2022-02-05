import * as React from "react"

let FeaturedCard = ({ title, year, desc, img }) => {
	let cardImg = "http://localhost:1337" + img

	return (
		<article className='flex flex-col w-full shadow-2xl '>
			<img className='max-h-[200px] w-full object-cover' src={cardImg} />

			<div
				className='
                flex
                flex-row
              bg-black
                w-full
                px-8
                py-4
                text-white
                justify-between
                min-h-[69px]
            '>
				<header
					className='
                    flex
                    flex-col
                    space-y-1
                    w-full
                    
                '>
					<h1 className='test-sm font-bold tracking-wide'>{title}</h1>
					<h5 className='test-xs'>{year}</h5>
				</header>
				<p className='text-xs font-light text-right'>{desc}</p>
			</div>
		</article>
	)
}

export default FeaturedCard
