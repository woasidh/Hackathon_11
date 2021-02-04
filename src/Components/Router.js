import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from "../Routes/Main";
import Landing from '../Routes/Landing'

const AppRouter = () => (
    <Router>
        <Switch>
            <Route path="/landing" exact component={Landing} />
            <Route path="/" exact component={Main} />
            <Redirect path="*" to="/" />
        </Switch>
    </Router>
);

export default AppRouter;
