import React from 'react';
import {BrowserRouter} from "react-router-dom";
import MainRouter from "../routes/MainRouter";
import Provider from '../data/store/provider'
import Header from './components/Header/container';

function App() {
    return (
        <Provider>
            <BrowserRouter>
                <Header/>
                <main>
                    <MainRouter/>
                </main>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
