import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, Fragment } from "react"
import icon from "../images/icon.png"

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core"

import { List, Code, Fingerprint } from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu"

const Header = ({ siteTitle }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
      marginRight: 8,
    },
    link: {
      textDecoration: "none",
    },
    menu: {
      color: "#000",
    },
    margins: {
      marginLeft: 4,
      marginRight: 4,
    },
  }

  const navLinks = [
    {
      id: 1,
      nav: (
        <Link to="/Blog" style={styles.link}>
          <Button>
            <List style={styles.margins} />
            Blog
          </Button>
        </Link>
      ),
    },
    {
      id: 2,
      nav: (
        <Link to="/Projects" style={styles.link}>
          <Button>
            <Code style={styles.margins} />
            Projects
          </Button>
        </Link>
      ),
    },
    {
      id: 3,
      nav: (
        <Link to="/About" style={styles.link}>
          <Button>
            <Fingerprint style={styles.margins} />
            About
          </Button>
        </Link>
      ),
    },
  ]

  return (
    <AppBar position="sticky" style={{ background: "#b0bec5" }}>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
          mt={2}
          mb={2}
        >
          <img src={icon} alt="Site Logo" style={styles.logo} />
          <Box>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                outline: "none",
              }}
            >
              <Typography variant="h5" style={styles.textBlack}>
                {siteTitle}
              </Typography>
            </Link>
          </Box>
          <Box flexGrow={1}></Box>
          <Hidden xsDown>
            {navLinks.map(navItem => (
              <Fragment key={navItem.id}>{navItem.nav}</Fragment>
            ))}
          </Hidden>
          <Hidden smUp>
            <IconButton style={styles.textBlack} onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {navLinks.map(nav => (
                <MenuItem onClick={handleClose} dense={true} key={nav.id}>
                  {nav.nav}
                </MenuItem>
              ))}
            </Menu>
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
