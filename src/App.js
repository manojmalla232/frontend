
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CompanyManagement from './pages/CompanyManagement';
import ReviewPage from './pages/ReviewPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/company-management" component={CompanyManagement} />
        <Route path="/reviews" component={ReviewPage} />
      </Switch>
    </Router>
  );
}

export default App;
