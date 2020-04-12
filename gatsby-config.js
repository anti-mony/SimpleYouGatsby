module.exports = {
  siteMetadata: {
    title: `Sushant Bansal`,
    description: `Sushant, Software Developer in Chicago`,
    author: `Sushant Bansal`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sushant Bansal`,
        short_name: `SB`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#e0e0e0`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
