import {createSlice} from 'redux-starter-kit'

const initialState = {
    data: {
        access_token: null,
        refresh_token: null,
        token_type: null,
        expires_in: null,
        scope: null
    },
    expiryDate: null
};

function setToken(state, action) {
    const {data, expiryDate} = action.payload;
    return {data, expiryDate};
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
