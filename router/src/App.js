import {Route, Switch, NavLink} from 'react-router-dom'
import Test from "./Test"
import Home from "./Home"
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
        <NavLink exact activeClassName="active-link" to="/test">Test</NavLink>
      </nav>
      <Switch> 
        <Route exact path="/" component={Home}/>
        <Route exact path="/test" component={Test} />
      </Switch>
    </div>
  );
}

export default App;

/**
 * Caution: for Switch, order matters. First matching route will show. 
 * Alternative: use exact path - Can be used together with Switch, 
 * but order doesn't matter because only exact match will be shown
 **/