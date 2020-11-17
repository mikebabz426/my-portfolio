import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import {
  Container,
  Typography,
  Grid,
  Modal,
  Button,
  Box,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import BackgroundImage from "gatsby-background-image"

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
  root: {
    padding: "3rem",
    margin: "auto",
  },
  grid: {
    margin: "1rem",
  },
  span: {
    color: "#3f51b5",
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
    width: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}))

const ProjectsPage = ({ data }) => {
  const classes = useStyles()
  const source = data.allImageSharp.nodes[1].fluid

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
          backgroundSize: "contain",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          width: 700,
          height: 500,
        }}
        fluid={source}
      >
        {/* <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p> */}
      </BackgroundImage>
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
    <Layout>
      <SEO title="Projects" />
      <Container maxWidth="lg" className={classes.root}>
        <Grid
          className={classes.grid}
          container
          spacing={2}
          justify="center"
          align="center"
        >
          <Grid item md={6}>
            <Typography variant="h1">
              Project
              <span className={classes.span}> One</span>
            </Typography>
          </Grid>
          <Grid item md={6}>
            <BackgroundImage
              onClick={handleOpen}
              style={style}
              fluid={source}
            ></BackgroundImage>
          </Grid>
          <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </Grid>
        <Grid
          className={classes.grid}
          container
          spacing={2}
          justify="center"
          align="center"
        >
          <Grid item md={6}>
            <Typography variant="h1">
              Project
              <span className={classes.span}> Two</span>
            </Typography>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allImageSharp {
      nodes {
        fluid(pngQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ProjectsPage
