import React from "react"
import { graphql } from "gatsby"

import Markdown from "../components/markdown"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Typography } from "@material-ui/core"

const BlogTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, subtitle, date, tags } = frontmatter
  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <Typography variant="h2">
          <div className="bold-text black-color">{title}</div>
        </Typography>
        <Typography variant="h5" gutterBottom>
          <div className="lighter-text">{subtitle}</div>
        </Typography>
        <Typography
          variant="subtitle2"
          className="iconColor"
          style={{ fontStyle: "italic" }}
          gutterBottom
        >
          Posted On {date}
        </Typography>
        <Markdown className="justify-text">{html}</Markdown>
        <Typography variant="body2" className="tag-container tag-color">
          <div>Tags: </div>
          {tags.map((tag, index) => (
            <Typography variant="button" className="iconColor" key={index}>
              <div className="horizontal-margins">{tag}</div>
            </Typography>
          ))}
        </Typography>
      </Container>
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
        subtitle
        tags
      }
    }
  }
`

export default BlogTemplate
