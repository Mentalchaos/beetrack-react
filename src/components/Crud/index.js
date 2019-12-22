import React from 'react';
import PropTypes from 'prop-types';

// Components
import Title from './Title';
import Users from './Users';
import Search from './Search';
import ChangePages from './ChangePages';

const Crud = ({ data, filterData, nextPage, previousPage, currentPage }) =>  {
    return (
        <div>
            <Title companyName="Beetrack" />
            <Search filterData={filterData} />
            <Users data={ data } />
            <ChangePages 
                nextPage={nextPage}
                previousPage={previousPage}
                currentPage={currentPage}
            />
        </div>
    )
}

Crud.propTypes = {
    data: PropTypes.array.isRequired,
    filterData: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired
};

Crud.displayName = 'Crud';

export default Crud;