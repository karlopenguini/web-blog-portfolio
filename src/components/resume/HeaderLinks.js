import React from "react";
import { Link } from "gatsby";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Button from "../button";

let HeaderLinks = () => {
    return (
        <div
            className="
            flex
            content-center
            space-x-4
            items-center
        "
        >
            <Link to="https://github.com/karlopenguini" target="_blank">
                <FaGithub className="w-7 h-7" />
            </Link>
            <Link to="https://www.linkedin.com/in/kmfpalisoc/" target="_blank">
                <FaLinkedinIn className="w-7 h-7" />
            </Link>
            <Button />
        </div>
    );
};

export default HeaderLinks;
