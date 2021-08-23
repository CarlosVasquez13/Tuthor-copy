import React, { Fragment, useState } from "react";
import Landingpage from "./components/Landingpage";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/SignIn.jsx";
import Login from "./components/Login.jsx"
import MisTutorias from './components/dashboard/MisTutorias';
import Principal from './components/dashboard/Principal';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState(0)

  return (
    <Fragment>
      <Router>
        <Switch>
        <Route exact path="/" >
            <Landingpage />
          </Route>
          <Route path="/Home">
            <Landingpage />
          </Route>
          <Route path="/Signin">
            <SignIn />
          </Route>
          <Route path="/Login">
            <Login 
              setUser = {setUser}
            />
          </Route>
          <Route path="/Dashboard">
            <Dashboard 
              typeUser = {user}
            />
          </Route>

          <Route path="/MisTutorias">
            <MisTutorias />
          </Route>
          <Route path="/Principal">
            <Principal />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
