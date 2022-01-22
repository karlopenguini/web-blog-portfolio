import * as React from "react";
import { FiDownload } from "react-icons/fi";

let Button = ({ text, icon }) => {
    return (
        <div>
            <a
                className="flex space-x-2 bg-black text-white px-4 py-1 items-center"
                href=""
                target="_blank"
            >
                <span className="text-lg">Resume</span>
                <FiDownload className="w-5 h-5" />
            </a>
        </div>
    );
};

export default Button;
