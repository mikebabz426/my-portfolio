import React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Tech from "../components/tech"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "1rem",
  },
  list: {
    margin: "0 1rem",
  },
  subhead: {
    margin: ".75rem 0",
  },
}))

const TechStack = ({ project }) => {
  const classes = useStyles()
  const { front, back } = project.stack

  return (
    <Box className={classes.container}>
      <Typography variant="h5" align="left">
        Tech Stack:
      </Typography>
      <Box className={classes.listsContainer}>
        <Box className={classes.list}>
          <Typography
            align="left"
            className={classes.subhead}
            style={{ fontWeight: "bold" }}
          >
            Front-end:
          </Typography>
          {front.map(tech => (
            <Tech name={tech} />
          ))}
        </Box>
        {back.length !== 0 ? (
          <Box className={classes.list}>
            <Typography
              align="left"
              className={classes.subhead}
              style={{ fontWeight: "bold" }}
            >
              Back-end:
            </Typography>
            {back.map(tech => (
              <Tech name={tech} />
            ))}
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}

export default TechStack
