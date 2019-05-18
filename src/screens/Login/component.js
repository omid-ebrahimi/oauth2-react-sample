import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    state = {redirectToReferrer: false};

    login = () => {
        this.props.login();
        this.setState({redirectToReferrer: true});
    };

    render() {
        let {from} = this.props.location.state || {from: {pathname: "/"}};
        let {redirectToReferrer} = this.state;

        if (redirectToReferrer) return <Redirect to={from}/>;

        return (
            <div>
                <h1>Login</h1>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;
