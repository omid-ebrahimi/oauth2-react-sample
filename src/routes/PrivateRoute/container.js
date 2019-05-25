import {connect} from 'react-redux';
import PrivateRoute from './component';

const mapStateToProps = state => {
    const {token} = state;
    const isAuthenticated = token && token.data.access_token;
    const expired = isAuthenticated && token.expiryDate.getSeconds() <= new Date().getSeconds();
    return {isAuthenticated, expired}
};

export default connect(mapStateToProps)(PrivateRoute);
