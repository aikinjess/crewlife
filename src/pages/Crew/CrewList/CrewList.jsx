import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../components/UserContext";
import * as crewAPI from "../../../services/crewService";
import CrewCard from '../../../components/CrewCard/CrewCard'
import CreateCrew from '../CreateCrew/CreateCrew'
import styles from './CrewList.module.css'

export default function CrewList (props) {
  const [crewList, setCrewList] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      const crewList = await crewAPI.getAll(user._id);
      setCrewList(crewList);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.cardContainer}>
      {crewList.length > 0
        ? crewList.map((crew, idx) => (
          <Link to={"/crew/" + crew._id} key={idx}>
            <CrewCard crewData={crew} />
          </Link>
          ))
        : <CreateCrew />}
    </div>
  );
};