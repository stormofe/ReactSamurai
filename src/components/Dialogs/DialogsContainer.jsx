import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {
	//debugger



	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();
					let addMessage = () => {
						store.dispatch(addMessageActionCreator());
					}
					let onChangeMessage = (text) => {
						store.dispatch(updateNewMessageActionCreator(text));
					}
					return <Dialogs updateNewMessage={onChangeMessage}
						addMessage={addMessage}
						dialogsPage={state.dialogsPage} />
				}
			}

		</StoreContext.Consumer>

	)
}

export default DialogsContainer;