import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import ClientOAuth2 from 'client-oauth2';

class Login extends Component {
    state = {
        username: 'user2',
        password: 'user2',
        redirectToReferrer: false
    };

    auth = new ClientOAuth2({
        clientId: 'my-trusted-client',
        clientSecret: 'secret',
        accessTokenUri: 'http://192.168.1.59:4411/oauth/token'
    });

    login = async () => {
        const {username, password} = this.state;

        const user = await this.auth.owner.getToken(username, password);
        console.log(user);

        this.props.login(user.data);
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
