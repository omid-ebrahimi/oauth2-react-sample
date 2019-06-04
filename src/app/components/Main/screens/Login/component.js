import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {oauth} from '../../../../../api/oauth';

class Login extends Component {
    state = {
        username: 'user2',
        password: 'user2',
        redirectToReferrer: false
    };

    login = async () => {
        const {username, password} = this.state;
        const token = await oauth.owner.getToken(username, password);
        this.props.setToken(token.data, token.expires);
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

Login.propTypes = {
  location: PropTypes.object,
  setToken: PropTypes.func.isRequired
};

export default Login;
