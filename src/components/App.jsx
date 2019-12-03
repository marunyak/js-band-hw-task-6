import React from 'react';
import {
  HashRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import TodosPage from './TodosPage';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/todos" />
        <Route path="/todos" component={TodosPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
