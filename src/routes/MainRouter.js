import React from 'react';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from './PrivateRoute/container';
import NotFound from "../screens/NotFound";
import Home from "../screens/Home";
import Login from "../screens/Login/container";
import Protected from "../screens/Protected";

const MainRouter = () => (
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact/>
        <PrivateRoute path="/protected" component={Protected} />
        <Route component={NotFound}/>
    </Switch>
);

export default MainRouter;
