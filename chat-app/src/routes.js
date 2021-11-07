import React from "react";
// import { useContext } from "react";
import {
  HashRouter as Router,
  // Link,
  Switch,
  Route,
  Redirect,
  // useLocation,
  // useHistory
} from 'react-router-dom';
// import userLogin from "./hooks/userLogin";

import Chat from "./pages/Chat";
import Login from "./pages/Login";
// import { UserContext } from './context/login';



function Routes() {
  // const { user } = useContext(UserContext);

  return (
    
    <Router>
      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          {<Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  )

}

export default Routes;