import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutusPage';

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
