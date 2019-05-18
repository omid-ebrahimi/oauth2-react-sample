import {connect} from 'react-redux';
import PrivateRoute from './component';

const mapStateToProps = state => {
    const {isAuthenticated} = state.user;
    return {isAuthenticated}
};

export default connect(mapStateToProps)(PrivateRoute);
