import React, { useEffect } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { initializeLogger } from "common/logger";
import Dashboard from "components/Dashboard";

//import { setAuthHeaders } from "apis/axios";

const App = () => {
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeLogger();
    //setAuthHeaders(setLoading);
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              Home <p>Hellllloooo home</p>
            </div>
          )}
        />
        <Route exact path="/about" render={() => <div>About</div>} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
