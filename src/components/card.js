import React, { useState } from "react"
import * as cardStyles from "./card.module.css"
import { Button, Link as MuiLink } from "@material-ui/core"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Card = () => {
  const [hoverClass, setHoverClass] = useState(false)

  const cardHoverStyle = {
    top: "200px",
  }

  return (
    <div
      className={cardStyles.card}
      onClick={() =>
        setHoverClass(hoverClass => (hoverClass === false ? true : false))
      }
    >
      <h3 className="heading">Heading</h3>
      <StaticImage
        className={cardStyles.imageHolder}
        src="../images/sunset.png"
        alt="sunset main page"
        loading="eager"
        placeholder="blurred"
        transformOptions={{
          // @ts-ignore
          duotone: { opacity: 40, highlight: "#000000", shadow: "#000000" },
        }}
      />
      <div
        className={cardStyles.content}
        style={hoverClass ? cardHoverStyle : null}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MuiLink to="/404" component={Link} style={{ margin: "0 3px" }}>
            <Button size="small" color="secondary" variant="contained">
              Code
            </Button>
          </MuiLink>
          <MuiLink to="/404" component={Link} style={{ margin: "0 3px" }}>
            <Button size="small" color="secondary" variant="contained">
              Site
            </Button>
          </MuiLink>
          <MuiLink to="/404" component={Link} style={{ margin: "0 3px" }}>
            <Button size="small" color="secondary" variant="contained">
              ...More
            </Button>
          </MuiLink>
        </div>
      </div>
    </div>
  )
}

export default Card
