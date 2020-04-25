import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import { Box, Typography } from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <Box style={{ minWidth: "180px", width: "20%", padding: "16px" }} p={1}>
        <Image />
      </Box>

      <Typography variant="h3" style={{ fontWeight: "light" }}>
        Hi, I'm
      </Typography>
      <Typography
        variant="h2"
        component="p"
        style={{ fontWeight: "bold", textAlign: "center" }}
        gutterBottom
      >
        Sushant Bansal
      </Typography>
      <Typography variant="body1" style={{ textAlign: "center" }}>
        I'm currently a Software Engineer in the Galli Group at Pritzker School
        of Molecular Engineering, University of Chicago
      </Typography>
      <Typography variant="body1" style={{ textAlign: "center" }}>
        I listen to a lot of music, play video games and relax when I'm free.
      </Typography>
    </Box>
  </Layout>
)

export default IndexPage
