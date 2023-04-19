import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Corporate from './pages/Corporate';
import Agency from './pages/Agency';
import Consulting from './pages/Consulting';
import Services from './pages/Services';
import Business from './pages/Business';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Corporate />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/services" element={<Services />} />
          <Route path="/business" element={<Business />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
