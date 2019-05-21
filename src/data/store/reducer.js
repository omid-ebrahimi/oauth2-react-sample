import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'localforage';
import {user} from './slices';

const rootReducer = combineReducers({
    user: user.reducer
});

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
