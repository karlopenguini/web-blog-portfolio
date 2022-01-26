import React from "react";

export default function Detail({ heading, subheading, body }) {
	return (
		<div
			className="
            
            space-y-1
            
        "
		>
			{heading ? (
				<h1
					className="
                        text-sm
                        font-medium
                    "
				>
					{heading}
				</h1>
			) : null}

			{subheading ? (
				<h5
					className="
                        text-xs
                        font-medium
                    "
				>
					{subheading}
				</h5>
			) : null}

			{body ? (
				<p
					className="
                        text-xs
                    "
				>
					{body}
				</p>
			) : null}
		</div>
	);
}
