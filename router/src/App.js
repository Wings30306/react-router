import {Route} from 'react-router-dom'
import Test from "./Test"
import Home from "./Home"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home}/>
      <Route path="/test" component={Test} />
    </div>
  );
}

export default App;
