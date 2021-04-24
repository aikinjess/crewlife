import React, { useState, useEffect, useRef } from 'react'
import './AddTVShow.css'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import * as passengerAPI from '../../services/passengers-api'

function AddPassenger (props){

	// allows access to history for programmatic routing
	const history = useHistory();
	// initializing the form as invalid
	const [invalidForm, setValidForm] = useState(true);
	// initializes an object to be used for form validation
	const formRef = useRef();
	// use the custom hook to initialize state
  const [state, handleChange] = useForm({
  name: '',
food: '',
  drink: '',
  snack: '',
  seatNo: '',
  })


  // function to handle adding a show via API call
  async function handleAddPassenger(newPassengerData){
    await passengerAPI.create(newPassengerData)
    history.push('/passengers')
  }

  // hook responsible for checking form validity on state change
  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [state]);

  // submitting the form passes state data to the function above 
  async function handleSubmit(e) {
    e.preventDefault()
    handleAddPassenger(state)
  }

  return (
    <div className="AddPassenger">
      <form className="col s12" ref={formRef} onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input 
							name="name"
							id="name"
							type="text"
							className="active"
							value={state.name}
							onChange={handleChange}
							required
						/>
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input 
							name="food"
							id="food"
							type="text"
							className="active"
							value={state.food}
							onChange={handleChange}
							required
						/>
            <label htmlFor="food">Food</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input 
							name="drink"
							id="drink"
							type="text"
							className="active"
							value={state.drink}
							onChange={handleChange}
						/>
            <label htmlFor="drink">Drink</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input 
							name="snack"
							id="snack"
							type="text"
							className="active"
							value={state.snack}
							onChange={handleChange}
						/>
            <label htmlFor="snack">Snack</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input 
							name="seatNo"
							id="seatNo"
							type="text"
							className="active"
							value={state.seatNo}
							onChange={handleChange}
						/>
            <label htmlFor="seatNo">SeatNo</label>
          </div>
        </div>
        <button
          type="submit"
          className="btn red"
          disabled={invalidForm}
        >
          <i className="material-icons left">add</i>
          Add Passenger
        </button>                           
      </form>
    </div>
  )
}
 
export default AddPassenger;