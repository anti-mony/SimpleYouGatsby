import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectItem from "../components/projectitem"
import ProjectList from "../data/ProjectList"

import { Typography, Container } from "@material-ui/core"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <Typography variant="h2" className="page-header" gutterBottom>
          <div className="page-header">Projects</div>
        </Typography>
        <Typography variant="subtitle1" className="page-subtitle" gutterBottom>
          Just some stuff I've done or doing in brief. I'll make full posts
          about the projects that I feel like.
        </Typography>

        {ProjectList.map(project => (
          <ProjectItem key={project.id} data={project} />
        ))}
      </Container>
    </Layout>
  )
}

export default Projects
