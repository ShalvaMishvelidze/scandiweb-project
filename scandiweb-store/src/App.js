import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
    </div>
  );
}

export default App;
