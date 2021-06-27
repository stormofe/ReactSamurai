import React from 'react';
import n from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogs
		.map(d => <DialogItem name={d.name} id={d.id} />);

	let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);


	let newMessage = React.createRef();

	let addMessage = () => {
		props.addMessage();
	}
	let onChangeMessage = () => {
		let text = newMessage.current.value;
		props.updateNewMessage(text);
	}

	return (
		<div className={n.dialogs}>
			<div className={n.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={n.dialogsMessages}>
				{messagesElements}
				<div>
					<textarea onChange={onChangeMessage} ref={newMessage} value={props.dialogsPage.newMessageText} />
					<div>
						<button onClick={addMessage}>Add mess</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;