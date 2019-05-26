import React, {Component} from "react";
import PropTypes from "prop-types"
import {Route, Redirect} from "react-router-dom";

class PrivateRoute extends Component {
    componentDidMount() {
        const {tokenMustRefresh, refreshToken, tokenData, expiryDate} = this.props;
        if (tokenMustRefresh) refreshToken(tokenData, expiryDate);
    }

    render() {
        const {component: Component, isAuthenticated, tokenMustRefresh, ...rest} = this.props;
        return (
            <Route
                {...rest}
                render={props =>
                    (
                        isAuthenticated ? (<Component {...props} />)
                            : (<Redirect to={{pathname: "/login", state: {from: props.location}}}/>)
                    )
                }
            />
        );
    }
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    tokenData: PropTypes.object.isRequired,
    expired: PropTypes.bool,
    isAuthenticated: PropTypes.bool.isRequired,
    refreshToken: PropTypes.func.isRequired
};
