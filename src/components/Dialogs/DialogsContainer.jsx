import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessage: (text) => {
			dispatch(updateNewMessageActionCreator(text));
		},
		sendMessage: (newMessage) => {
			dispatch(addMessageActionCreator(newMessage));
		}
	}
}



export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,

)(Dialogs);