import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from "../Routes/Main";
import Landing from '../Routes/Landing'
import Signup from '../Routes/Signup/Signup'
import Login from '../Routes/Login/Login'
import _Popup from '../Routes/Popup/_Popup'

const AppRouter = () => (
    <Router>
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/popup" exact component={_Popup} />
            <Route path="/landing" exact component={Landing} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/" exact component={Main} />
            <Redirect path="*" to="/" />
        </Switch>
    </Router>
);

export default AppRouter;
