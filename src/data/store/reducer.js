import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'localforage';
import {user} from './slices';

const rootReducer = combineReducers({
    user: user.reducer
});

const persistConfig = {
    key: 'root',
    storage
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
