import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'localforage';
import {token} from './slices';
import {tokenTransform} from './transforms/token'

const rootReducer = combineReducers({
    token: token.reducer
});

const persistConfig = {
    key: 'root',
    storage,
    transforms: [tokenTransform],
    stateReconciler: autoMergeLevel2
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
