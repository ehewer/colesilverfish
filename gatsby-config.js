/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path");

module.exports = {
  /* Your site config here */
  siteMetadata: {
    fullname: "Cole Silverfish",
    username: "colesilverfish",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(__dirname, "src", "images"),
        name: "images"
      }
    }
  ],
}
