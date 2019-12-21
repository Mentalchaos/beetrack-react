import React from 'react';
import UserDescription from './UserDescription';
import PropTypes from 'prop-types';
import { textDictionary } from '../../../constants/text-dictionary';

const Users = ({ data }) => {
    return ( 
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>{ textDictionary.name }</th>
                        <th>{ textDictionary.description }</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map(data => {
                        const { description , name , photo, id } = data;
                        return (
                            <UserDescription
                                id={id}
                                name={name}
                                description={description}
                                photo={photo}
                                key={id}
                            />
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

Users.propTypes = {
    data: PropTypes.array.isRequired
}

Users.displayName = 'Users';

export default Users;