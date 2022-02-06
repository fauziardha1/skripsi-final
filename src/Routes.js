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
import Form from "./pages/Form";
import Survey from "./pages/Survey";
import Exam from "./pages/Exam";
import Penyebaran from "./pages/Penyebaran";
import Profil from "./pages/Profil";
import Section from "./pages/Section";
import history from './history'; // import i
const Routes = ({setToken,token}) => (

    <Router history={history}>
        <Switch>
        <Route exact path="/" >
            <Dashboard setToken={setToken} token={token}/>
        </Route>
            {/* <Route exact path="/dashboard" component={Dashboard}/> */}
            <Route exact path="/form" >
                <Survey setToken={setToken} token={token}/>
            </Route>
            <Route exact path="/responden" >
                <Grafik setToken={setToken} token={token}/>
            </Route>
            <Route exact path="/list" >
                <List setToken={setToken} token={token}/>
            </Route>
            <Route exact path="/exam" >
                <Exam setToken={setToken} token={token}/>
            </Route>
            <Route exact path="/form-kuesioner" >
                <Form setToken={setToken} token={token}/>
            </Route>
            <Route exact path="/penyebaran" >
                <Penyebaran setToken={setToken} token={token}/>
            </Route>
            <Route exact path="/profil" >
                <Profil setToken={setToken} token={token}/>
            </Route>
            <Route exact path="/section" >
                <Section setToken={setToken} token={token}/>
            </Route>
            <Route path="*" component = {() => "404 NOT FOUND"}/>

        </Switch>
    </Router>
)
export default Routes;