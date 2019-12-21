import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Title = ({ companyName }) => <h2 className="beetrack-title">Test <strong className="strongClass">{companyName}</strong></h2>

Title.propTypes = {
    companyName: PropTypes.string.isRequired
}

Title.displayName = 'Title';

export default Title;