import React from "react";
import "./App.css";
import Home from"./Home";
import Form from "./Form";
import Login from "./Login";
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'


class App extends React.Component {
  // state = {
  //   fields: {}
  // };

  // onChange = updatedValue => {
  //   this.setState({
  //     fields: {
  //       ...this.state.fields,
  //       ...updatedValue
  //     }
  //   });
  // };

  render() {
    return (
      <div className="App">
      <Router>
       <Route exact path='/register' component={Form} />
        <Route path='/login' component={Login} /> 
        {/* <Route path='/' component={Home} />  */}
        <Link to='/login'>Login </Link>
        <Link to='/register'>Register</Link>
       </Router>
   
        {/* <Form onChange={fields => this.onChange(fields)} />
       
        <Login/> 
        <Home/> */}
         
      </div>
    );
  }
}

export default App;
