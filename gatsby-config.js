module.exports = {
  siteMetadata: {
    title: "Basketball Teams",
    description: "A simple informative website about the different NBA basketball teams",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://basketball-teams.local/graphql",
        schema: {
          timeout: 60000,
        },
      }
    }
  ],

};