import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Corporate from './pages/Corporate';
import { Code503 } from './pages/HTTP';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Corporate />} />
          <Route path="/agency" element={<Code503 />} />
          <Route path="/consulting" element={<Code503 />} />
          <Route path="/services" element={<Code503 />} />
          <Route path="/business" element={<Code503 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
