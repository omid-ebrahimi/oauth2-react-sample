import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import MainRouter from "./MainRouter";

function App() {
    return (
        <BrowserRouter>
            <main>
                <MainRouter/>
            </main>
        </BrowserRouter>
    );
}

export default App;
