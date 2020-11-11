import React from "react"
import { Link as MuiLink, Slide } from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#333",
    display: "flex",
    zIndex: "1",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
    width: "50%",
    position: "fixed",
    top: "0",
    right: "0",
  },
  list: {
    listStyle: "none",
    margin: "0",
    padding: "0",
  },
  item: {
    marginTop: "1rem",
  },
  link: {
    color: theme.palette.common.white,
    fontSize: "1.5rem",
    transition: "color 300ms",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.light,
      textDecoration: "none",
    },
  },
}))

const MobileLinks = ({ links, onSelect, theme, menu }) => {
  const classes = useStyles()

  const style = theme
    ? {
        backgroundColor: "#3f51b5",
      }
    : {
        backgroundColor: "#212121",
      }

  return (
    <Slide direction="left" in={menu} mountOnEnter unmountOnExit timeout={700}>
      <nav className={classes.root} style={style}>
        <ul className={classes.list}>
          {links.map(link => (
            <li className={classes.item}>
              <MuiLink
                key={link.name}
                className={classes.link}
                color="secondary"
                component={Link}
                to={link.to}
                onClick={onSelect}
              >
                {link.name}
              </MuiLink>
            </li>
          ))}
        </ul>
      </nav>
    </Slide>
  )
}

export default MobileLinks
