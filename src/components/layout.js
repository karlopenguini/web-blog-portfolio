import React from "react"
import Nav from "./nav"
import { motion } from "framer-motion"
import MobileNav from "./MobileNavBar/mobileNav"

export default function Layout({ children, path }) {
	let location = children.props.path.split("/").filter((str) => {
		return /\S/.test(str)
	})

	return (
		<div
			className='
				h-auto
				lg:font-normal 
				font-light
			'>
			{location[0] === "gallery" && location.length > 1 ? (
				<main className='w-full h-screen'>{children}</main>
			) : (
				<>
					<nav className='sticky top-0 h-24 lg:hidden z-[1000]'>
						<MobileNav />
					</nav>
					<main
						className='
						px-6
						lg:pt-32
						lg:mx-auto
						text-sm
						lg:flex
						lg:flex-col
						lg:max-w-[52.5rem]
						lg:pb-14
						lg:h-screen
						pt-4
						pb-24
    				'>
						<section class='lg:flex lg:flex-row lg:pt-0'>
							<nav
								className='
								hidden 
								lg:block 
								flex-grow 
								flex-shrink 
								basis-[15%] 
								min-w-[123px]
							'>
								<Nav />
							</nav>
							<motion.article
								initial={{
									opacity: 0,
									y: "-100%",
								}}
								animate={{
									opacity: 1,
									y: "0%",
									transition: {
										type: "spring",
										duration: 1.2,
									},
								}}
								className='
								lg:flex-grow 
								lg:flex-shrink 
								lg:basis-[85%] 
								lg:pl-[17%] 
								lg:max-h-[670px] 
								lg:overflow-y-scroll
								w-full
								scroll-smooth
								z-0
							'>
								{children}
							</motion.article>
						</section>

						<motion.footer
							initial={{
								opacity: 0,
								y: "100%",
							}}
							animate={{
								opacity: 1,
								y: "0%",
								transition: {
									type: "spring",
									duration: 1.2,
								},
							}}
							className='
							hidden
							w-full
							text-center
							mt-auto
							text-xs
							font-medium
							lg:block
							lg:text-sm
					'>
							Built with Gatsby
							<br />© Karlo Miguel Palisoc | All rights reserved.
						</motion.footer>
					</main>
				</>
			)}
		</div>
	)
}
