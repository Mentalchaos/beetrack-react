import React, { Component } from 'react';
import { Modal, Effect } from 'react-dynamic-modal';
import { textDictionary } from '../../../constants/text-dictionary';
import './index.css';

class MyModal extends Component {
    handleSubmit(e) {
        // Obtain all elements from form and then pass them to another func
        const obtainData = document.querySelectorAll('.form-group > .form-control');
        const dataToSend = [];
        [...obtainData].map(data => dataToSend.push(data.value));
        return this.validateForm(dataToSend,e);
    }

    registerNewUser(data){
        const userEndpoint = 'http://localhost:3001/api/users/';
        const dataForBody = JSON.stringify(data);

        fetch(userEndpoint, {
            method: 'POST',
            body: dataForBody,
            headers : {
                'Content-Type': 'application/json'
            }
            }).then( res => res.json()
            .then( res => {
                console.log('res',res);
                window.location.reload();
            })
            .catch( err => console.log('Error', err))
        )
    }

    validateForm(userData, event){
        // @TODO, This could be better
        const data = {
            photo: userData[0],
            name: userData[1],
            description: userData[2]
        }
        let validateMessage = document.querySelector('.validateFields');

        const { photo , name, description } = data;

        // Watching if data is empty and then showing a message if necessary
        if(!photo.length || !name.length || !description.length){
            validateMessage.hidden = false;
            return event.preventDefault();
        } else {
            validateMessage.hidden = true
            return this.registerNewUser(data);
        }
    }

    // Validate that the user can only submit lowercase and uppercase letters
    validateName = event => { 
        event.value = event.value.replace(/[^a-zA-Z ]+/g, '');
    }

    render(){
       return (
          <Modal
             effect={Effect.FlipVertical3D} className="modalContainer">
                <form className="createUserForm">
                    <h1 className="modalTitle"><strong>{ textDictionary.addNewContact }</strong></h1>
                    <div className="form-group">
                        <label className="modalInputs">{ textDictionary.urlProfileImage }</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" />
                    </div>
                    <div className="form-group">
                        <label className="modalInputs">{ textDictionary.name }</label>
                        <input onChange={e => this.validateName(e.target)} type="text" className="form-control" isrequired="true" />
                    </div>
                    <div className="form-group">
                        <label className="modalInputs">{ textDictionary.description}</label>
                        <textarea className="form-control" aria-label="With textarea" />
                        <span className="validateFields" hidden>{ textDictionary.fillAllInputs }</span>
                    </div>
                    <div className="buttonContainer"><button onClick={e => this.handleSubmit(e)} type="submit" className="btn btn-warning saveButton">{ textDictionary.saveUser}</button></div>
                </form>
          </Modal>
       );
    }
}

MyModal.displayName = 'MyModal';

export default MyModal;