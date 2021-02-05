import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from "../Routes/Main";
import Landing from '../Routes/Landing'
import Signup from '../Routes/Signup/Signup'
import Login from '../Routes/Login/Login'
import Logout from '../Routes/Logout/Logout'

const AppRouter = () => (
    <Router>
        <Switch>
            <Route path="/logout" exact component={Logout} />
            <Route path="/login" exact component={Login} />
            <Route path="/main" exact component={Main} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/" exact component={Landing} />
            <Redirect path="*" to="/" />
        </Switch>
    </Router>
);

export default AppRouter;
