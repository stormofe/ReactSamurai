import React from 'react';
import n from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
	state = {
		editMode: false
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
	}
	handleFocus = (event) => {
		event.target.select();
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input onFocus={this.handleFocus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
					</div>
				}
			</div>
		)
	}

}

export default ProfileStatus;