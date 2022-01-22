import React from "react";
import { Link } from "gatsby";
import AffilIcons from "./AffilIcons";

let navlinks = {
    "about me": "/",
    works: "/works",
    resume: "/resume",
    blog: "/blog",
    "contact me": "/contact_me",
    gallery: "/gallery",
};

let Nav = () => {
    return (
        <main
            className="
            flex
            flex-col
            space-y-8
        "
        >
            <figure
                className="
                rounded-full
                bg-[url('../images/pfp.jpg')]
                bg-cover
                w-32
                h-32
            "
            ></figure>

            <nav
                className="
                flex
                flex-col
                space-y-6
            "
            >
                {Object.entries(navlinks).map(([pageName, link]) => (
                    <Link to={link} activeClassName="font-bold">
                        /{pageName}
                    </Link>
                ))}
            </nav>
            <AffilIcons />
        </main>
    );
};

export default Nav;
