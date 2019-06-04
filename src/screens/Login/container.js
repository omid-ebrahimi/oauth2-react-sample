import {connect} from 'react-redux';
import {token} from '../../app/data/store/slices';
import Login from './component';

const mapDispatchToProps = dispatch => {

    function setToken(data, expiryDate) {
        dispatch(token.actions.setToken({data, expiryDate}));
    }

    return {
        setToken
    }
};

export default connect(null, mapDispatchToProps)(Login);
