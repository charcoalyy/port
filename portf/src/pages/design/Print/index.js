import { BackToHome } from "@bits-general"
import { DesignProject } from "@bits-projects"
import { designContent } from "@constants/designConstants"
import { Chip, Box } from "@mui/material"

export default () => {
  return (
    <>
      <BackToHome />
      {/* this is messed */}
      <Box sx={{ width: '80%' }}>
        <Chip sx={{ mx: 18, mb: 8, mt: -4 }} label="PRINT" variant="outlined" />
      </Box>
      {designContent.print.map(project =>
        <DesignProject
          key={project.title}
          title={project.title}
          desc={project.desc}
          tools={project.tools}
          images={project.images} />)}
    </>
  )
}