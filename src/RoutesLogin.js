import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Grafik from "./pages/Grafik";
import List from "./pages/List";

import Survey from "./pages/Survey";

const Routes = ({setToken}) => (

    <Router>
        <Switch>
            <Route exact path="/" >
                <Login  setToken={setToken}/>
            </Route>
            {/* <Route exact path="/home" component={Home}/> */}
            <Route exact path="/register" component={Register}/>
            <Route path="*" >
            <Login  setToken={setToken}/>
            </Route>

        </Switch>
    </Router>
)
export default Routes;