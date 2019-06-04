import React from 'react';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from './PrivateRoute/container';
import NotFound from "../app/components/Main/screens/NotFound";
import Home from "../app/components/Main/screens/Home";
import Login from "../app/components/Main/screens/Login/container";
import Protected from "../app/components/Main/screens/Protected";

const MainRouter = () => (
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact/>
        <PrivateRoute path="/protected" component={Protected} />
        <Route component={NotFound}/>
    </Switch>
);

export default MainRouter;
