module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", `gatsby-plugin-react-helmet`, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `./content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'campaigns',
        path: `./content/campaigns`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `./content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `social`,
        path: `./content/campaigns/social`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `./content/campaigns/video`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experiential`,
        path: `./content/campaigns/experiential`,
      },
    }]
};