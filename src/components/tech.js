import React from "react"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import GatsbyIcon from "../assets/gatsbyjs-icon.svg"
import ReactIcon from "../assets/reactjs-icon.svg"
import MaterialIcon from "../assets/material-ui.svg"
import HasuraIcon from "../assets/hasuraio-icon.svg"
import TSIcon from "../assets/typescriptlang-icon.svg"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
  },
  stack: {
    display: "flex",
    alignItems: "center",
    margin: "1rem 0",
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconName: {
    margin: "0 5px",
  },
}))

const Tech = () => {
  const classes = useStyles()

  return <Box className={classes.container}>{}</Box>
}

export default Tech
