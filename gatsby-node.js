exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          uri
        }
      }
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)

  const pages = result.data.allWpPage.nodes

  pages.forEach(page => {
    actions.createPage({
      path: page.uri,
      component: require.resolve("./src/templates/page-template.tsx"),
      context: {
        id: page.id,
      },
    })
  })

  const posts = result.data.allWpPost.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.uri,
      component: require.resolve("./src/templates/post-template.tsx"),
      context: {
        id: post.id,
      },
    })
  })
}