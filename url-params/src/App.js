import React, {Component} from "react"
import { Route } from 'react-router-dom';
import './App.css';
import Food from './Food';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route 
          exact 
          path="/food/:name" 
          render={(routeProps) => <Food name={routeProps.match.params.name} />}
        />
        
      </div>
    );
  }
  
}

export default App;
