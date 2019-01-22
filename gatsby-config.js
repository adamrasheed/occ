module.exports = {
  siteMetadata: {
    title: `OC Creative`,
    description: `A curated list of the raddest creative professionals in Orange County.`,
    author: {
      name: `Adam Rasheed`,
      website: `https://adamrasheed.com`,
      twitter: `@arasheedphoto`,
    },
    airtableRefLink: `https://airtable.com/invite/r/mDMzffVJ`,
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
        name: `gatsby-starter-default`,
        short_name: `oc creative`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyUChHMcFOn8PFQh`, // may instead specify via env, see below
        tables: [
          {
            baseId: `app9usHMoLw9FmqXl`,
            tableName: `Orange County`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
