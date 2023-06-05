import Grid from '@mui/material/Unstable_Grid2'
import { Box, Divider, Typography } from "@mui/material"
import { Carousel } from '@bits-general'

export default ({ title, desc, tools, images }) => {
  return (
    <Grid container sx={{ mb: 10 }}>
      <Grid xs={4} sx={{ mr: 6 }}>
        <Box sx={{ ml: 20, mb: 2 }}>
          <Typography variant="h1" sx={{ mb: 1 }}>{title}</Typography>
          <Typography variant="body1" sx={{ mb: 0.5 }}>{desc}</Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>tools: {tools}</Typography>
        </Box>
        <Divider variant="fullWidth" sx={{ bgcolor: 'black' }}></Divider>
      </Grid>
      <Grid xs={6.5} sx={{ gcolor: 'blue' }}>
        <Carousel images={images} />
      </Grid>
    </Grid>
  )
}