import React from "react"
import { graphql } from "gatsby"
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

export const query = graphql`
  query($id: String ) {
      wpPage(id: { eq: $id }) {
        title
        content
        fieldsHomepage {
          descriptionhome
          headingshome
        }
      }
  }
`

const PageTemplate = ({ data }: { data: any }) => {
  const page = data.wpPage
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
          <p>{ page.fieldsHomepage.headingshome }</p>
          <p>{ page.fieldsHomepage.descriptionhome }</p>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default PageTemplate