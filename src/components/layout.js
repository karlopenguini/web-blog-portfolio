import React from "react"
import Nav from "./nav"

export default function Layout({ children, transitionStatus, entry, exit }) {
	return (
		<div
			className='
	  lg:pt-32
      mx-auto
      text-sm
      flex
      flex-col
      max-w-[52.5rem]
      h-[100vh]
      pb-14
    '>
			<main class='flex h-full content_layout'>
				<div className='z-[100000]'>
					<Nav />
				</div>

				<section className='pl-[20%] min-h-0 max-h-[670px] h-full overflow-y-scroll no-scrollbar scroll-smooth overflow-x-visible'>
					{children}
				</section>
			</main>

			<footer
				className='
                w-full
        text-center
        mt-auto
		z-[100000]
        font-medium
		
      '>
				Built with Gatsby
				<br />© Karlo Miguel Palisoc | All rights reserved.
			</footer>
		</div>
	)
}
