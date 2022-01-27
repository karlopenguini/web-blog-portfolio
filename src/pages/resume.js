import * as React from "react"

import HeaderLinks from "../components/resume/HeaderLinks"
import ResumeComponent from "../components/resume/ResumeComponent"
import { graphql } from "gatsby"

let Resume = ({ data }) => {
	let resumeComponentData = data.portfolio_data.resumeSections.data

	let resumeComponents = {}

	for (const [key, value] of Object.entries(resumeComponentData)) {
		resumeComponents[key] = value.attributes
	}

	return (
		<main
			className='
        flex
        flex-col
        space-y-10
      '>
			<HeaderLinks
				url={
					data.portfolio_data.resume.data.attributes.resume_file.data
						.attributes.url
				}
			/>
			<p>
				I am a student who loves to learn software development and web
				development. Capable of building and deploying websites using
				React and creating applications using C# and Python.
			</p>
			{Object.entries(resumeComponents).map(([id, { Title, Field }]) => (
				<ResumeComponent title={Title} fields={Field} />
			))}
		</main>
	)
}

export const query = graphql`
	{
		portfolio_data {
			resumeSections {
				data {
					attributes {
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
			resume {
				data {
					attributes {
						resume_file {
							data {
								attributes {
									url
								}
							}
						}
					}
				}
			}
		}
	}
`
export default Resume
