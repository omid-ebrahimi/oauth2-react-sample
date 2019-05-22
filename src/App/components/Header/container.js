import {connect} from 'react-redux';
import Header from './component';
import {token} from "../../../data/store/slices";

const mapStateToProps = state => {
    const {token} = state;
    // Todo: check if token expired
    const isAuthenticated = token && token.data.access_token;
    return {isAuthenticated}
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(token.actions.logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
