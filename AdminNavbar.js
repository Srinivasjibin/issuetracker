import react, { Component } from 'react'
import { Button, Container, Form, Row, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
export default class AdminNavbar extends Component {
  constructor(props) {
    super(props)

  }
  logOut = () => {
    sessionStorage.removeItem("adminLogged");
    window.alert("logged out successfully! ")
    window.location.href = ("/")
  }
  render() {

    return (
      
     <div className="row">
       <div className="col-sm-12">
       <ul className="navbar bg-dark " style={{"height":50}}>
         <li className="nav-item">
           <Link className="nav-link text-light" to="/adminHome"><i class="zmdi zmdi-home"></i>&nbsp;Home</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link text-light" to="/admin/addCategory"><i class="zmdi zmdi-plus"></i>&nbsp;Add Category</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link text-light" to="/admin/viewCategory"><i class="zmdi zmdi-eye"></i>&nbsp;View Category</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link text-light" to="/admin/viewHistory"><i class="zmdi zmdi-eye"></i>&nbsp;View History</Link>
         </li>
         <li className="nav-item " >
           <Link className="nav-link text-light"  onClick={this.logOut}><i class="zmdi zmdi-power"></i>&nbsp;Log Out</Link>
         </li>
         </ul>
         </div>
     </div>
  
    )
  }
}