import React, { useState } from 'react';

const InputForm = ({getInputFormData}) => {

	const [isFormOpen, setIsFormOpen] = useState(false);
	const [id, setId] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		getInputFormData({id, firstName, lastName, email, phone})
	}

	return (
		<div>
			{
				!isFormOpen
				? <button 
					className="btn btn-outline-secondary mt-5 mb-5" 
					type="button"
					onClick={ () => {setIsFormOpen(true)} }>
						Add Contact
				</button>
			 	: <form className="needs-validation" noValidate onSubmit={submitHandler}>
					<div className="form-row">
						<div className="col-md-1 mb-3">
							<input 
								type="text" 
								className="form-control"
								placeholder="Id" 
								value={id}
								onChange={(event) => {setId(event.target.value)}} />
						</div>
						<div className="col-md-3 mb-3">
							<input 
							type="text" 
							className="form-control" 
							placeholder="First name"
							value={firstName}
							onChange={(event) => {setFirstName(event.target.value)}}  />
						</div>
						<div className="col-md-3 mb-3">
							<div className="input-group">
							<input 
								type="text" 
								className="form-control" 
								placeholder="Last name" 
								aria-describedby="validationTooltipUsernamePrepend"
								value={lastName}
								onChange={(event) => {setLastName(event.target.value)}} />
							</div>
						</div>
						<div className="col-md-2 mb-3">
							<input 
								type="email" 
								className="form-control" 
								placeholder="Email"
								value={email}
								onChange={(event) => {setEmail(event.target.value)}} />
						</div>
						<div className="col-md-3 mb-3">
							<input 
								type="text" 
								className="form-control" 
								placeholder="Phone"
								value={phone}
								onChange={(event) => {setPhone(event.target.value)}} />
						</div>
					</div>
				<button className="btn btn-primary" type="submit">Submit form</button>
			</form>
			}
		</div>
	)
}

export default InputForm;