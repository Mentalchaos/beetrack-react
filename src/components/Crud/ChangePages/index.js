import React from 'react';
import { textDictionary } from '../../../constants/text-dictionary';

const ChangePages = ({previousPage, nextPage}) => {
    return (
        <div className="changePagesContainer">
            <button onClick={ () => previousPage()}>{ textDictionary.previousPage }</button>
            <button onClick={ () => nextPage()}>{ textDictionary.nextPage }</button>
        </div>
    )
}

ChangePages.displayName = 'ChangePages';

export default ChangePages;