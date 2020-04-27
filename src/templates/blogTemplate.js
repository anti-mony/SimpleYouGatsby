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
        <Typography variant="h2" style={{ fontWeight: "bold", color: "#000" }}>
          {title}
        </Typography>
        <Typography variant="h5" style={{ fontWeight: "lighter" }} gutterBottom>
          {subtitle}
        </Typography>
        <Typography
          variant="subtitle2"
          className="iconColor"
          style={{ fontStyle: "italic" }}
          gutterBottom
        >
          Posted On {date}
        </Typography>
        <Markdown style={{ textAlign: "justify" }}>{html}</Markdown>
        <Typography variant="body2" style={{ color: "#263238" }}>
          Tags:{" "}
          {tags.map((tag, index) => (
            <Typography
              variant="button"
              className="iconColor"
              style={{ marginLeft: "8px" }}
              key={index}
            >
              {tag}
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
