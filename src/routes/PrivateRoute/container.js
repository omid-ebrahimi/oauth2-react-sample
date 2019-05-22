import {connect} from 'react-redux';
import PrivateRoute from './component';

const mapStateToProps = state => {
    const {token} = state;
    // Todo: check if token expired
    const isAuthenticated = token && token.data.access_token;
    return {isAuthenticated}
};

export default connect(mapStateToProps)(PrivateRoute);
