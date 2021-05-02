import { Switch, Route, useHistory } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService"
import CreateTrip from "../Trip/CreateTrip/CreateTrip";
import TripList from '../Trip/TripList/TripList';
import TripView from '../Trip/TripView/TripView';
import CreateCrew from "../Crew/CreateCrew/CreateCrew";
import CrewList from '../Crew/CrewList/CrewList';
import CrewView from '../Crew/CrewView/CrewView';
import CreatePassenger from "../Passengers/CreatePassenger/CreatePassenger";
import PassengerList from '../Passengers/PassengersList/PassengersList';
import PassengerView from '../Passengers/PassengerView/PassengerView';
import { UserContext } from '../../components/UserContext'
import ProtectedRoute from '../../components/ProtectedRoute'



export default function App (props) {
  const [user, setUser] = useState(authService.getUser())
  const history = useHistory();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    history.push("/");
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  }


  return (
    <>
      <UserContext.Provider value={user}>
        <NavBar user={user} handleLogout={handleLogout} />
        <Switch>
          <Route exact path="/signup"
            render={() => (
              <Signup handleSignupOrLogin={handleSignupOrLogin} />
            )}
          />
          <Route exact path="/login"
            render={() => (
              <Login handleSignupOrLogin={handleSignupOrLogin} />
            )}
          />

          <ProtectedRoute path='/trip/new'>
            <CreateTrip />
          </ProtectedRoute>
          
          <ProtectedRoute path='/trip/:id'>
            <TripView />
          </ProtectedRoute>

          <ProtectedRoute path='/trip'>
            <TripList />
          </ProtectedRoute>

          <ProtectedRoute path='/crew/new'>
            <CreateCrew />
          </ProtectedRoute>
          
          <ProtectedRoute path='/crew/:id'>
            <CrewView />
          </ProtectedRoute>

          <ProtectedRoute path='/crew'>
            <CrewList />
          </ProtectedRoute>

          <ProtectedRoute path='/passenger/new'>
            <CreatePassenger />
          </ProtectedRoute>
          
          <ProtectedRoute path='/passenger/:id'>
            <PassengerView />
          </ProtectedRoute>

          <ProtectedRoute path='/passenger'>
            <PassengerList />
          </ProtectedRoute>
 
  
        </Switch>
      </UserContext.Provider>
    </>
  );
}