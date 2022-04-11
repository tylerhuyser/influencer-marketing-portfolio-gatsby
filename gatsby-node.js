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
    console.log(node)
    console.log(node.frontmatter)
    console.log(node.frontmatter.path)
    const campaignPath = node.frontmatter.path
    
    createPage({
      path: campaignPath,
      component: campaignTemplate,
      context: {}
    })
  })
}