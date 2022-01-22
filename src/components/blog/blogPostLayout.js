import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { Fragment } from "react";
import Layout from "../layout";
export default function BlogPostLayout(data) {
    console.log(data.pageContext);
    const { title, description, date, blogContent } = data.pageContext;
    return (
        <Layout>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Karlo Palisoc | {date}</p>
            <p>{blogContent}</p>
        </Layout>
    );
}
