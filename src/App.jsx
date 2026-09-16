import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home.jsx';
import List from './pages/list.jsx';
import Detail from './pages/detail.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/list">List</Link> |{" "}
        <Link to="/detail">Detail</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;