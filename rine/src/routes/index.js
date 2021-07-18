import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/Home/Home';
import Redirect from '../views/Redirect/Redirect';
import ErrorPage from '../views/ErrorPage/ErrorPage';

function Layout() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/:redirectCode/" component={Redirect}></Route>
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
