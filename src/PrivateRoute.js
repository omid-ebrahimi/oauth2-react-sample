import React from "react";
import {Route, Redirect} from "react-router-dom";

const auth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props =>
                auth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
                )
            }
        />
    );
}

export default PrivateRoute;
