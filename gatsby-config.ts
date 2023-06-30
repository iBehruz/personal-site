
import { GatsbyConfig } from "gatsby";
import config from "./src/config";

const configGy: GatsbyConfig = {
  siteMetadata: {
    title: 'Ilkhomov Bekhruz',
    description:
      'Ilkhomov Bekhruz is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.',
    siteUrl: 'https://bekhruzilkhomov.com', // No trailing slash allowed!
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ilkhomov Bekhruz',
        short_name: 'Ilkhomov Bekhruz',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'featured',
        path: `${__dirname}/content/featured`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,

    },
  ],
};

export default configGy;
