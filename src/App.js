import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import MapPage from './Pages/MapPage';

function App() {
  return (
  
    <Router>
      
      <nav>
        <ul class = "routerList">
          <li>
            <Link  to="/"><p className ="centerLink">Go to Home Page</p></Link>
          </li>
          <li class = "routerLi">
            <Link to="/map"><p className ="centerLink">Go to Map Page</p></Link>
          </li>
        </ul>
      </nav>
      <Header></Header>
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/map" element={<MapPage />} />
    </Routes>
  </Router>
  );
}

export default App;
