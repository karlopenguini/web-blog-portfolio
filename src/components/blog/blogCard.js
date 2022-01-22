import React from "react";
import { Link } from "gatsby";

export default function BlogCard({ title, date, description, slug }) {
    return (
        <Link to={slug}>
            <div className="flex">
                <div className="bg-stone-700 w-1"></div>
                <section className="pl-5 bg-zinc-50 w-full  py-4">
                    <h1 className="font-bold text-lg pb-2">{title}</h1>
                    <p className="text-xs pb-1">{date}</p>
                    <p className="text-sm">{description}</p>
                </section>
            </div>
        </Link>
    );
}
