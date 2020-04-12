import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import icon from "../images/icon.png"

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Hidden,
} from "@material-ui/core"

const Header = ({ siteTitle }) => {
  const styles = {
    textWhite: {
      color: "#FFF",
    },
    textBlack: {
      color: "#000",
    },
    logo: {
      maxWidth: "48px",
      padding: 0,
      margin: 0,
    },
  }

  return (
    <AppBar position="sticky" style={{ background: "#e0e0e0" }}>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
        >
          <Box p={1}>
            <img src={icon} alt="Site Logo" style={styles.logo} />
          </Box>
          <Box p={1} flexGrow={1}>
            <Link fade to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h5" style={styles.textBlack}>
                {siteTitle}
              </Typography>
            </Link>
          </Box>
          <Hidden smDown>
            <Box p={1}>
              <Link fade to="/Blog" style={{ textDecoration: "none" }}>
                <Button>About</Button>
              </Link>
            </Box>
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Sushant Bansal`,
}

export default Header
