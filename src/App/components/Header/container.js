import {connect} from 'react-redux';
import Header from './component';
import {user} from "../../../data/store/slices";

const mapStateToProps = state => {
    const {token} = state.user;
    // Todo: check if token expired
    const isAuthenticated = token && token.access_token;
    return {isAuthenticated}
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(user.actions.logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
