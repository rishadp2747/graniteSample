import React, { useEffect } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { registerIntercepts } from "apis/axios";
import { initializeLogger } from "common/logger";
import Dashboard from "components/Dashboard";
import CreateTask from "components/Tasks/CreateTask";

const App = () => {
  useEffect(() => {
    initializeLogger();
    registerIntercepts();
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/tasks/create" component={CreateTask} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
