const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const campaignTemplate = path.resolve(`src/templates/campaignTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark (filter: { fileAbsolutePath: { regex: "/campaigns/" } })
       {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {

    // const pageTemplate = (node.frontmatter.type == 'author' ? authorTemplate : bookTemplate)
    const campaignPath = node.frontmatter.path
    
    createPage({
      path: campaignPath,
      component: campaignTemplate,
      context: {
        pathName: campaignPath
      }
    })
  })

  const campaignsByCategoryTemplate = path.resolve('src/templates/campaignsByCategoryTemplate.js')

  const campaignCategoryTypes = ["social", "video", "experiential"]

  campaignCategoryTypes.forEach((category) => {

    createPage({
      path: `/${category}`,
      component: campaignsByCategoryTemplate,
      context: {
        campaignCategory: category
      }
    })
  })
}