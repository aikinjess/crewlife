import React, { Component } from 'react';
import './EditFlightcrew.css'
import { Link } from 'react-router-dom';

class EditFlightcrew extends Component {
	state = {
		invalidForm: false,
		formData: this.props.location.state.flightcrew,
		Name: "Edit Crew"
	};

	formRef = React.createRef();

	handleSubmit = e => {
		e.preventDefault();
		this.props.handleUpdateMovie(this.state.formData);
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
			<div className="EditFlightcrew">
				<form 
					className="col s12"
					ref={this.formRef}
					onSubmit={this.handleSubmit}
				>
					<div className="row">
						<div className="input-field col s12">
							<input 
								name="name"
								id="flightcrew_name"
								type="text"
								className="active"
								value={this.state.formData.name}
								onChange={this.handleChange}
								required
							/>
							<label className="active" htmlFor="flightcrew_name">
								Name
							</label>
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
							<label className="active" htmlFor="phoneNo">
								Phone Number
							</label>
						</div>
					</div>
						<div><label>Role</label>
							<p>
								<label>  
									<input 
										className="Role"
										name="role"
										value="Flight Attendant"
										checked={this.state.formData.role === "Flight Attendant" ? 
											true : 
											"" 
										} 
										onChange={this.handleChange} 
										type="radio"
									/>
									<span>Flight Attendant</span>
								</label>
							</p>
							<p>
								<label>  
									<input 
										className="Role"
										name="role"
										value="Captain"
										checked={this.state.formData.role === "Captain" ? 
											true : 
											"" 
										} 
										onChange={this.handleChange} 
										type="radio"
									/>
									<span>Captain</span>
								</label>
							</p>
							<p>
								<label>  
									<input 
										className="Role"
										name="role"
										value="First Officer"
										checked={this.state.formData.role === "First Officer" ? 
											true : 
											"" 
										} 
										onChange={this.handleChange} 
										type="radio"
									/>
									<span>First Officer</span>
								</label>
							</p>
						</div>
						<button
							type="submit"
							className="btn green"
							disabled={this.state.invalidForm}
						>
						<i className="material-icons left">edit</i>
							Update Crew
						</button>
						<Link 
							className="btn red"
							to={{
								pathname: '/flightcrews'
							}}
						>
							<i className="material-icons left">undo</i>
							Cancel
						</Link>                            
				</form>
			</div>
		)
	}
}

export default EditFlightcrew;
