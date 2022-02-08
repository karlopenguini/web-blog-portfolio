import * as React from "react"

import FeaturedCard from "../components/works/FeaturedCard"
import Work from "../components/works/Work"
import { graphql, Link } from "gatsby"

let works = ({ data }) => {
	console.log(data.allStrapiProject.edges)
	let allProjects = data.allStrapiProject.edges

	let featuredProjects = {}
	let otherProjects = {}

	for (const [key, value] of Object.entries(allProjects)) {
		let { is_featured } = value.node

		if (is_featured) {
			featuredProjects[key] = value.node
		} else {
			otherProjects[key] = value.node
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
												img={project_thumbnail.url}
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
		allStrapiProject {
			edges {
				node {
					id
					project_title
					project_year
					project_description
					is_featured
					project_link
					project_thumbnail {
						url
					}
				}
			}
		}
	}
`

export default works
