import React from 'react';
import PropTypes from 'prop-types';
import { textDictionary } from '../../../../constants/text-dictionary';
import './index.css';

const removeUser = selectedUser => {
    const userEndpoint = "http://localhost:3001/api/users/";
    fetch(`${userEndpoint}${Number(selectedUser)}`, {
        method: 'DELETE'
    }).then(() => {
        window.location.reload();
    })
}

// If user provides and invalid image (404), replaces the user current image
const testUserImage = e => {
    e.target.onError = null;
    e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Anonymous.jpg/220px-Anonymous.jpg";
}

const UserDescription = ({ id, name, description, photo }) => {
    return (
        <tr>
            <td className="usernameContainer">
                <img onError={ e => testUserImage(e)} className="userPhoto" alt="username" src={ photo }></img>
                <span className="userName">{ name }</span>
                <button className="removeUserButton" id={ id } onClick={ e => removeUser(e.target.id)}>{ textDictionary.removeUser }</button>
            </td>
            <td className="userDescription">{ description }</td>
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