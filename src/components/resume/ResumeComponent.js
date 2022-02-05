import React from "react"
import Detail from "./Detail"
import { motion } from "framer-motion"
export default function ResumeComponent({ title, fields }) {
	let resumeFields = {}

	for (const [key, value] of Object.entries(fields)) {
		resumeFields[key] = value
	}

	return (
		<section
			className='
            space-y-6
            
        '>
			<h1
				className='
                text-xl
                font-bold
				tracking-wide
            '>
				{title}
			</h1>

			<div
				className='
                grid
                grid-cols-4
                gap-x-5
                gap-y-6
            '>
				{Object.entries(resumeFields).map(
					([id, { Heading, Subheading, Body, IsWide }]) => (
						<motion.div
							className={IsWide ? "col-span-2" : "col-span-1"}>
							<Detail
								heading={Heading}
								subheading={Subheading}
								body={Body}
							/>
						</motion.div>
					)
				)}
			</div>
		</section>
	)
}
