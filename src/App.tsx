import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './styles/index.scss'
import langs from './cache/langs';

const App = () => {
    const [lang, setLang] = useState(langs.defaultLang)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home lang={lang} setLang={setLang} />}></Route>

                <Route path="*" element={<Home lang={lang} setLang={setLang} />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;