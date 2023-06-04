import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from 'styles/theme'
import { ThemeProvider } from '@mui/material'

import { ScrollTop, ScrollTopButton } from '@bits-general'
import { Body } from 'pages/general'
import { Ecocar, RoomE, Timely, InspireMusic, TickMe } from 'pages/projects'
import { Clothing, Print, Social, Web } from 'pages/design'
import { BodyContextProvider } from 'context/bodyContext'
import { useEffect } from 'react'

function App() {
  return (
    <Router>
      <BodyContextProvider>
        <ScrollTop />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Body />}></Route>

            <Route path="/inspire-music" element={<InspireMusic />} />
            <Route path="/timely" element={<Timely />} />
            <Route path="/tick-me" element={<TickMe />} />
            <Route path="/roomE" element={<RoomE />} />
            <Route path="/ecocar" element={<Ecocar />} />

            <Route path="/print-design" element={<Print />} />
            <Route path="/clothing-design" element={<Clothing />} />
            <Route path="/web-design" element={<Web />} />
            <Route path="/social-media-design" element={<Social />} />
          </Routes>
          <ScrollTopButton />
        </ThemeProvider>
      </BodyContextProvider>
    </Router>
  )
}

export default App;
