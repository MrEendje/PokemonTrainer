import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/Home.jsx';
import List from './pages/List.jsx';
import Detail from './pages/Detail.jsx';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;