import React from "react";

export default class Form extends React.Component {

  state = {
    
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };



  render() {
    return (
      <form className="form-inputs">
        
        <input className="input-area"
          name="username"
          placeholder="Username"
          value={this.state.username}
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
        <button className="submit-btn" onClick={e => this.onSubmit(e)}>Login</button>
      </form>
    );
    }}


    
    
    

