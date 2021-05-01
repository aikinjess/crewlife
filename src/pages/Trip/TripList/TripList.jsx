import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../components/UserContext";
import * as tripAPI from "../../../services/tripService";
import TripCard from '../../../components/TripCard/TripCard'
import CreateTrip from '../CreateTrip/CreateTrip'
import styles from './TripList.css'

export default function TripList (props) {
  const [tripList, setTripList] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      const tripList = await tripAPI.getAll(user._id);
      setTripList(tripList);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.cardContainer}>
      {tripList.length > 0
        ? tripList.map((trip, idx) => (
          <Link to={"/trip/" + trip._id} key={idx}>
            <TripCard tripData={trip} />
          </Link>
          ))
        : <CreateTrip />}
    </div>
  );
};