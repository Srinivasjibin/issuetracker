import react, { Component } from 'react'
import { Button, Container, Form, Row, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
export default class UserNavbar extends Component {
  constructor(props) {
    super(props)
  }
  log_off = () => {
    sessionStorage.removeItem("userLogged");
    sessionStorage.removeItem("userId");
    window.alert("logged off")
    window.location.href = ("/")
  }
  render() {

    return (
<div className="row">
  <div className="col-sm-12">
    
      <ul className="navbar bg-dark" style={{"height":50}}>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/userHome"><i class="zmdi zmdi-home"></i>&nbsp;Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/userHelp"><i class="zmdi zmdi-help"></i>&nbsp;Help</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/userIssue"><i class="zmdi zmdi-dropbox"></i>&nbsp;Raise Issue</Link>
      </li>   
      <li className="nav-item">
        <Link className="nav-link text-light" to="userHistory"><i class="zmdi zmdi-inbox"></i>&nbsp;Issue History</Link>
      </li>  
      <li className="nav-item " >
        <Link className="nav-link text-light"  onClick={this.log_off}><i class="zmdi zmdi-power"></i>&nbsp;Log Out</Link>
      </li>
      </ul>
      
      </div>
     
      </div>
      
      
    )
  }

}
