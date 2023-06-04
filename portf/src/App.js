import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from 'styles/theme'
import { ThemeProvider } from '@mui/material'

import { Body } from 'pages/general'
import { Ecocar, RoomE, Timely, InspireMusic, TickMe } from 'pages/projects'
import { Clothing, Print, Social, Web } from 'pages/design'
import { ScrollTop, Footer, ScrollTopButton } from "@bits-general"

function App() {
  return (
    <Router>
      <ScrollTop />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Body />}></Route>

          <Route path="/inspire-music" element={<InspireMusic />} />
          <Route path="/timely" element={<Timely />} />
          <Route path="/tickme" element={<TickMe />} />
          <Route path="/roomE" element={<RoomE />} />
          <Route path="/ecocar" element={<Ecocar />} />

          <Route path="/print-design" element={<Print />} />
          <Route path="/clothing-design" element={<Clothing />} />
          <Route path="/web-design" element={<Web />} />
          <Route path="/social-media-design" element={<Social />} />
        </Routes>
        <Footer />
        <ScrollTopButton />
      </ThemeProvider>
    </Router>
  );
}

export default App;
