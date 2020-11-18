import React, { useState } from "react"
import { Grid, Typography, Modal, Box, Button } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import { makeStyles } from "@material-ui/core/styles"

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
  grid: {
    margin: "1rem",
  },
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
  modal: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}))

const style = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "300px",
  height: "250px",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
      <BackgroundImage
        style={{
          width: 750,
          height: 500,
        }}
        fluid={source}
      ></BackgroundImage>
      <Box className={classes.btnContainer}>
        <Button variant="contained" color="primary">
          Code
        </Button>
        <Button variant="contained" color="primary">
          Demo
        </Button>
      </Box>
    </div>
  )

  return (
    <Grid
      className={classes.grid}
      container
      spacing={2}
      justify="center"
      align="center"
    >
      <Grid item md={6}>
        <Typography variant="h3">{project.name}</Typography>
        <Typography variant="body1">{project.description}</Typography>
      </Grid>
      <Grid item md={6} className={classes.modal}>
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
