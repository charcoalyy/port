import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InspireMusic from '@pages-projects/InspireMusic';
import Timely from '@pages-projects/Timely';
import Body from '@pages-general/Body';
import TickMe from '@pages-projects/TickMe';
import Ecocar from '@pages-projects/Ecocar';
import About from '@pages-general/About';
import RoomE from '@pages-projects/RoomE';
import { ScrollTop, Footer, ScrollTopButton } from "@bits-general"
import theme from 'styles/theme'
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <Router>
      <ScrollTop />
      <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Body />}></Route>
              <Route path="/about" element={<About />} />
              <Route path="/inspire-music" element={<InspireMusic />} />
              <Route path="/timely" element={<Timely />} />
              <Route path="/tickme" element={<TickMe />} />
              <Route path="/roomE" element={<RoomE />} />
              <Route path="/ecocar" element={<Ecocar />} />
            </Routes>
            <Footer/>
            <ScrollTopButton />
      </ThemeProvider>
    </Router>
  );
}

export default App;
