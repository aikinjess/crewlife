import React, { Component } from 'react';
import './AddFlightcrew.css';


class AddFlightcrew extends Component {
	state = {
		invalidForm: true,
		formData: {
			name: '',
			phoneNo: '',
			role: '',
		},
	};

	formRef = React.createRef();

	handleSubmit = e => {
		e.preventDefault();
		this.props.handleAddFlightcrew(this.state.formData);
		};

	handleChange = e => {
		const formData = {...this.state.formData, [e.target.name]: e.target.value};
		this.setState({
		formData,
		invalidForm: !this.formRef.current.checkValidity()
		});
	};


	render() {
		return (
			<div className="AddFlightcrew">
				<form 
					className="col s12" 
					ref={this.formRef} 
					onSubmit={this.handleSubmit}
				>
					<div className="row">
						<div className="input-field col s12">
							<input 
								name="name"
								id="crew_name"
								type="text"
								className="active"
								value={this.state.formData.name}
								onChange={this.handleChange}
								required
							/>
							<label htmlFor="crew_name">Name</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input 
								name="phoneNo"
								id="number"
								type="text"
								className="active"
								value={this.state.formData.phoneNo}
								onChange={this.handleChange}
								required
							/>
							<label htmlFor="cast">Phone Number</label>
						</div>
					</div>
					<div><label>Role</label>
						<p>
							<label>  
								<input 
									className="Role"
									name="role"
									value="Flight Attendant"
									onChange={this.handleChange}
									type="radio"
								/>
								<span>Flight Attendant</span>
							</label>
						</p>
						<p>
							<label>  
								<input 
									className="role"
									name="Role"
									value="Captain"
									onChange={this.handleChange}
									type="radio"
								/>
								<span>Captain</span>
							</label>
						</p>
						<p>
							<label>  
								<input
									className="role"
									name="Role"
									value="First Officer"
									onChange={this.handleChange}
									type="radio"
								/>
								<span>First Officer</span>
							</label>
						</p>
					</div>
					<button
							type="submit"
							className="btn red"
							disabled={this.state.invalidForm}
					>
						<i className="material-icons left">add</i>
						Add Crew
					</button>                           
				</form>
			</div>
		)
	}
}

export default AddFlightcrew;