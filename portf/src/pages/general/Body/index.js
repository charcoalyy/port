import { useEffect, useMemo, useRef } from "react"
import { Header, Thumb } from "@bits-general"
import { Stack, Chip, Container } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'

import { projectThumbnails } from "@constants/projectConstants"
import { designThumbnails } from "@constants/designConstants"
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
                thumb={thumbnail.thumb}
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
                tags={thumbnail.tags}
                thumb={thumbnail.thumb}
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
          <Grid sm={4} xs={12}>
            <Chip clickable label="ABOUT" variant="outlined" onClick={() => setTab("about")} sx={{ backgroundColor: tab === "about" && '#FFEDED' }} />
          </Grid>
          <Grid sm={4} xs={12}>
            <Chip clickable label="PROJECTS" variant="outlined" onClick={() => setTab("dev")} sx={{ backgroundColor: tab === "dev" && '#FFEDED' }} />
          </Grid>
          <Grid sm={4} xs={12}>
            <Chip clickable label="DESIGN" variant="outlined" onClick={() => setTab("design")} sx={{ backgroundColor: tab === "design" && '#FFEDED' }} />
          </Grid>
        </Grid>
        {displayTab}
      </Stack>
    </section>
  )
}

