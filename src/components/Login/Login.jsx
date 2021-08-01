import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"Login"} name={"login"} component={Input} validate={[required, maxLength20]} />
			</div>
			<div>
				<Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength20]} />
			</div>
			<div>
				<Field type={"Checkbox"} name={"rememberMe"} component={Input} validate={[required]} /> Remember me
			</div>
			<div>
				<button>Login</button>
			</div>

		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {

	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

export default Login;