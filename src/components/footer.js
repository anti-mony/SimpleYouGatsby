import React from "react"
import { Paper, IconButton } from "@material-ui/core"
import { Twitter, LinkedIn, Email, GitHub } from "@material-ui/icons"

const Footer = () => {
  return (
    <Paper className="footer" elevation={2}>
      <div className="footerContent">
        <div>
          <IconButton href="mailto:hi@sushantb.dev" aria-label="Email Me">
            <Email fontSize="large" className="iconColor" />
          </IconButton>
          <IconButton
            href="https://www.github.com/anti-mony"
            aria-label="Github Profile"
          >
            <GitHub fontSize="large" className="iconColor" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/sushant-bansal/"
            aria-label="LinkedIn Profile"
          >
            <LinkedIn fontSize="large" className="iconColor" />
          </IconButton>
          <IconButton
            href="https://www.twitter.com/__antimony__"
            aria-label="Twitter Link"
          >
            <Twitter fontSize="large" className="iconColor" />
          </IconButton>
        </div>
      </div>
    </Paper>
  )
}

export default Footer
