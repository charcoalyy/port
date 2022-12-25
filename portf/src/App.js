import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import InspireMusic from './InspireMusic';
import Timely from './Timely';
import Body from './Body';
import ScrollTop from './ScrollTop';
import Footer from './Footer';
import ScrollTopButton from './ScrollTopButton';
import TickMe from './TickMe';

function App() {
  return (
    <Router>
      <ScrollTop />
      <div className="App">
            <Routes>
              <Route path="/" element={<Body />}></Route>
              <Route path="/inspire-music" element={<InspireMusic />} />
              <Route path="/timely" element={<Timely />} />
              <Route path="/tickme" element={<TickMe />} />
            </Routes>
            <Footer/>
            <ScrollTopButton />
      </div>
    </Router>
  );
}

export default App;
