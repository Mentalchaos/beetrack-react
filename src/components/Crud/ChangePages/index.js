import React from 'react';
import { textDictionary } from '../../../constants/text-dictionary';
import './index.css';

const ChangePages = ({ previousPage, nextPage, currentPage }) => {
    return (
        <div className="changePagesContainer">
            { currentPage !== 1 && <button className="buttonChangePages" onClick={ () => previousPage()}>{ textDictionary.previousPage }</button>}
            <button className="buttonChangePages" onClick={ () => nextPage()}>{ textDictionary.nextPage }</button>
        </div>
    )
}

ChangePages.displayName = 'ChangePages';

export default ChangePages;