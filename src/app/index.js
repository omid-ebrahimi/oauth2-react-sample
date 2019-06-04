import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Provider from './data/store/provider'
import Header from './components/Header/container';
import Main from "./components/Main";

function App() {
    return (
        <Provider>
            <BrowserRouter>
                <Header/>
                <Main/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
