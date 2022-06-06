import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Forthcoming from './pages/Forthcoming';
import Completed from './pages/Completed';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/" exact>
          <Home />
         </Route>

          <Route path="/menu" exact>
        <Menu />
      </Route>

      <Route path="/completed" exact>
        <Completed />
      </Route>

    <Route path="forthcoming" exact>
      <Forthcoming />
    </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
