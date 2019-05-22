import {connect} from 'react-redux';
import {token} from '../../data/store/slices';
import Login from './component';

const mapDispatchToProps = dispatch => {

    function setToken(data) {
        dispatch(token.actions.setToken(data));
    }

    return {
        setToken
    }
};

export default connect(null, mapDispatchToProps)(Login);
