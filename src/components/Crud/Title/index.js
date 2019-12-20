import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ companyName }) => <h3 className="beetrack-title">Test <strong>{companyName}</strong></h3>

Title.propTypes = {
    companyName: PropTypes.string.isRequired
}

Title.displayName = 'Title';

export default Title;