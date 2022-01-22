import * as React from "react";
import { Link } from "gatsby";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

let AffilIcons = () => {
    return (
        <div
            className="
            flex
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
        </div>
    );
};

export default AffilIcons;
