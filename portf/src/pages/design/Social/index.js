import { BackToHome, Subheader } from "@bits-general"
import { DesignProject } from "@bits-projects"
import { designContent } from "@constants/design"
import { Chip, Box } from "@mui/material"

export default () => {
  return (
    <>
      <BackToHome />
      {/* this is messed */}
      <Box sx={{ width: '80%' }}>
        <Chip sx={{ mx: 18, mb: 8, mt: -4 }} label="CLOTHING" variant="outlined" />
      </Box>
      {designContent.social.map(project =>
        <DesignProject
          title={project.title}
          desc={project.desc}
          tools={project.tools}
          images={project.images} />)}
    </>
  )
}