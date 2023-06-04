import { Stack, Chip, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { aboutText, aboutRoles, aboutLinks } from "@constants/aboutConstants"

export default () => {
  return (
    <Grid container justifyContent="space-between" sx={{ pb: '4rem' }}>
      <Grid xs={5.5}>
        {aboutText.map((about, index) =>
          <Typography
            key={`about-text-${index}`}
            variant={about.variant}>
            {about.text}
          </Typography>)}
        <Stack direction="row" sx={{ mt: '1rem' }}>
          {aboutLinks.map(link =>
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer">
              {link.icon}
            </a>)}
        </Stack>
      </Grid>
      <Grid xs={6} container direction="column" spacing={2}>
        <Grid>
          <Typography variant="caption">Professionally</Typography>
          <Grid container direction="row">
            {aboutRoles.professional.map(about => <Chip clickable label={about} key={about} />)}
          </Grid>
        </Grid>
        <Grid>
          <Typography variant="caption">Leisurely</Typography>
          <Grid container direction="row">
            {aboutRoles.leisure.map(about => <Chip clickable label={about} key={about} />)}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
