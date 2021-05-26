import {Route, Switch} from 'react-router-dom'
import Test from "./Test"
import Home from "./Home"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch> 
        <Route path="/test" component={Test} />
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;

/**
 * Caution: for Switch, order matters. First matching route will show. 
 * Alternative: use exact path - Can be used together with Switch
 **/