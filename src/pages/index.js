import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import { Typography } from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index-content">
      <div className="index-image">
        <Image />
      </div>

      <Typography variant="h3">
        <div className="light-text">Hi, I'm</div>
      </Typography>

      <Typography variant="h2" component="p" gutterBottom>
        <div className="center-text bold-text">Sushant Bansal</div>
      </Typography>
      <Typography variant="body1" className="center-text">
        I'm currently a Software Engineer in the Galli Group at Pritzker School
        of Molecular Engineering, University of Chicago
      </Typography>
      <Typography variant="body1" className="center-text">
        I listen to a lot of music, play video games and relax when I'm free.
      </Typography>
    </div>
  </Layout>
)

export default IndexPage
