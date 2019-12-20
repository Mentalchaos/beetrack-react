import React from 'react';
import './index.css';
import CreateNewUser from '../CreateNewUser';
import PropTypes from 'prop-types';

const Search = ({ filterData }) => {
    return (
        <div className="search-container"> 
            <span className="search-icon glyphicon glyphicon-search"></span>
            <input onKeyUp={(e) => filterData(e)} className="search-button search-input form-control mr-sm-2" type="search" placeholder="Buscar contacto..." />
            {/* @TODO, Move this createUser to another place */}
            <CreateNewUser />
        </div>
    )
}

Search.propTypes = {
    filterData: PropTypes.func.isRequired
}

Search.displayName = 'Search';

export default Search;