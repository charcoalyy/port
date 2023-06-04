import { useEffect, useMemo, useRef, useState } from "react"
import { Header, Thumb } from "@bits-general"
import { Stack, Chip, Container } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import { designThumbnails, projectThumbnails } from "@constants/projectConstants"
import About from "../About"

export default () => {
  const bodyRef = useRef()
  const [workNav, setWorkNav] = useState(false)

  // this needs to happen on everything 'back home'
  useEffect(() => {
    if (workNav) {
      bodyRef.current.scrollIntoView()
      setWorkNav(false)
    }
  }, [workNav])

  // this needs to be remembered each re-render
  const [tab, setTab] = useState("dev")

  const displayTab = useMemo(() => {
    switch (tab) {
      case "about":
        return (
          <About />
        )
      case "design":
        return (
          <Container>
            {designThumbnails.map(thumbnail => <Thumb
              name={thumbnail.name}
              link={thumbnail.path}
              desc={thumbnail.desc}
              img={thumbnail.img}
              tags={thumbnail.tags}
            />)}
          </Container>
        )
      default:
        return (
          <Container ref={bodyRef}>
            {projectThumbnails.map(thumbnail => <Thumb
              name={thumbnail.name}
              link={thumbnail.path}
              desc={thumbnail.desc}
              img={thumbnail.img}
              tags={thumbnail.tags}
            />)}
          </Container>
        )
    }
  }, [tab])

  return (
    <section className="home">
      <Header workNav={workNav} setWorkNav={setWorkNav} />
      <Stack sx={{ width: '75%', mx: 'auto', my: '4rem' }} direction="column" spacing={4}>
        <Grid container spacing={2} sx={{ mb: '2rem' }}>
          <Grid xs={4}>
            <Chip clickable label="ABOUT" variant="outlined" onClick={() => setTab("about")} />
          </Grid>
          <Grid xs={4}>
            <Chip clickable label="DEVELOPMENT" variant="outlined" onClick={() => setTab("dev")} />
          </Grid>
          <Grid xs={4}>
            <Chip clickable label="DESIGN" variant="outlined" onClick={() => setTab("design")} />
          </Grid>
        </Grid>
        {displayTab}
      </Stack>
    </section>
  )
}

