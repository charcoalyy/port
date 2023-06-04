import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

export default ({ name, desc, img, link, tags }) => {
  return (
    <Link to={link}>
      <div className="item-card">
        <div className="thefuckisthis">
          <div className="circle">
          </div>
          <div className="text">
            <div>
              <Typography variant="h1">{name}</Typography>
            </div>
            <div>
              <Typography variant="body1">{desc}</Typography>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}