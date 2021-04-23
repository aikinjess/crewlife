import React from 'react';
import { Link } from 'react-router-dom';

function FlightcrewCard({ user, flightcrew, handleDeleteFlightcrew}) {
	return(
		<>
			<div className="card">
				<div className="card-image waves-effect waves-block waves-light">
				</div>
				<div className="card-content">
					<span className="card-title activator grey-text text-darken-4">
						{flightcrew.name}<i className="material-icons right">more_vert</i>
					</span>
				</div>
				<div className="card-reveal">
					<span className="card-title grey-text text-darken-4">
						{flightcrew.name}<i className="material-icons right">close</i>
					</span>
					<h6>Name:  {flightcrew.name}</h6>
					<h6>Phone Number: {flightcrew.phoneNo}</h6>
					<div>Role:  {flightcrew.role}</div>
					{user && (user._id === flightcrew.addedBy._id) &&
						<>
							<button 
								type="submit"
								className="btn red"
								onClick={() => handleDeleteFlightcrew(flightcrew._id)}
							>
								<i className="material-icons left">delete</i>    
								Delete Crew
							</button>
							<Link 
								className="btn yellow black-text"
								to={{
									pathname: '/edit',
									state: {flightcrew}
								}}
							>
								<i className="material-icons left">build</i>
								Edit Crew
							</Link>
						</>
					}
				</div>
			</div>
		</>
	) 
}

export default FlightcrewCard;
