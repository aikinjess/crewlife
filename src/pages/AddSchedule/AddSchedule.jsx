import React, {Component} from 'react'
import ScheduleList from "../../components/ScheduleList/ScheduleList";
import "./AddSchedule.css";

let blankFormData = {
    title: "",
    description: "",
    url: "",
    tag: "",
};

class AddSchedule extends Component {
  state = {
    invalidForm: true,
    formData: {
      title: "",
      description: "",
      url: "",
      tag: "",
    }
  };

  formRef = React.createRef();


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddSchedule(this.state.formData);
    this.setState((state) => ({
      formData: blankFormData
    }))
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
        <div id="addSchedule" className="row">
          <h3>Submit Schedule</h3>
          <form
            className="col s12"
            ref={this.formRef}
            onSubmit={this.handleSubmit}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="title"
                  id="resource_title"
                  type="text"
                  className="active"
                  value={this.state.formData.title}
                  onChange={this.handleChange}
                  required
                />
                <label className="card-text" htmlFor="resource_title">
                  Title:
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="description"
                  id="description"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.description}
                  onChange={this.handleChange}
                  required
                />
                <label className="card-text" htmlFor="description">
                  Description:
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="url"
                  id="resource_url"
                  type="text"
                  autoComplete="off"
                  className="active"
                  value={this.state.formData.url}
                  onChange={this.handleChange}
                />
                <label className="card-text" htmlFor="rescource_url">
                  Link
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
            >
              Submit Schedule
            </button>
          </form>
        </div>
		<ScheduleList 
			savedItems={this.props.savedItems}
			handleDeleteSchedule= {this.props.handleDeleteSchedule}
			user= {this.props.user} />
      </>
    );
  }
}

export default AddSchedule;