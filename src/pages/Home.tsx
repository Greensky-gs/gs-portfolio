import React from 'react';
import Head from '../components/Head';
import { langOptions } from '../typings/core';
import langs from '../cache/langs';

const Home = ({ lang, setLang }: langOptions) => {
    return (
        <div>
            <Head lang={lang} setLang={setLang} />
            <div className="home-body">
                {
                    langs.resolve(lang, 'home.middle.intro')
                }
            </div>
        </div>
    );
};

export default Home;