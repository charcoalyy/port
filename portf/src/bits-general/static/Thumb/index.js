import { Card, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { Link } from "react-router-dom"

export default ({ name, desc, img, link, tags }) => {
  return (
    <>
      {/* <Card sx={{ mb: 4, minHeight: '150px' }}>
        <Grid container justifyContent="space-between" alignItems="flex-end">
          <Grid xs={8}>
            <div className="thefuckisthis">
              <div className="circle">
              </div>
              <div className="text">
                <Typography variant="h1">{name}</Typography>
              </div>
            </div>
          </Grid>
          <Grid xs={3}>
            <Typography variant="body1">{desc}</Typography>
          </Grid>
        </Grid>

      </Card> */}

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

    </>

    // <Link to={link} className="thumbnail-link">
    //     <div className="thumbnail">
    //         <div className="thumbnail-container">
    //             <img src={img}></img>
    //         </div>
    //         <h3>{name}</h3>
    //         <p>{desc}</p>
    //         <div className="tags">
    //             {tags && tags.map(tag => {
    //                 return <p className="tag">{tag}</p>
    //             })}
    //         </div>
    //     </div>
    // </Link>
  )
}

export const newThumb = ({ name, desc, img, link, tags }) => {
  return (
    <Card>
      <Typography variant="h1">{name}</Typography>
      <Typography variant="body1">{desc}</Typography>
    </Card>
  )
}