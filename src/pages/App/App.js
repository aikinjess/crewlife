import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import authService from '../../services/authService';
import Landing from '../Landing/Landing'
import AddFlightcrew from '../AddFlightcrew/AddFlightcrew';
import FlightcrewList from '../FlightcrewList/FlightcrewList'
import * as flightcrewAPI from '../../services/flightcrews-api'
import AddPassenger from '../AddPassenger/AddPassenger';
import PassengerList from '../PassengerList/PassengerList'
import EditPassenger from '../EditPassenger/EditPassenger'


class App extends Component {
  state = {
    flightcrews: [],
    user: authService.getUser()
  }

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  }
  
  handleUpdateFlightcrew = async updatedFlightcrewData => {
    const updatedFlightcrew = await flightcrewAPI.update(updatedFlightcrewData);
    const newFlightcrewsArray = this.state.flightcrews.map(f => 
      f._id === updatedFlightcrew._id ? updatedFlightcrew : f
    );
    this.setState(
      {flightcrews: newFlightcrewsArray},
      () => this.props.history.push('/flightcrews')
    );
  }

  handleAddFlightcrew = async newFlightcrewData => {
    const newFlightcrew = await flightcrewAPI.create(newFlightcrewData);
    this.setState(state => ({
      flightcrews: [...state.newFlightcrews, newFlightcrew]
    }), () => this.props.history.push('/flightcrews'));
  }
  handleDeleteFlightcrew = async id => {
    if(authService.getUser()){
      await flightcrewAPI.deleteOne(id);
      this.setState(state => ({
        flightcrews: state.flightcrews.filter(f => f._id !== id)
      }), () => this.props.history.push('/flightcrews'));
    } else {
      this.props.history.push('/login')
    }
  }

  async componentDidMount() {
    const flightcrews = await flightcrewAPI.getAll();
    this.setState({ flightcrews })
  }

  render() {
    return (
      <>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Route exact path='/' render={() =>
          <Landing />
        } />
        <Route exact path='/signup' render={({ history }) =>
          <Signup
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        } />
        <Route exact path='/login' render={({ history }) =>
          <Login
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        } />
        <Route exact path='/flightcrews/add' render={() =>
          authService.getUser() ?
            <AddFlightcrew
              handleAddFlightcrew={this.handleAddFlightcrew}
              user={this.state.user}
            />
            :
            <Redirect to='/login' />
        } />
        <Route exact path='/flightcrews' render={() =>
          <FlightcrewList
            flightcrews={this.state.flightcrews}
            user={this.state.user}
            handleDeleteFlightcrew={this.handleDeleteFlightcrew}
          />
        } />
        <Route exact path='/passengers/add' render={() => 
          authService.getUser() ?
          <AddPassenger
            user={this.state.user}
          />
          :
          <Redirect to='/login' />
        }/>
        <Route exact path='/passengers' render={() => 
          <PassengerList 
            user={this.state.user}
          />
        }/>
        <Route exact path='/editPassenger' render={() =>
          authService.getUser() ?
          <EditPassenger
            user={this.state.user}
          />
          :
          <Redirect to='/login' />
        }/>
      </>
    );
  }
}

export default App;