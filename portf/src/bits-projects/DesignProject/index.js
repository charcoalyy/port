import Grid from '@mui/material/Unstable_Grid2'
import { Box, Divider, Typography } from "@mui/material"
import { Carousel } from '@bits-general'

export default ({ title, desc, tools, images }) => {
  return (
    <Grid container sx={{ mb: 6 }}>
      <Grid xs={4}>
        {/* this spacing is also messed */}
        <Box sx={{ ml: 18, mb: 2 }}>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="body1">{desc}</Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>{tools}</Typography>
        </Box>
        <Divider variant="fullWidth" sx={{ mr: 4, bgcolor: 'black' }}></Divider>
      </Grid>
      <Grid xs={7}>
        <Carousel images={images} />
      </Grid>
    </Grid>
  )
}