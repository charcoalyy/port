import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import InspireMusic from './InspireMusic';
import Timely from './Timely';
import Body from './Body';
import ScrollTop from './ScrollTop';
import Footer from './Footer';
import ScrollTopButton from './ScrollTopButton';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <ScrollTop />
      <div className="App">
            <Routes>
              <Route path="/" element={<Body />}></Route>
              <Route path="/inspire-music" element={<InspireMusic />} />
              <Route path="/timely" element={<Timely />} />
            </Routes>
            <Footer/>
            <ScrollTopButton />
      </div>
    </Router>
  );
}

export default App;
