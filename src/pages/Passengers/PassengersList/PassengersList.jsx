import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../components/UserContext";
import * as passengerAPI from "../../../services/passengerService";
import PassengerCard from '../../../components/PassengerCard/PassengerCard'
import CreatePassenger from '../CreatePassenger/CreatePassenger'
import styles from './PassengerList.module.css'

export default function PassengerList (props) {
  const [passengerList, setPassengerList] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      const passengerList = await passengerAPI.getAll(user._id);
      setPassengerList(passengerList);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.cardContainer}>
      {passengerList.length > 0
        ? passengerList.map((passenger, idx) => (
          <Link to={"/passenger/" + passenger._id} key={idx}>
            <PassengerCard passengerData={passenger} />
          </Link>
          ))
        : <CreatePassenger />}
    </div>
  );
};