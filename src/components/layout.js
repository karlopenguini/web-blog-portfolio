import React from "react";
import Nav from "./nav";

export default function Layout({ children, transitionStatus, entry, exit }) {
	return (
		<div
			className="
	  lg:pt-32
	  
      mx-auto
      text-sm
      flex
      flex-col
      max-w-[52.5rem]
      h-[100vh]
      pb-24
      
    "
		>
			<main class="flex h-full content_layout space-x-[20%]">
				<Nav />

				<section className="min-h-0 max-h-[670px] overflow-y slide_from_top h-full overflow-y-scroll no-scrollbar scroll-smooth pt-2">
					<div className={transitionStatus}>{children}</div>
				</section>
			</main>

			<footer
				className="
                w-full
        text-center
        mt-auto
		slide_from_bottom
      "
			>
				Designed and Built by Karlo Miguel Palisoc
			</footer>
		</div>
	);
}
