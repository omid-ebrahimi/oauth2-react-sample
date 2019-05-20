import {connect} from 'react-redux';
import {user} from '../../data/store/slices';
import Login from './component';

const mapDispatchToProps = dispatch => {

    function login() {
        dispatch(user.actions.login());
    }

    return {
        login
    }
};

export default connect(null, mapDispatchToProps)(Login);