import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import MapPage from './Pages/MapPage';

function App() {
  return (
  
    <Router>
        <Header></Header>
      <nav>
        <ul>
          <li>
            <Link  to="/">Go to Home Page</Link>
          </li>
          <li class = "routerLi">
            <Link to="/map" className ="centerLink"><p>Go to Map Page</p></Link>
          </li>
        </ul>
      </nav>

    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/map" element={<MapPage />} />
    </Routes>
  </Router>
  );
}

export default App;
