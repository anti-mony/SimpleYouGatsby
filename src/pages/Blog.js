import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogListItem from "../components/bloglistitem"

import { Container, Typography } from "@material-ui/core"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query blogslist {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            tags
            subtitle
            date
            comments
            path
            author
          }
          excerpt(pruneLength: 200)
          id
        }
      }
    }
  `)

  const blogs = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO title="Blog" />
      <Typography
        variant="h1"
        style={{ fontWeight: "bold", textAlign: "center" }}
        gutterBottom
      >
        Blog{" "}
      </Typography>
      <Container>
        {blogs.map(blog => (
          <BlogListItem
            data={blog.frontmatter}
            taste={blog.excerpt}
            key={blog.id}
          />
        ))}
      </Container>
    </Layout>
  )
}

export default Blog
