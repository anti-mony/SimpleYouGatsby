import React from "react"
import { Paper, IconButton } from "@material-ui/core"
import { Twitter, LinkedIn, Email, GitHub } from "@material-ui/icons"

const Footer = () => {
  return (
    <Paper className="footer" elevation={2} color="default">
      <div className="footerContent">
        <div>
          <IconButton href="mailto:" aria-label="Email Me">
            <Email fontSize="large" color="secondary" />
          </IconButton>
          <IconButton
            href="https://www.github.com"
            aria-label="Github Profile"
          >
            <GitHub fontSize="large" color="secondary" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/"
            aria-label="LinkedIn Profile"
          >
            <LinkedIn fontSize="large" color="secondary" />
          </IconButton>
          <IconButton
            href="https://www.twitter.com/"
            aria-label="Twitter Link"
          >
            <Twitter fontSize="large" color="secondary" />
          </IconButton>
        </div>
      </div>
    </Paper>
  )
}

export default Footer
