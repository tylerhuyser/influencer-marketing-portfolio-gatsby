require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = process.env.URL || `https://influencer.tylerhuyser.com`

module.exports = {
  siteMetadata: {
    title: 'Tyler Huyser | Influencer Marketing Specialist',
    description:
    'Tyler Huyser is an Influencer Marketing Specialist. Previously, Tyler designed, optimized, and executed camapigns on behalf of brands at VaynerMedia, GMG, & PureWow. If you are looking to leverage influencers at scale, please drop me a note.',
    siteUrl: 'https://www.influencer.tylerhuyser.com',
    image: '/og.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@tylerhuyser',
  },
  flags: {
    DEV_SSR: true
  },
  plugins: ["gatsby-plugin-netlify", "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", `gatsby-plugin-react-helmet`,
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://influencer.tylerhuyser.com',
      sitemap: 'https://influencer.tylerhuyser.com/sitemap-0.xml',
      policy: [{userAgent: '*', allow: '/'}]
    }
  },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: '/sitemap-index.xml',
        query: `
      {
        allSitePage {
          nodes {
            path
          }
        }
      }
      `,
      resolveSiteUrl: () => siteUrl,
      resolvePages: ({
        allSitePage: { nodes: allPages }
      }) => {
        return allPages.map(page => {
          return page
        })
       },
      serialize: ({ path }) => {
          return {
            url: `${siteUrl}${path}`,
            changefreq: 'never',
            priority: 0.5
          }
      },
    }
  },
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-KP6PPLTV",
    },
  },  {
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
        name: 'press',
        path: `./content/press/`,
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'clients',
        path: `./content/clients`,
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
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    }
  ],
  mapping: {
    "MarkdownRemark.frontmatter.posts": `MarkdownRemark.frontmatter.postFileLink`,
    "MarkdownRemark.frontmatter.press": `MarkdownRemark.frontmatter.pressLink`
    },
};