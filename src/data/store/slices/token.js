import {createSlice} from 'redux-starter-kit'

const initialState = {
    data: {
        access_token: null,
        refresh_token: null,
        token_type: null,
        expires_in: null,
        scope: null
    }
};

// Slice
export const token = createSlice({
    slice: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => action.payload,
        logout: () => initialState
    }
});
