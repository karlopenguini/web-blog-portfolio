import * as React from "react";
import Layout from "../components/layout";
import FeaturedCard from "../components/works/FeaturedCard";
import Work from "../components/works/Work";
import { graphql } from "gatsby";

let works = ({ data }) => {
    let allProjects = data.portfolio_data.projects.data;

    let featuredProjects = {};
    let otherProjects = {};

    for (const [key, value] of Object.entries(allProjects)) {
        let { is_featured } = value.attributes;

        if (is_featured) {
            featuredProjects[key] = value.attributes;
        } else {
            otherProjects[key] = value.attributes;
        }
    }

    return (
        <Layout>
            <main
                className="
                flex
                flex-col
                space-y-11
            "
            >
                <section
                    className="
                    flex
                    flex-col
                    space-y-9
                "
                >
                    <h1
                        className="
                        text-lg
                        font-bold
                    "
                    >
                        Featured
                    </h1>

                    <div
                        className="
                        space-y-9
                    "
                    >
                        {Object.keys(featuredProjects).length
                            ? Object.entries(featuredProjects).map(
                                  ([
                                      id,
                                      {
                                          project_title,
                                          project_year,
                                          project_description,
                                      },
                                  ]) => (
                                      <FeaturedCard
                                          title={project_title}
                                          year={project_year}
                                          desc={project_description}
                                      />
                                  )
                              )
                            : "Looks like I dont have any projects to feature yet . . ."}
                    </div>
                </section>

                <section
                    className="
                    flex
                    flex-col
                    space-y-9
                "
                >
                    <h1
                        className="
                        text-lg
                        font-bold
                    "
                    >
                        Other Works
                    </h1>
                    <div
                        className="
                        flex
                        flex-col
                        space-y-9
                    "
                    >
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
        </Layout>
    );
};

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
                    }
                }
            }
        }
    }
`;

export default works;
