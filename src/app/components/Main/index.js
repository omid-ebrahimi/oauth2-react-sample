import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login/container";
import PrivateRoute from "./PrivateRoute/container";
import Protected from "./screens/Protected";
import NotFound from "./screens/NotFound";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Login} exact/>
                <PrivateRoute path="/protected" component={Protected} />
                <Route component={NotFound}/>
            </Switch>
        </main>
    );
};

export default Main;
