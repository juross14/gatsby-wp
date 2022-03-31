import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($id: String ) {
    wpPost(id: { eq: $id }) {
        title
        content
      }
      
  }
`

const PostTemplate = ({ data }: { data: any}) => {
  const post = data.wpPost
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

export default PostTemplate