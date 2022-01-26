import React from "react";
import { Link } from "gatsby";
import AffilIcons from "./AffilIcons";
import penguin from "../images/pfp.jpg";
import AniLink from "gatsby-plugin-transition-link/AniLink";

let Nav = () => {
	let navlinks = {
		"about me": "/",
		works: "/works",
		resume: "/resume",
		blog: "/blog",
		"contact me": "/contact_me",
		gallery: "/gallery",
	};

	return (
		<nav
			className="
            space-y-8
            z-[1]
        "
		>
			<div className="h-auto w-full aspect-square">
				<img
					src={penguin}
					className="rounded-full object-cover bg-contain grow_effect"
				/>
			</div>

			<nav
				className="
                flex
                flex-col
                overflow-hidden
                slide_from_left
                space-y-5
                min-w-[50%]
            "
			>
				{Object.entries(navlinks).map(([pageName, link]) => (
					<AniLink
						cover
						direction="down"
						to={link}
						bg="#FFFFFF"
						duration={1.5}
						activeClassName="font-bold"
						className="hover-underline-animation pb-1"
					>
						<span className="">{pageName}</span>
					</AniLink>
				))}
			</nav>
			<AffilIcons />
		</nav>
	);
};

export default Nav;
