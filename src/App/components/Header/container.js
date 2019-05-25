import {connect} from 'react-redux';
import Header from './component';
import {token} from "../../../data/store/slices";
import {oauth} from "../../../api/oauth";

const mapStateToProps = state => {
    const {token: {data}} = state;
    const isAuthenticated = token && data.access_token;
    return {isAuthenticated, data}
};

const mapDispatchToProps = dispatch => {
    function refreshToken(data) {
        const tokenObj = oauth.createToken(data);
        tokenObj.refresh().then(newToken => {
                dispatch(token.actions.setToken(newToken))
            }
        );
    }

    return {
        refreshToken,
        logout: () => dispatch(token.actions.logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
