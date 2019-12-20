import React from 'react';
import PropTypes from 'prop-types';
import { textDictionary } from '../../../../constants/text-dictionary';

const removeUser = selectedUser => {
    const userEndpoint = "http://localhost:3001/api/users/";
    fetch(`${userEndpoint}${Number(selectedUser)}`, {
        method: 'DELETE'
    }).then(() => {
        window.location.reload();
    })
}

const UserDescription = ({ id, name, description, photo }) => {
    return (
        <tr>
            <td className="username"> 
                <img alt="username" src={ photo }></img>
                <span>{ name }</span>
                <button id={ id } onClick={ e => removeUser(e.target.id)}>{ textDictionary.removeUser }</button>
            </td>
            <td>{ description }</td>
        </tr>
    )
}

UserDescription.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
}

UserDescription.displayName = 'UserDescription';

export default UserDescription;