import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Typography } from "@material-ui/core"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Typography variant="h3" gutterBottom>
        About
      </Typography>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </Layout>
  )
}

export default About
