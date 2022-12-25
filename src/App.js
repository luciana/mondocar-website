import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutusPage';
import './Pages/pages.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/AboutUs" exact element={<AboutUs />} />         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
