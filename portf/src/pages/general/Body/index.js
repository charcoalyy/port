import { useEffect, useMemo, useRef } from "react"
import { Header, Thumb } from "@bits-general"
import { Stack, Chip, Container } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import { designThumbnails, projectThumbnails } from "@constants/projectConstants"
import { About } from "pages/general"
import useBody from 'context/bodyContext'

export default () => {
  const bodyRef = useRef()
  const { goDown, setGoDown, tab, setTab } = useBody()

  useEffect(() => {
    document.title = 'alina'
  }, [])

  useEffect(() => {
    if (goDown) {
      bodyRef.current.scrollIntoView({
        behaviour: 'smooth'
      })
      setGoDown(false)
    }
  }, [goDown, setGoDown])

  const displayTab = useMemo(() => {
    switch (tab) {
      case "about":
        return (
          <About />
        )
      case "design":
        return (
          <Container>
            {designThumbnails.map(thumbnail =>
              <Thumb
                key={thumbnail.name}
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
          <Container>
            {projectThumbnails.map(thumbnail =>
              <Thumb
                key={thumbnail.name}
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
      <Header setGoDown={setGoDown} />
      <Stack sx={{ width: '75%', mx: 'auto', py: '4rem' }} direction="column" spacing={4} ref={bodyRef}>
        <Grid container spacing={2} sx={{ mb: '2rem' }}>
          <Grid xs={4}>
            <Chip clickable label="ABOUT" variant="outlined" onClick={() => setTab("about")} sx={{ backgroundColor: tab === "about" && '#FFEDED' }} />
          </Grid>
          <Grid xs={4}>
            <Chip clickable label="PROJECTS" variant="outlined" onClick={() => setTab("dev")} sx={{ backgroundColor: tab === "dev" && '#FFEDED' }} />
          </Grid>
          <Grid xs={4}>
            <Chip clickable label="DESIGN" variant="outlined" onClick={() => setTab("design")} sx={{ backgroundColor: tab === "design" && '#FFEDED' }} />
          </Grid>
        </Grid>
        {displayTab}
      </Stack>
    </section>
  )
}

