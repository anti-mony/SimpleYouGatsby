import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from "@material-ui/core"

const BlogTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, subtitle, date, tags, path } = frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <Container>ABCD</Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default BlogTemplate
