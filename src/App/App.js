import React from 'react';
import {BrowserRouter} from "react-router-dom";
import MainRouter from "../routes/MainRouter";
import Provider from '../data/store/provider'

function App() {
    return (
        <Provider>
            <BrowserRouter>
                <main>
                    <MainRouter/>
                </main>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
