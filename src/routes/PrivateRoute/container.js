import {connect} from 'react-redux';
import PrivateRoute from './component';

const mapStateToProps = state => {
    const {token} = state.user;
    return {isAuthenticated: token && token.access_token}
};

export default connect(mapStateToProps)(PrivateRoute);
