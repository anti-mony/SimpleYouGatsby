import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogListItem from "../components/bloglistitem"

import { Container, Typography, Grid } from "@material-ui/core"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query blogslist {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            tags
            subtitle
            date(formatString: "MMMM DD, YYYY")
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
      <Seo title="Blog" />
      <Typography variant="h2" className="page-header" gutterBottom>
        <div className="page-header">Blog</div>
      </Typography>
      <Typography variant="subtitle1" className="page-subtitle" gutterBottom>
        This isn't strictly a tech blog. I'm not sure what I will write in the
        future though.
      </Typography>
      <Container className="lotof-vertical-margins">
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
