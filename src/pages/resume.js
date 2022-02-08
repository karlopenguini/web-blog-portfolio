import * as React from "react"

import HeaderLinks from "../components/resume/HeaderLinks"
import ResumeComponent from "../components/resume/ResumeComponent"
import { graphql } from "gatsby"

let Resume = ({ data }) => {
	let resumeComponentData = data.allStrapiResumeSection.edges

	let resumeComponents = {}

	for (const [key, value] of Object.entries(resumeComponentData)) {
		resumeComponents[key] = value.node
	}

	return (
		<div className=' lg:h-full'>
			<main
				className='
		
        flex
        flex-col
        space-y-14
      '>
				<HeaderLinks
					url={data.allStrapiResume.edges[0].node.resume_file.url}
				/>

				<p>
					I am a student who loves to learn software development and
					web development. Capable of building and deploying websites
					using React and creating applications using C# and Python.
				</p>
				{Object.entries(resumeComponents).map(
					([id, { Title, Field }]) => (
						<ResumeComponent title={Title} fields={Field} />
					)
				)}
			</main>
		</div>
	)
}

export const query = graphql`
	{
		allStrapiResume {
			edges {
				node {
					resume_file {
						url
					}
				}
			}
		}
		allStrapiResumeSection {
			edges {
				node {
					Title
					Field {
						Body
						Heading
						Subheading
						IsWide
					}
				}
			}
		}
	}
`
export default Resume
