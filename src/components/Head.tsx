import { langOptions } from '../typings/core';
import langs from '../cache/langs';
import langSelector from './langSelector';

const Head = ({ lang, setLang }: langOptions) => {
    return (
        <header className="header">
            <img src="./greensky-pp.png" alt="Greenskypdp" className="header-picture clickable" />
            <div className="texts">
                <h2>Greensky-gs</h2>
                <p>{ langs.resolve(lang, 'home.quote') }</p>
            </div>
            {
                langSelector({ setLang, lang })
            }
        </header>
    );
};

export default Head;