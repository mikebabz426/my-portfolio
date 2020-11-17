import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactMeSvg from "../assets/contact.svg"
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import * as Yup from "yup"
import { Formik, Form, Field } from "formik"

//Form Validation:

let contactSchema = Yup.object().shape({
  name: Yup.string().required().min(3),
  email: Yup.string().email().required(),
  message: Yup.string().required(),
})

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "auto",
  },
  grid: {
    marginTop: "10rem",
  },

  svg: {
    width: 400,
    height: 400,
    marginTop: "3rem",
  },
  field: {
    color: theme.palette.grey[50],
  },
}))

const ContactPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Contact" />
      <Container maxWidth="lg" className={classes.root}>
        <Grid
          className={classes.grid}
          container
          spacing={10}
          justify="center"
          align="center"
        >
          <Grid item md={6}>
            <Typography variant="h5" style={{ marginBottom: "1rem" }}>
              Need help with your next project?
            </Typography>
            <Typography variant="h3">Don't be shy, lets talk!</Typography>
            <ContactMeSvg className={classes.svg} />
          </Grid>
          <Grid item md={6}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              validationSchema={contactSchema}
              // onSubmit={values => {}}
            >
              {({ errors, touched }) => {
                return (
                  <Form>
                    <Field
                      className={classes.field}
                      name="name"
                      type="input"
                      variant="outlined"
                      margin="normal"
                      label="Name"
                      required
                      fullWidth
                      as={TextField}
                    />
                    {errors.name && touched.name ? (
                      <Typography color="error">
                        Please enter a valid name
                      </Typography>
                    ) : null}
                    <Field
                      color="secondary"
                      name="email"
                      type="input"
                      variant="outlined"
                      margin="normal"
                      label="Email"
                      required
                      fullWidth
                      as={TextField}
                    />
                    {errors.email && touched.email ? (
                      <Typography color="error">
                        Please enter a valid email address
                      </Typography>
                    ) : null}
                    <Field
                      className={classes.field}
                      name="message"
                      type="input"
                      variant="outlined"
                      margin="normal"
                      label="Message"
                      required
                      fullWidth
                      multiline
                      rowsMax={5}
                      as={TextField}
                    />
                    {errors.message && touched.message ? (
                      <Typography color="error">
                        Please enter a message
                      </Typography>
                    ) : null}

                    <Button
                      style={{ marginTop: "2rem" }}
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                      className={classes.submit}
                    >
                      Send
                    </Button>
                  </Form>
                )
              }}
            </Formik>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ContactPage
