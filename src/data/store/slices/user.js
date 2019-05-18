import {createSlice} from 'redux-starter-kit'

// Reducers
const login = (state) => {
    state.isAuthenticated = true;
};

const logout = (state) => {
    state.isAuthenticated = false;
};

// Slice
export const user = createSlice({
    slice: 'user',
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        login,
        logout
    }
});
