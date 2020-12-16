import React, { useState } from "react"
import { Grid, Typography, Modal, Box, Button } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import { makeStyles } from "@material-ui/core/styles"
import fleet from "../gifs/fleet.gif"
import sunset from "../gifs/sunset.gif"

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 800,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1),
  },
  btnContainer: {
    margin: "1rem",
    width: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pic: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "&:hover": {
      cursor: "pointer",
    },
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    marginBottom: "1rem",
  },
}))

const style = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "300px",
  height: "250px",
}

const Project = ({ project, source }) => {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img
        src={project.name === "My Fleet Tracker" ? fleet : sunset}
        alt="My fleet tracker in use"
        style={{ width: "750px", height: "500px" }}
      />
      <Box className={classes.btnContainer}>
        <Button
          variant="contained"
          color="primary"
          href={project.git}
          target="_blank"
        >
          Code
        </Button>
        <Button
          variant="contained"
          color="primary"
          href={project.url}
          target="_blank"
        >
          Demo
        </Button>
      </Box>
    </div>
  )

  return (
    <Grid container spacing={3} justify="center" align="center">
      <Grid item md={4} className={classes.text}>
        <Typography variant="h4" className={classes.heading}>
          {project.name}
        </Typography>
        <Typography variant="body1" align="justify">
          {project.description}
        </Typography>
      </Grid>
      <Grid item md={4} className={classes.pic}>
        <BackgroundImage
          onClick={handleOpen}
          style={style}
          fluid={source}
        ></BackgroundImage>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Grid>
  )
}

export default Project
