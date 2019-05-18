import {combineReducers} from 'redux'
import {user} from './slices'

export const reducer = combineReducers({
    user: user.reducer
});
