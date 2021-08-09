import n from "./FormsControls.module.css"

const FormControl = ({input, meta: {touched, error}, children}) => {
	const hasError = touched && error;
	return (
		<div className={n.formControl + " " + (hasError ? n.error : '')}>
			{children}
			{hasError && <span>{error}</span>}
		</div>
	)
}


export const Textarea = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}