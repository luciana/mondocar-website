import {
  BrowserRouter as Router,
  Switch,
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
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/AboutUs" exact component={AboutUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
