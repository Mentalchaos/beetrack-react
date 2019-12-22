import React from 'react';
import './index.css';
import { ModalManager } from 'react-dynamic-modal';
import MyModal from '../MyModal';
import { textDictionary } from '../../../constants/text-dictionary';

const openModal = () => {
    ModalManager.open( <div className="modalContainer"> <MyModal /></div>);
}

const CreateNewUser = () => {
    return (
        <div className="newUserContainer">
            <div onClick={ () => openModal()} className="addUserButton btn btn-block btn-primary btn-warning">
                <span className="icon-plus glyphicon glyphicon-plus-sign"/>
                <p className="newContactText">{ textDictionary.newContactText }</p>
            </div>
        </div>
    )
}

CreateNewUser.displayName = 'CreateNewUser';

export default CreateNewUser;