 import React from "react";
// import {} from "react-router-dom"


export default class Form extends React.Component {

  state = {
    
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    return (
      <form autocomplete="off" className="form-inputs">
        <input className="input-area"
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
       
        />
        <br />
        <input className="input-area"
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
         
        />
        <br />
        <input className="input-area"
          name="username"
          placeholder="Username"
          value={this.state.username}
         
        />
        <br />
        <input className="input-area"
          name="email"
          placeholder="Email"
          value={this.state.email}
         
        />
        <br />
        <input className="input-area"
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          
        />
        <br />
        <button className="submit-btn" onClick={e => this.onSubmit(e)}>Register</button>
      
      </form>
    );
    }}
