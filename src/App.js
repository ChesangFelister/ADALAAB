import React from "react";
import "./App.css";

import Form from "./Form";
import Login from "./Login";
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'


class App extends React.Component {
 
  render() {
    return (
      <div className="App">
      <Router>
       <Route exact path='/register' component={Form} />
        <Route path='/login' component={Login} />
        <Link to='/login' style={{textDecoration:'none',marginRight:20,marginTop:'4rem'}}>Login </Link>
        <Link to='/register' style={{textDecoration:'none',marginTop:'4rem'}}>Register</Link> 
       
       </Router>
   
        
        
      </div>
    );
  }
}

export default App;
