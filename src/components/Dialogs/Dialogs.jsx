import React from 'react';
import n from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs
		.map(d => <DialogItem name={d.name} id={d.id} />);

	let messagesElements = props.state.messages.map(m => <Message message={m.message} />);
	console.log(props);


	let newMessage = React.createRef();
	let addMessage = () => {
		let text = newMessage.current.value;
		alert(text);
	}

	return (
		<div className={n.dialogs}>
			<div className={n.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={n.dialogsMessages}>
				{messagesElements}
				<div>
					<textarea ref={newMessage}></textarea>
					<div>
						<button onClick={addMessage}>Add mess</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;