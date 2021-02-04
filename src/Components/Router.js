import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from "../Routes/Main";

const AppRouter = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Main} />
            <Redirect path="*" to="/" />
        </Switch>
    </Router>
);

export default AppRouter;
