import * as React from "react"

import FeaturedCard from "../components/works/FeaturedCard"
import Work from "../components/works/Work"
import { graphql, Link } from "gatsby"

let works = ({ data }) => {
	let allProjects = data.portfolio_data.projects.data

	let featuredProjects = {}
	let otherProjects = {}

	for (const [key, value] of Object.entries(allProjects)) {
		let { is_featured } = value.attributes

		if (is_featured) {
			featuredProjects[key] = value.attributes
		} else {
			otherProjects[key] = value.attributes
		}
	}

	return (
		<div className='lg:overflow-y-scroll lg:h-full'>
			<main
				className='
                flex
                flex-col
                space-y-24
            '>
				<section
					className='
                    flex
                    flex-col
                    space-y-12
                '>
					<h1
						className='
                        text-2xl
                        font-bold
						tracking-wider
                    '>
						Featured
					</h1>

					<div
						className='
                        space-y-9
                    '>
						{Object.keys(featuredProjects).length
							? Object.entries(featuredProjects).map(
									([
										id,
										{
											project_title,
											project_year,
											project_description,
											project_thumbnail,
											project_link,
										},
									]) => (
										<Link to={project_link}>
											<FeaturedCard
												title={project_title}
												year={project_year}
												desc={project_description}
												img={
													project_thumbnail.data
														.attributes.url
												}
											/>
										</Link>
									)
							  )
							: "Looks like I dont have any projects to feature yet . . ."}
					</div>
				</section>

				<section
					className='
                    flex
                    flex-col
                    space-y-12
                '>
					<h1
						className='
                        text-2xl
                        font-bold
						tracking-wider
                    '>
						Other Works
					</h1>
					<div
						className='
                        flex
                        flex-col
                        space-y-10
                    '>
						{Object.keys(otherProjects).length
							? Object.entries(otherProjects).map(
									([
										id,
										{ project_title, project_description },
									]) => (
										<Work
											title={project_title}
											desc={project_description}
										/>
									)
							  )
							: "Looks like I dont have any projects yet . . ."}
					</div>
				</section>
			</main>
		</div>
	)
}

export const query = graphql`
	query MyQuery {
		portfolio_data {
			projects {
				data {
					id
					attributes {
						project_title
						project_year
						project_description
						project_thumbnail {
							data {
								attributes {
									url
								}
							}
						}
						is_featured
						project_link
					}
				}
			}
		}
	}
`

export default works
