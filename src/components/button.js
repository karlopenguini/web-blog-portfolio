import * as React from "react"
import { FiDownload } from "react-icons/fi"
import { motion } from "framer-motion"

let Button = ({ text, url }) => {
	return (
		<motion.a
			whileHover={{
				scale: 1.05,
				color: "black",
				fontWeight: 500,
				backgroundColor: "white",
				borderColor: "black",
				borderWidth: "1px",
			}}
			className='flex space-x-2 bg-black box-border text-white px-4 py-1 items-center'
			href={"http://localhost:1337" + url}
			target='_blank'>
			<span className='text-lg'>{text}</span>
			<FiDownload className='w-5 h-5' />
		</motion.a>
	)
}

export default Button
