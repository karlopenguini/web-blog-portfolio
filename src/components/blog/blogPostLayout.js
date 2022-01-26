import React from "react";
export default function BlogPostLayout(data) {
	console.log(data.pageContext);
	const { title, description, date, blogContent } = data.pageContext;

	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
			<p>Karlo Palisoc | {date}</p>
			{blogContent}
		</div>
	);
}
