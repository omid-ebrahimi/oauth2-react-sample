import {connect} from 'react-redux';
import Header from './component';
import {user} from "../../../data/store/slices";

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(user.actions.logout())
    }
};

export default connect(null, mapDispatchToProps)(Header);
