import {connect} from 'react-redux';
import PrivateRoute from './component';

const mapStateToProps = state => {
    const {token} = state.user;
    // Todo: check if token expired
    const isAuthenticated = token && token.access_token;
    return {isAuthenticated}
};

export default connect(mapStateToProps)(PrivateRoute);
