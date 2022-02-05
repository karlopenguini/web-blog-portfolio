import * as React from "react"
import { Link } from "gatsby"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { motion } from "framer-motion"

let hoverVariants = {
	hover: {
		scale: 1.1,
	},
	tap: {
		scale: 0.9,
	},
}

let AffilIcons = () => {
	return (
		<div
			className='
            flex
            space-x-4
            items-center
        '>
			<Link to='https://github.com/karlopenguini' target='_blank'>
				<motion.div
					variants={hoverVariants}
					whileHover='hover'
					whileTap='tap'>
					<FaGithub className='w-7 h-7' />
				</motion.div>
			</Link>
			<Link to='https://www.linkedin.com/in/kmfpalisoc/' target='_blank'>
				<motion.div
					variants={hoverVariants}
					whileHover='hover'
					whileTap='tap'>
					<FaLinkedinIn className='w-7 h-7' />
				</motion.div>
			</Link>
		</div>
	)
}

export default AffilIcons
