import React, { useState, useEffect, useRef } from 'react';
import './EditPassenger.css';
import { useForm } from '../../hooks/useForm'
import { Link, useLocation, useHistory } from 'react-router-dom'
import * as passengerAPI from '../../services/passengers-api'

function EditPassenger(props) {

  const location = useLocation()
  const history = useHistory()
  const [invalidForm, setValidForm] = useState(false);
  const formRef = useRef();
  const [state, handleChange] = useForm(location.state.passenger)

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [state]);
 
  async function handleSubmit(e) {
    e.preventDefault()
    await passengerAPI.update(state)
    history.push('/passengers')
  }

  return (
    <div className="EditPassenger">
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
            <label className="active" htmlFor="name">
							Name
						</label>
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
            <label className="active" htmlFor="cast">
							Food
						</label>
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
            <label className="active" htmlFor="description">
							Drink
						</label>
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
            <label className="active" htmlFor="release">
							Snack
						</label>
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
            <label className="active" htmlFor="seasons">
							Seat #
						</label>
          </div>
        </div>
        <button
          type="submit"
          className="btn green"
          disabled={invalidForm}
        >
          <i className="material-icons left">add</i>
          Save Passenger
        </button>
        <Link                 
          className="btn red"
		      to='/passengers'
	      >
	        <i className="material-icons left">undo</i>
          Cancel
        </Link>  
      </form>
    </div>
  )
}


export default EditPassenger;