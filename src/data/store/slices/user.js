import {createSlice} from 'redux-starter-kit'

const initialState = {
    token: {
        access_token: null,
        refresh_token: null,
        token_type: null,
        expires_in: null,
        scope: null
    }
};

// Slice
export const user = createSlice({
    slice: 'user',
    initialState,
    reducers: {
        setToken: (state, action) => ({...state, token: action.payload}),
        logout: () => initialState
    }
});
