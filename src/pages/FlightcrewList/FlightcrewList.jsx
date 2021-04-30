import React from 'react';
import FlightcrewCard from '../../components/FlightcrewCard/FlightcrewCard';
import './FlightcrewList.css';

function FlightcrewList(props) {
	return (
		<> 
			<div className='FlightcrewList-grid'>
				{props.flightcrews.map(flightcrew =>
					<FlightcrewCard 
						key={flightcrew._id}
						flightcrew={flightcrew}
						handleDeleteFlightcrew={props.handleDeleteFlightcrew}
						user={props.user}
					/>
				)}
			</div>	
		</>
	);
}

export default FlightcrewList;