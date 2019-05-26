import {connect} from 'react-redux';
import {token} from '../../data/store/slices';
import PrivateRoute from './component';
import {createToken, isAuthError} from '../../api/oauth';

const mapStateToProps = state => {
    const {token: {data, expiryDate}} = state;

    const isAuthenticated = !!(token && data.access_token);
    const tokenMustRefresh = isAuthenticated && expiryDate.getTime() <= (new Date().getTime() + 10000);

    return {isAuthenticated, tokenMustRefresh, tokenData: data, expiryDate}
};

const mapDispatchToProps = dispatch => {

    function refreshToken(tokenData, expiryDate) {
        const tokenObj = createToken(tokenData, expiryDate);

        tokenObj.refresh().then(({data, expires}) => {
            dispatch(token.actions.setToken({data, expiryDate: expires}))
        }).catch((e) => {
                isAuthError(e) && dispatch(token.actions.logout());
            }
        )
    }

    return {refreshToken}
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
