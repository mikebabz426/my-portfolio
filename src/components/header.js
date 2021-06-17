import React, { useState } from "react"
import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Box,
  Link as MuiLink,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import Brightness2Icon from "@material-ui/icons/Brightness2"
import Brightness5Icon from "@material-ui/icons/Brightness5"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import MobileLinks from "./mobileLinks"
import Logo from "../assets/logo.svg"

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
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
    marginLeft: "1rem",
    marginRight: "1rem",
    display: "inline-block",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
  mobileNav: {
    zIndex: "-1",
  },
  linkSelected: {
    borderBottom: `.1rem solid #c5cae9`,
  },
  logo: {
    width: 50,
    height: 50,
    margin: ".2rem",
  },
}))

const Header = ({ themeHandler, themeState }) => {
  const classes = useStyles()
  const [menu, setMenu] = useState(false)

  const links = [
    { name: "Home", to: "#hero" },
    { name: "Projects", to: "#projects" },
    { name: "About", to: "#about" },
    { name: "Contact", to: "#contact" },
  ]

  return (
    <>
      <AppBar>
        <Toolbar className={classes.root}>
          <Container maxWidth="lg" className={classes.navContainer}>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              <Logo className={classes.logo} />
            </Link>

            <Box className={classes.container}>
              <Box className={classes.container}>
                <Typography>
                  {themeState ? "Dark Mode" : "Light Mode"}
                </Typography>
                <IconButton
                  className={classes.brightnessIcon}
                  edge="start"
                  color="inherit"
                  aria-label="brightness"
                  onClick={themeHandler}
                >
                  {themeState ? <Brightness2Icon /> : <Brightness5Icon />}
                </IconButton>
              </Box>

              <Box className={classes.links}>
                {links.map(link => {
                  return (
                    <Typography key={link.name} className={classes.link}>
                      <MuiLink
                        style={{
                          textDecoration: "none",
                          paddingBottom: ".1rem",
                        }}
                        color="inherit"
                        component={Link}
                        to={link.to}
                        activeClassName={classes.linkSelected}
                      >
                        {link.name}
                      </MuiLink>
                    </Typography>
                  )
                })}
              </Box>

              <IconButton
                className={classes.menu}
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setMenu(!menu)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      {menu ? (
        <MobileLinks
          menu={menu}
          theme={themeState}
          className={classes.mobileNav}
          links={links}
          onSelect={() => setMenu(!menu)}
        />
      ) : null}
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
