import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import AddBusiness from './AddBusiness';
import BusinessList from './BusinessList';

export default () => {
  const history = createBrowserHistory();
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            /<App />
          </Route>
          <Route exact path="/addbusiness">
            <AddBusiness />
          </Route>
          <Route exact path="/business">
            <BusinessList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
