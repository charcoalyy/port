import { Stack, Chip, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { aboutText, aboutRoles } from "@constants/about"

export default () => {
    return (
        <Grid container justifyContent="space-between">
            <Grid xs={5.5}>
                {aboutText.map(about => <Typography variant={about.variant}>{about.text}</Typography>)}
            </Grid>
            <Grid xs={6} container direction="column" spacing={2}>
                <Grid>
                    <Typography variant="caption">Professionally</Typography>
                    <Grid container direction="row">
                        {aboutRoles.professional.map(about => <Chip clickable label={about} />)}
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant="caption">Leisurely</Typography>
                    <Grid container direction="row">
                        {aboutRoles.leisure.map(about => <Chip clickable label={about} />)}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
