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

function setToken(state, action) {
    const token = action.payload;
    token.data.expires_in = token.expires;
    return token;
}

// Slice
export const token = createSlice({
    slice: 'token',
    initialState,
    reducers: {
        setToken,
        logout: () => initialState
    }
});
