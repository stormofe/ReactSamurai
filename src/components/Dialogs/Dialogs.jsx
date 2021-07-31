import React from 'react';
import n from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field placeholder={"Enter new message"} name={"newMessage"} component={"textarea"} />
			<div>
				<button>Add mess</button>
			</div>
		</form>
	)
}

const AddMessageReduxForm = reduxForm({ form: "gialogAddMessageForm" })(AddMessageForm)

const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.dialogs
		.map(d => <DialogItem name={d.name} id={d.id} />);

	let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);


	let addNewMessage = (values) => {
		props.sendMessage(values.newMessage)
	}

	return (
		<div className={n.dialogs}>
			<div className={n.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={n.dialogsMessages}>
				{messagesElements}
				<AddMessageReduxForm onSubmit={addNewMessage} />
			</div>
		</div>
	)
}



export default Dialogs;