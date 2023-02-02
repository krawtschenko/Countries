import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Country, Details} from './pages/Details';
import {NotFound} from './pages/NotFound';
import {HomePage} from "./pages/HomePage";

function App() {
    const [countries, setCountries] = useState<Country[]>([]);

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<HomePage countries={countries} setCountries={setCountries}/>}/>
                    <Route path="/country/:name" element={<Details/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Main>
        </>
    );
}

export default App;