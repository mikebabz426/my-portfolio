import React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import GatsbyIcon from "../assets/gatsbyjs-icon.svg"
import ReactIcon from "../assets/reactjs-icon.svg"
import MaterialIcon from "../assets/material-ui.svg"
import HasuraIcon from "../assets/hasuraio-icon.svg"
import TSIcon from "../assets/typescript.svg"
import GraphQLIcon from "../assets/graphql-icon.svg"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    margin: ".5rem 0",
  },
  stack: {
    display: "flex",
    alignItems: "center",
    margin: "1rem 0",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  iconName: {
    margin: "0 5px",
  },
}))

const Tech = ({ name }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      {name === "Typescript" ? <TSIcon className={classes.icon} /> : null}
      {name === "GatsbyJS" ? <GatsbyIcon className={classes.icon} /> : null}
      {name === "React" ? <ReactIcon className={classes.icon} /> : null}
      {name === "Material-UI" ? (
        <MaterialIcon className={classes.icon} />
      ) : null}
      {name === "Hasura" ? <HasuraIcon className={classes.icon} /> : null}
      {name === "GraphQL" ? <GraphQLIcon className={classes.icon} /> : null}
      <Typography variant="body1">{name}</Typography>
    </Box>
  )
}

export default Tech
