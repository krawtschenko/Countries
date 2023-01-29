import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Controls} from "./components/Controls";

function App() {
    return (
        <>
            <Header/>
            <Main>
                <Controls onSearch={() => alert('Hello')}/>
            </Main>
        </>
    );
}

export default App;
