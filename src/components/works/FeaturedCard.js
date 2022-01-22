import * as React from "react";

let FeaturedCard = ({ title, year, desc }) => {
    return (
        <article
            className="
            flex
            flex-col-reverse
            bg-slate-600
            w-full
            h-72
            bg-[url('../images/placeholder.jpeg')]
            bg-contain
        "
        >
            <div
                className="
                flex
                flex-row
              bg-black
                w-full
                h-1/4
                px-8
                py-4
                text-white
                justify-between
            "
            >
                <header
                    className="
                    flex
                    flex-col
                    space-y-1
                    w-full
                "
                >
                    <h1 className="test-sm font-bold">{title}</h1>
                    <h5 className="test-xs">{year}</h5>
                </header>
                <p className="text-[9px] text-right">{desc}</p>
            </div>
        </article>
    );
};

export default FeaturedCard;
