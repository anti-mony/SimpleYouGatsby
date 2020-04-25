import React from "react"

import { Typography, Grid, IconButton, Chip } from "@material-ui/core"

const ProjectItem = ({ data }) => {
  const { title, icon, text, link, tag, blog } = data

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justify="space-evenly"
      className="project-item"
    >
      <Grid item xs={12}>
        <Typography variant="h6">
          {title} <IconButton href={link}>{icon}</IconButton>{" "}
          {tag ? (
            <Chip
              className="iconColor"
              label={tag}
              size="small"
              style={{ backgroundColor: "#00897b", color: "#FFF" }}
            />
          ) : null}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" className="justifyText">
          {text}
          {blog ? (
            <a href={blog.link} className="clean-link">
              <Typography variant="button">{"  "}BLOG</Typography>
            </a>
          ) : null}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProjectItem
