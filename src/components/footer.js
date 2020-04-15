import React from "react"
import { Paper, IconButton, Typography } from "@material-ui/core"
import { Twitter, LinkedIn, Email, GitHub } from "@material-ui/icons"

const Footer = () => {
  return (
    <Paper className="footer" elevation={1}>
      <div className="footerContent">
        <div>
          <IconButton href="mailto:hi@sushantb.dev">
            <Email fontSize="large" className="iconColor" />
          </IconButton>
          <IconButton href="https://www.github.com/anti-mony">
            <GitHub fontSize="large" className="iconColor" />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/sushant-bansal/">
            <LinkedIn fontSize="large" className="iconColor" />
          </IconButton>
          <IconButton href="https://www.twitter.com/__antimony__">
            <Twitter fontSize="large" className="iconColor" />
          </IconButton>
        </div>
      </div>
    </Paper>
  )
}

export default Footer
