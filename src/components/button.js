import * as React from "react"
import { FiDownload } from "react-icons/fi"

let Button = ({ text, url }) => {
	return (
		<div className=''>
			<a
				className='flex space-x-2 bg-black box-border text-white px-4 py-1 items-center'
				href={"http://localhost:1337" + url}
				target='_blank'>
				<span className='text-lg'>{text}</span>
				<FiDownload className='w-5 h-5' />
			</a>
		</div>
	)
}

export default Button
