import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Typography } from "@material-ui/core"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Typography variant="h3" gutterBottom>
        Blog
      </Typography>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </Layout>
  )
}

export default Blog
