import { BackToHome } from "@bits-general"
import { DesignProject } from "@bits-projects"
import { designContent } from "@constants/designConstants"
import { Chip, Box } from "@mui/material"
import { useEffect } from "react"

export default ({ title, category }) => {
  useEffect(() => {
    document.title = title
  }, [])

  return (
    <>
      <BackToHome />
      {/* this is messed */}
      <Box sx={{ width: '80%' }}>
        <Chip sx={{ mx: 18, mb: 8, mt: -4, textTransform: 'uppercase' }} label={title} variant="outlined" />
      </Box>
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