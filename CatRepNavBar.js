import react, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
export default class CatRepNavBar extends Component {
    constructor(props) {
        super(props)
    
      }
      logOut = () => {
        sessionStorage.removeItem("categoryRepLogged");
        sessionStorage.removeItem("category");
        window.alert("logged out successfully! ")
        window.location.href = ("/")
      }
  render() {
    return (
      <div className="row" >
        <div className="col-sm-12">
       <ul className="navbar bg-dark" style={{"height":50}}>
         <li className="nav-item">
           <Link className="nav-link text-light" to="/categoryHome"><i class="zmdi zmdi-home"></i>&nbsp;Home</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link text-light" to="ViewIssues"><i class="zmdi zmdi-dropbox"></i>&nbsp;New/Active Issues</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link text-light" to="/CatRepIssueHistory"><i class="zmdi zmdi-inbox"></i>&nbsp;Issue History</Link>
         </li>     
         <li className="nav-item " >
           <Link className="nav-link text-light"  onClick={this.logOut}><i class="zmdi zmdi-power"></i>&nbsp;Log Out</Link>
         </li>
         </ul></div>
    
     </div>
     
    )
  }
}