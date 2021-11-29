// import './App.css';
// import RoutesLink from "./routes/routes";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from "./components/login/login2"
import Register from './components/Register';
import Navbar from "./components/Navbar"
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Navbar />
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
