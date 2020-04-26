import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogListItem from "../components/bloglistitem"

import { Container, Typography, Grid } from "@material-ui/core"

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
      <Typography
        variant="subtitle1"
        style={{ textAlign: "center", marginBottom: "16px" }}
        gutterBottom
      >
        This isn't strictly a tech blog. I'm not sure what I will write in the
        future though.
      </Typography>
      <Container>
        <Grid container direction="row" spacing={3}>
          {blogs.map(blog => (
            <Grid item xs={12} md={6} key={blog.id}>
              <BlogListItem data={blog.frontmatter} taste={blog.excerpt} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Blog
