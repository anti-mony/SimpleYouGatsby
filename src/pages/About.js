import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Grid, Typography, Container } from "@material-ui/core"

import AboutList from "../data/AboutList"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Typography variant="h1" gutterBottom>
          <div className="page-header">About</div>
        </Typography>

        {AboutList.map(section => (
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ marginBottom: "16px" }}
            key={section.id}
          >
            <Grid item xs={12} md={1} align="center">
              {section.icon}
            </Grid>
            <Grid item xs={12} md={11}>
              <Typography variant="body1" className="justifyText">
                {section.text}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Layout>
  )
}

export default About
