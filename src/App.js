import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div >
      <Router>
     
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/LeagueS/:idLeague">
            <Detail></Detail>
          </Route>
        </Switch>
     
    </Router>
      
    </div>
  );
}

export default App;
