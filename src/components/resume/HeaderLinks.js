import React from "react";
import { Link } from "gatsby";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Button from "../button";
import AffilIcons from "../AffilIcons";
let HeaderLinks = ({ url }) => {
	return (
		<div
			className="
            flex
            content-center
            space-x-4
            items-center
			min-h-[2rem]
			pl-2
        "
		>
			<AffilIcons />
			<Button text="Resume" url={url} />
		</div>
	);
};

export default HeaderLinks;
