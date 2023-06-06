import { BackToHome } from "@bits-general"
import { DesignProject } from "@bits-projects"
import { designContent } from "@constants/designConstants"
import { Chip, Box } from "@mui/material"
import { useEffect } from "react"
import Grid from '@mui/material/Unstable_Grid2'

export default ({ title, category }) => {
  useEffect(() => {
    document.title = title
  }, [])

  return (
    <>
      <BackToHome />
      <Grid container xs={10.95} sx={{ mb: 8 }}>
        <Chip sx={{ ml: { sm: 20, xs: 12 }, mt: -3.5, textTransform: 'uppercase' }} label={title} variant="outlined" />
      </Grid>
      {designContent[category].map(project =>
        <DesignProject
          key={project.title}
          title={project.title}
          desc={project.desc}
          tools={project.tools}
          images={project.images} />)}
    </>
  )
}