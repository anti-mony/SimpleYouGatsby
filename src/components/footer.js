import React from "react"
import { Paper, IconButton, Typography } from "@material-ui/core"
import { Twitter, LinkedIn, Email, GitHub } from "@material-ui/icons"
import LinkUrls from "../data/FooterList"

const Footer = () => {
  const { email, github, linkedin, twitter } = LinkUrls

  return (
    <Paper
      className="footer"
      elevation={0}
      style={{ background: "transparent" }}
    >
      <div className="footerContent">
        <div>
          <IconButton href={email} aria-label="Email Me">
            <Email fontSize="large" color="secondary"/>
          </IconButton>
          <IconButton href={github} aria-label="Github Profile">
            <GitHub fontSize="large" color="secondary" />
          </IconButton>
          <IconButton href={linkedin} aria-label="LinkedIn Profile">
            <LinkedIn fontSize="large" color="secondary" />
          </IconButton>
          <IconButton href={twitter} aria-label="Twitter Link">
            <Twitter fontSize="large" color="secondary" />
          </IconButton>
        </div>
        <Typography variant='overline'>Copyright &#169; {new Date().getFullYear()} All Rights Reserved</Typography>
      </div>
    </Paper>
  )
}

export default Footer
