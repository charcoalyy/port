import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InspireMusic from './InspireMusic';
import Timely from './Timely';
import Body from './Body';

function App() {
  return (
    <Router>
    <div className="App">
          <Routes>
            <Route path="/" element={<Body />}></Route>
            <Route path="/inspire-music" element={<InspireMusic />} />
            <Route path="/timely" element={<Timely />} />
          </Routes>
    </div>
    </Router>
  );
}

export default App;
