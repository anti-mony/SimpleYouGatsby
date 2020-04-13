import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography } from "@material-ui/core"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Typography variant="h3" gutterBottom>
        Projects
      </Typography>
      <h1>Hi from the Projects page</h1>
      <p>Welcome to page 2</p>
    </Layout>
  )
}

export default Projects
