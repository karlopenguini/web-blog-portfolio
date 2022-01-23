import MDX, { MDXProvider } from "@mdx-js/react";
import React, { Fragment } from "react";
import Layout from "../layout";
export default function BlogPostLayout(data) {
    console.log(data.pageContext);
    const { title, description, date, blogContent } = data.pageContext;
    const H1 = (props) => <h1 style={{ color: "red" }} {...props} />;
    return (
        <Layout>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Karlo Palisoc | {date}</p>
            {blogContent}
        </Layout>
    );
}
