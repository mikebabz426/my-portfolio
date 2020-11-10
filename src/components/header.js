import React from "react"
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Box,
  Link as MuiLink,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import Brightness2Icon from "@material-ui/icons/Brightness2"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  brightnessIcon: {
    margin: "0 .5rem",
  },
  menu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  links: {
    color: "#fff",
    dispaly: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    margin: "0 1rem",
    display: "inline-block",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
}))

const Header = ({ siteTitle, themeHandler }) => {
  const classes = useStyles()

  // const links = ["Home", "Projects", "About", "Contact"]

  return (
    <AppBar>
      <Toolbar className={classes.root}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Typography variant="h5">{siteTitle}</Typography>
        </Link>
        <Box className={classes.container}>
          <Box className={classes.container}>
            <Typography>Dark Mode</Typography>
            <IconButton
              className={classes.brightnessIcon}
              edge="start"
              color="inherit"
              aria-label="brightness"
              onClick={themeHandler}
            >
              <Brightness2Icon />
            </IconButton>
          </Box>
          <Box className={classes.links}>
            <Typography className={classes.link}>
              <MuiLink
                style={{ textDecoration: "none" }}
                color="inherit"
                component={Link}
                to="/"
              >
                Home
              </MuiLink>
            </Typography>
            <Typography className={classes.link}>
              <MuiLink
                style={{ textDecoration: "none" }}
                color="inherit"
                component={Link}
                to="/404"
              >
                404
              </MuiLink>
            </Typography>
            <Typography className={classes.link}>
              <MuiLink
                style={{ textDecoration: "none" }}
                color="inherit"
                component={Link}
                to="/page-2"
              >
                Page 2
              </MuiLink>
            </Typography>
          </Box>
          <IconButton
            className={classes.menu}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
