// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import CPU from './CPU.jsx';
import GPU from './GPU.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="src/CPU" element={<CPU />} />
      <Route path="src/GPU" element={<GPU />} />
    </Routes>
  );
}

export default App;