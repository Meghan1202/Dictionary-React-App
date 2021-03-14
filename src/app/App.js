import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home/Home';
import Index from '../pages/Index/Index';
import AddWord from '../pages/AddWord/AddWord';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/add-word">
          <AddWord />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
