import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

export default ({ name, desc, thumb, link, tags }) => {
  return (
    <Link to={link}>
      <div className="item-card">
        <div className="thefuckisthis">
          <div className="circle">
          </div>
          <div className="content">
            <Typography className="text" variant="h1" sx={{ textTransform: 'uppercase' }}>{name}</Typography>
            <div>
              {thumb && <img className="mini-thumb" src={require('@figures/thumbnails/' + thumb + '.png')}></img>}
              <div>
                <Typography className="text additional" variant="body2" sx={{ fontStyle: 'italic', textTransform: 'uppercase' }}>VIEW WORK ↗</Typography>
                <Typography className="text" variant="body1">{desc}</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}