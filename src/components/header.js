import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
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
  }

  const navLinks = [
    <Link fade to="/Blog" style={styles.link}>
      <Button>Blog</Button>
    </Link>,
    <Link fade to="/Projects" style={styles.link}>
      <Button>Projects</Button>
    </Link>,
  ]

  return (
    <AppBar position="sticky" style={{ background: "#e0e0e0" }}>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
          p={1}
        >
          <img src={icon} alt="Site Logo" style={styles.logo} />
          <Box flexGrow={1}>
            <Link fade to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h5" style={styles.textBlack}>
                {siteTitle}
              </Typography>
            </Link>
          </Box>
          <Hidden smDown>{navLinks}</Hidden>
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
              {navLinks.map(l => (
                <MenuItem onClick={handleClose}>{l}</MenuItem>
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
