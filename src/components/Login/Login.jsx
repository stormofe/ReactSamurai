import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import n from '../common/FormsControls/FormsControls.module.css';


const maxLength20 = maxLengthCreator(20);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLength20]} />
			</div>
			<div>
				<Field placeholder={"Password"} name={"password"} component={Input} type={"password"} validate={[required, maxLength20]} />
			</div>
			<div>
				<Field type={"Checkbox"} name={"rememberMe"} component={Input} /> Remember me
			</div>

			{captchaUrl && <img src={captchaUrl} />}
			{captchaUrl && <Field placeholder={"captcha"} name={"captcha"} component={Input} validate={[required]} />}


			{error && <div className={n.formSummaryError}>{error}</div>}
			<div>
				<button>Login</button>
			</div>

		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
	}
	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</div>
	)
}

const mapStateToProps = (state) => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);