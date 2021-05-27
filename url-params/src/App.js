import React, {Component} from "react"
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Food from './Food';
import FoodSearch from "./FoodSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            exact 
            path="/food/:name" 
            render={(routeProps) => <Food name={routeProps.match.params.name} />}
          />
          <Route exact path="/" component={FoodSearch} />
          <Route render={() => <h1>404 Sorry, Page Not Found!</h1>} />
        </Switch>
      </div>
    );
  }
  
}

export default App;

// REMINDER: order matters in Switch