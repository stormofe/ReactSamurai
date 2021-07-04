import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {
	//debugger
	let state = props.store.getState();
	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}
	let onChangeMessage = (text) => {
		props.store.dispatch(updateNewMessageActionCreator(text));
	}
	return <Dialogs updateNewMessage={onChangeMessage} addMessage={addMessage} dialogsPage={state.dialogsPage} />
}

export default DialogsContainer;