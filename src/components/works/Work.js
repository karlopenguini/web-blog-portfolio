import * as React from "react";
import { MdArrowRight } from "react-icons/md";

let Work = ({ title, desc }) => {
    return (
        <div
            className="
            flex
            justify-between
            items-center
        "
        >
            <header>
                <h1
                    className="
                    text-sm
                    font-bold
                "
                >
                    {title}
                </h1>
                <p
                    className="
                    text-xs
                "
                >
                    {desc}
                </p>
            </header>
            <MdArrowRight className="h-7 w-7" />
        </div>
    );
};

export default Work;
