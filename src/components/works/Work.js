import * as React from "react"
import { MdArrowRight } from "react-icons/md"

let Work = ({ title, desc }) => {
	return (
		<div
			className='
            flex
            justify-between
            items-center
        '>
			<header>
				<h1
					className='
                    text-base
                    font-medium
                '>
					{title}
				</h1>
				<p
					className='
					pt-2
                    text-sm
					text-zinc-800
                '>
					{desc}
				</p>
			</header>
			<MdArrowRight className='min-h-[1rem] min-w-[1rem] ml-9' />
		</div>
	)
}

export default Work
