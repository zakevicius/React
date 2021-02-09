import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer, Field, reduxForm } from 'redux-form';
import { Form, Button } from 'antd';
import { InputField, SelectField } from 'antd-redux-form';
import './App.css';

const rootReducer = combineReducers({
	form: formReducer
});

const store = createStore(rootReducer);

let Test = () => {
	const handleSubmit = (data) => {
		console.log(data);
	};

	const comp = ({ input, label, type, meta: { touched, error, warning } }) => (
		<div>
			<label>{label}</label>
			<div>
				<input {...input} placeholder={label} type={type} />
				{touched &&
					((error && <span>{error}</span>) ||
						(warning && <span>{warning}</span>))}
			</div>
		</div>
	);

	return (
		<form onSubmit={handleSubmit} validateMessage={{ required: 'yes' }}>
			<Field
				type="text"
				name="name"
				validate={validate}
				component={comp}
			></Field>
			{/* <select
				label="select"
				name="select"
				type="text"
				// on={select}
				validate={[select]}
			>
				<option value="1" name="one">
					One
				</option>
				<option value="2" name="two">
					two
				</option>
			</select> */}
		</form>
	);
};

const select = (data) => {
	console.log(data);
	return 'Error';
};

const validate = (data) => {
	console.log(data);
	const errors = data == '1' && 'errrrrrr';
	return errors;
};

const warn = (data) => {
	console.log(data);
	const warnings = {};

	warnings.name = 'Yes';

	return warnings;
};

Test = reduxForm({
	warn,
	validate,
	form: 'test'
})(Test);

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Test />
			</div>
		</Provider>
	);
}

export default App;
