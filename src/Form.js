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



//   onSubmit = e => {
//     e.preventDefault();
// // this.props.onSubmit(this.state);
//     this.setState({
//       firstName: "",
//       lastName: "",
//       username: "",
//       email: "",
//       password: ""
//     });
//     this.props.onChange({
//       firstName: "",
//       lastName: "",
//       username: "",
//       email: "",
//       password: ""
//     });
//   };

  render() {
    return (
      <form className="form-inputs">
        <input className="input-area"
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input className="input-area"
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input className="input-area"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <br />
        <input className="input-area"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input className="input-area"
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <button className="submit-btn" onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
    }}
