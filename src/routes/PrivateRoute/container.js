import {connect} from 'react-redux';
import {token} from '../../data/store/slices';
import PrivateRoute from './component';
import {oauth} from '../../api/oauth';

const mapStateToProps = state => {
    const {token: {data, expiryDate}} = state;

    const isAuthenticated = !!(token && data.access_token);
    const tokenExpired = isAuthenticated && expiryDate.getTime() <= (new Date().getTime() + 10000);

    return {isAuthenticated, tokenExpired, data}
};

const mapDispatchToProps = dispatch => {

    function refreshToken(data) {
        const tokenObj = oauth.createToken(data);
        tokenObj.refresh().then(newToken => {
            dispatch(token.actions.setToken(newToken))
        });
    }

    return {refreshToken}
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
