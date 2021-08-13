import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import n from './ProfileInfo.module.css';
import s from '../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {

	return (
		<div>
			<form className={n.descr} onSubmit={handleSubmit}>

				<div><button >Save</button></div>

				{error && <div className={s.formSummaryError}>{error}</div>}

				<div>
					<b>Fullname</b>: <Field placeholder={"Fullname"} name={"fullName"} component={Input} />

				</div>
				<div>
					<b>About me</b>: <Field placeholder={"About me"} name={"aboutMe"} component={Textarea} />
				</div>
				<div>
					<b>My professional skills :</b><Field placeholder={"Skills"} name={"lookingForAJobDescription"} component={Textarea} />
				</div>


				<div>
					<b>Looking for a job :</b> <Field placeholder={"Yes"} name={"lookingForAJob"} component={Input} type={"Checkbox"} />
				</div>

				<div>
					<b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
						return <div key={key}>
							<b>{key}</b> <Field placeholder={key} name={"contacts." + key} component={Input} />
						</div>
					})}
				</div>


			</form>
		</div>


	)
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);


export default ProfileDataFormReduxForm;
