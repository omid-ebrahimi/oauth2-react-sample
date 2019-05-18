import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "./screens/NotFound";
import Home from "./screens/Home";
import Login from "./screens/Login";

const MainRouter = () => (
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact/>
        <Route component={NotFound} />
    </Switch>
);

export default MainRouter;
