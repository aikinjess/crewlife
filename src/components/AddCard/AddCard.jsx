import React, { Component } from "react";
import './AddCard.css'

class AddCard extends Component {
  state = {
    invalidForm: true,
    formData: {
      frontSide: "",
      backSide: "",
      tag: [],
    },
    user: this.props.user,
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddCard(this.state.formData);
    this.setState({formData: {frontSide: "",
    backSide: "",
    tag: []}})
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <>
        <div id="AddCard" className="row">
        <h3>Add Crew</h3>
          <form
            className="col s12"
            ref={this.formRef}
            onSubmit={this.handleSubmit}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="frontSide"
                  id="flashCard-front"
                  type="text"
                  className="active"
                  value={this.state.formData.frontSide}
                  onChange={this.handleChange}
                  required
                />
                <label className="card-text" htmlFor="flashCard-front">Name:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="backSide"
                  id="flashCard-back"
                  type="text"
                  className="active"
                  value={this.state.formData.backSide}
                  onChange={this.handleChange}
                  required
                />
                <label className="card-text" htmlFor="flashCard-back">Answer:</label>
              </div>
            </div>
            <div className="tags">
              <label className="card-text">Role:</label>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="Flight Attendant"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">Flight Attendant</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="Captain"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">Captain</span>
                </label>
              </p>
              <p className="tag-selections">
                <label>
                  <input
                    className="with-gap"
                    name="tag"
                    value="First Officer"
                    onChange={this.handleChange}
                    type="checkbox"
                  />
                  <span className="card-text">First Officer</span>
                </label>
              </p>
            </div>
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
            >
              <i className="material-icons left"></i>
              Add Crew
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AddCard;