import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/Home/Home';
import Redirect from '../views/Redirect/Redirect';

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/:redirectCode/" component={Redirect}></Route>
            <Route render={() => <h1>Not found!</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
