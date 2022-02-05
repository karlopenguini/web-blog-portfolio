import React from "react"
import AffilIcons from "./AffilIcons"
import penguin from "../images/pfp.jpg"
import { Link } from "gatsby"
import { motion } from "framer-motion"

let Nav = () => {
	let navlinks = {
		"about me": "/",
		works: "/works",
		resume: "/resume",
		blog: "/blog",
		"contact me": "/contact_me",
		gallery: "/gallery",
	}

	const sizeUp = {
		hidden: {
			opacity: 0,
			scale: "0%",
			rotate: -40,
		},
		show: {
			opacity: 1,
			scale: "100%",
			rotate: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	const container = {
		hidden: {
			x: "-100%",
		},
		show: {
			x: "0%",
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	const listItem = {
		hidden: {
			x: "-100%",
		},
		show: {
			x: "0%",
		},
	}

	return (
		<nav
			className='
            lg:space-y-8
            w-full
			flex
			lg:flex-col
			items-center
			lg:items-start
			
        '>
			<motion.img
				variants={sizeUp}
				initial='hidden'
				animate='show'
				src={penguin}
				className='hidden lg:block rounded-full object-cover bg-contain  min-w-0 max-w-[123px] h-auto'
			/>
			<motion.nav
				variants={container}
				initial='hidden'
				animate='show'
				className='
                lg:flex
                lg:flex-col
                lg:space-y-5
                lg:min-w-[50%]
				hidden
				w-full
            '>
				{Object.entries(navlinks).map(([pageName, link]) => (
					<motion.div
						variants={listItem}
						key={link}
						className='w-full'>
						<Link
							to={link}
							activeClassName='font-bold'
							className='pb-1 w-full'>
							<span className='hover-1 w-full'>{pageName}</span>
						</Link>
					</motion.div>
				))}
			</motion.nav>
			<div className='hidden lg:block'>
				<AffilIcons />
			</div>
		</nav>
	)
}

export default Nav
