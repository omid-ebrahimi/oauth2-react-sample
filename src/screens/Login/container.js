import {connect} from 'react-redux';
import {user} from '../../data/store/slices';
import Login from './component';

const mapDispatchToProps = dispatch => {

    function setToken(token) {
        dispatch(user.actions.setToken(token));
    }

    return {
        setToken
    }
};

export default connect(null, mapDispatchToProps)(Login);
