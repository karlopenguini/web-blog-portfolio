module.exports = {
	siteMetadata: {
		title: `karlopalisoc`,
		siteUrl: `https://karlopalisoc.netlify.app/`,
	},
	plugins: [
		`gatsby-plugin-postcss`,
		{
			resolve: "gatsby-source-graphql",
			options: {
				// Arbitrary name for the remote schema Query type
				typeName: "PORTFOLIO_DATA",
				// Field under which the remote schema will be accessible. You'll use this in your Gatsby query
				fieldName: "portfolio_data",
				// Url to query from
				url: "http://localhost:1337/graphql",
			},
		},
		{
			resolve: "gatsby-source-strapi",
			options: {
				apiURL: "http://localhost:1337",
				collectionTypes: [
					"BlogPost",
					"Gallery",
					"Project",
					"Resume Section",
				],
				singleTypes: ["Resume"],
				headers: {},
			},
		},
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/components/layout.js`),
			},
		},
	],
}
