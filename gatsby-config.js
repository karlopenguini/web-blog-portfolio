module.exports = {
	siteMetadata: {
		title: `karlopalisoc`,
		siteUrl: `https://karlopalisoc.netlify.app/`,
	},
	plugins: [
		`gatsby-plugin-postcss`,
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
