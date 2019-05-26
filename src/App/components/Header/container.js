import {connect} from 'react-redux';
import Header from './component';
import {token} from "../../../data/store/slices";
import {createToken} from "../../../api/oauth";

const mapStateToProps = state => {
    const {token: {data, expiryDate}} = state;
    const isAuthenticated = token && data.access_token;
    return {isAuthenticated, tokenData: data, expiryDate}
};

const mapDispatchToProps = dispatch => {

    function refreshToken(tokenData, expiryDate) {
        const tokenObj = createToken(tokenData, expiryDate);

        tokenObj.refresh().then(({data, expires}) => {
            dispatch(token.actions.setToken({data, expiryDate: expires}))
        }).catch((e) => {
                // dispatch(token.actions.logout());
                console.log(e)
            }
        )
    }

    return {
        refreshToken,
        logout: () => dispatch(token.actions.logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
