require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });
  
module.exports = {
    siteMetadata: {
        title: "Impulsiona Seguidores",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              trackingIds: [
                process.env.GOOGLE_ANALYTICS_ID, 
                process.env.GOOGLE_ADS_ID, 
              ],
              pluginConfig: {
                head: true
              },
            },
        },
        `gatsby-plugin-emotion`,
        'gatsby-plugin-postcss',
        {
            resolve: `gatsby-source-wordpress`,
            options: {
              url: `http://impulsionacms.articadev.com/graphql`,
            },
            includedRoutes: [
                "**/paginas"
            ],
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
              pixelId: process.env.FACEBOOK_PIXEL_ID,
            },
        },
        {
            resolve: `gatsby-plugin-hotjar-tracking`,
            options: {
              includeInDevelopment: false,
              id: process.env.HOTJAR_TRACKING_ID,
              sv: process.env.HOTJAR_VERSION
            }
        }
    ],
};
