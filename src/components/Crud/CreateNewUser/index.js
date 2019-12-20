import React from 'react';
import './index.css';
import { ModalManager } from 'react-dynamic-modal';
import MyModal from '../MyModal';

const openModal = () => {
    ModalManager.open(<MyModal />);
}

const CreateNewUser = () => {
    return (
        <div className="newUserContainer">
            <div onClick={ () => openModal()} className="btn btn-block btn-primary btn-warning">
                <span className="glyphicon glyphicon-plus-sign"/>
                Nuevo contacto
            </div>
        </div>
    )
}

CreateNewUser.displayName = 'CreateNewUser';

export default CreateNewUser;