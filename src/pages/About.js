import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Grid, Typography, Container } from "@material-ui/core"
import { BusinessCenterTwoTone, SchoolTwoTone } from "@material-ui/icons"

const About = () => {
  const sections = [
    {
      icon: <BusinessCenterTwoTone fontSize="large" />,
      text:
        "I'm currently a Software Engineer in the Galli Group at Pritzker School of Molecular Engineering, University of Chicago. I'm trying to solve the challenge of reproducing scientific papers.",
    },
    {
      icon: <SchoolTwoTone fontSize="large" />,
      text:
        "I graduted with my Masters in Computer Science from University of Chicago in December 2019. It was a lot of work, but rewarding too. Before this I graduated with my Bachelors in Computer Science from Shiv Nadar University, India in May 2018. ",
    },
  ]

  return (
    <Layout>
      <SEO title="About" />
      <Container
        display="flex"
        flexDirection="column"
        alignItems="justify"
        flexGrow={1}
      >
        <Typography
          variant="h1"
          style={{ fontWeight: "bold", textAlign: "center" }}
          gutterBottom
        >
          About{" "}
        </Typography>

        {sections.map(section => (
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ marginBottom: "16px" }}
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
