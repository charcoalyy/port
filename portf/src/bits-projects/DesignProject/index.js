import Grid from '@mui/material/Unstable_Grid2'
import { Box, Divider, Typography } from "@mui/material"
import { Carousel } from '@bits-general'

export default ({ title, desc, tools, images }) => {
  return (
    <Grid container sx={{ mb: 12, mx: { xs: 4 } }}>
      <Grid sm={4} xs={12} sx={{ mr: { sm: 6, xs: 10 } }}>
        <Box sx={{ ml: { sm: 20 }, mb: 2 }}>
          <Typography variant="h1" sx={{ mb: 1 }}>{title}</Typography>
          <Typography variant="body1" sx={{ mb: 0.5 }}>{desc}</Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>tools: {tools}</Typography>
        </Box>
        <Divider variant="fullWidth" sx={{ bgcolor: 'black' }}></Divider>
      </Grid>
      <Grid sm={6.5} xs={12} sx={{ gcolor: 'blue' }}>
        <Carousel images={images} />
      </Grid>
    </Grid>
  )
}