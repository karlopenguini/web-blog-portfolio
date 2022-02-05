import React from "react"
import { motion, useCycle } from "framer-motion"
import useDimensions from "react-use-dimensions"
import { MenuIcon } from "./menuIcon"
import { Link } from "gatsby"
const sidebar = {
	open: (height = 500) => ({
		clipPath: `circle(${height * 2 + 200}px at 100px 80px)`,
		backgroundColor: "#000000",
		transition: {
			type: "tween",
			duration: 0.5,
		},
	}),
	closed: {
		clipPath: `circle(0px at 35px 28px)`,
		backgroundColor: "#FFFFFF",
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
}
let navlinks = {
	"about me": "/",
	works: "/works",
	resume: "/resume",
	blog: "/blog",
	"contact me": "/contact_me",
	gallery: "/gallery",
}

export default function MobileNav() {
	const [isOpen, toggleOpen] = useCycle(false, true)

	const [containerRef, { height }] = useDimensions()
	return (
		<motion.nav
			initial={false}
			animate={isOpen ? "open" : "closed"}
			custom={height}
			ref={containerRef}
			className='w-full h-full relative'>
			<MenuIcon toggle={() => toggleOpen()} />
			<motion.li
				variants={sidebar}
				className=' justify-between pl-2 pr-2 pt-14 sm:pr-16 sm:pl-16  text-sm sm:pt-9 flex absolute text-white h-full w-full z-20'>
				{Object.entries(navlinks).map(([pageName, link]) => (
					<Link
						to={link}
						activeClassName='font-bold'
						className='pb-1'>
						<span className=''>{pageName}</span>
					</Link>
				))}
			</motion.li>
			<motion.div
				className='w-full absolute h-full z-10'
				variants={sidebar}
			/>
		</motion.nav>
	)
}
