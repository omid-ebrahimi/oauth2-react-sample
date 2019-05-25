import React, {Component} from "react";
import PropTypes from "prop-types"
import {Route, Redirect} from "react-router-dom";

class PrivateRoute extends Component {
    render() {
        const {component: Component, isAuthenticated, tokenExpired, refreshToken, data, ...rest} = this.props;

        if (tokenExpired) refreshToken(data);

        return (
            <Route
                {...rest}
                render={props =>
                    isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
                    )
                }
            />
        );
    }
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  data: PropTypes.object.isRequired,
  expired: PropTypes.bool,
  isAuthenticated: PropTypes.bool.isRequired,
  refreshToken: PropTypes.func.isRequired
};
