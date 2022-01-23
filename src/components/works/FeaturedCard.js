import * as React from "react";

let FeaturedCard = ({ title, year, desc, img }) => {
    let cardImg = "http://localhost:1337" + img;

    return (
        <article className="flex flex-col-reverse w-full h-72">
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
            <div className="min-h-0 bg-top bg-cover overflow-hidden border-[1px] border-black">
                <img className="" src={cardImg} />
            </div>
        </article>
    );
};

export default FeaturedCard;
