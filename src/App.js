// src/App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <Navbar />
          <Route path="/home" component={Home} />
          <Route path="/registered" component={() => <div>Registered Page</div>} />
          <Route path="/potentials" component={() => <div>Potentials Page</div>} />
          <Route path="/myteam" component={() => <div>MyTeam Page</div>} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
