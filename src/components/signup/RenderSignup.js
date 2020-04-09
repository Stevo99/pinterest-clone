import React from 'react';

import FormGroup from '../form-group/FormGroup';
import Input from '../input/Input';
import Button from '../buttons/Button';

const RenderSignup = () => {
	return (
		<div className="signup">
			<FormGroup className="form-wrapper">
				<Input
					className="input__card"
					type="text"
					placeholder="Email"
					name="email"
				/>
				<Input
					type="password"
					placeholder="Password"
					className="input__card"
					name="password"
				/>
				<Input
					type="number"
					className="input__card"
					placeholder="Age"
					name="age"
				/>
				<div className="button-wrapper">
					<Button
						name="Continue"
						className="rounded-button continue-button red-button"
					/>
				</div>
			</FormGroup>
		</div>
	);
};

export default RenderSignup;
