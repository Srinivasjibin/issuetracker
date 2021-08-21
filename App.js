import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./project/Home";
import LoginForm from "./project/LoginForm";  
import AdminHome from "./project/AdminHome";
import AdminLogin from "./project/AdminLogin";
import UserLogin from "./project/UserLogin";
import UserHome from "./project/UserHome";
import UserIssue from "./project/UserIssue";
import AdminAddCat from "./project/AdminAddCatagory";
import AdminViewCatagory from "./project/AdminViewCatagory";
import AdminViewHistory from "./project/AdminViewHistory";
import AdminCatagoryUpdate from "./project/AdminCatagoryUpdate";
import UserHelp from "./project/UserHelp";
import UserHistory from "./project/UserHistory";
import Registration from "./project/Registration";
//import Userreg from "./project/Userreg";
import Userreg from "./project/Userreg";
import ResetUserId from "./project/ResetUserId";
import ResetUserPassword from "./project/ResetUserPassword";
import CategoryLogin from "./project/CategoryLogin";
import CategoryHome from "./project/CategoryHome";
import CategoryViewIssues from "./project/CategoryViewIssues";
import Mapping from "./project/Mapping";
import IssueUpdate from "./project/CategoryIssueUpdate";
import CategoryRepViewHistory from "./project/CategoryRepViewHistory";
import AdminIssueUpdate from "./project/AdminIssueUpdate";
import CategoryIssueUpdate from "./project/CategoryIssueUpdate";
import ReopenIssue from "./project/ReopenIssue";
import CloseIssue from "./project/CloseIssue";
import Feedback from "./project/Feedback";




export default function App() {
  return (    <div className="row">
  <div className="col-sm-12">
    <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Register" component={Registration} />
          <Route path="/Userreg" component={Userreg} />
          <Route path="/login" exact={true} component={LoginForm} />
          <Route path="/adminLogin" exact={true} component={AdminLogin} />
          <Route path="/adminHome" exact={true} component={AdminHome} />
          <Route path="/admin/addCategory" exact={true} component={AdminAddCat} />
          <Route path="/admin/viewCategory" exact={true} component={AdminViewCatagory} />
          <Route path="/admin/viewHistory" exact={true} component={AdminViewHistory} />
          <Route path="/admin/categoryUpdate/" exact={true} component={AdminCatagoryUpdate} />
          <Route path='/AdminIssueUpdate/:id' exact={true} component={AdminIssueUpdate}/> 
          <Route path="/userLogin" exact={true} component={UserLogin} />
          <Route path="/userHome" exact={true} component={UserHome} /> 
          <Route path='/UserIssue' exact={true} component={UserIssue}/> 
          <Route path='/mapping/:id' exact={true} component={Mapping}/> 
          <Route path='/UserHelp' exact={true} component={UserHelp}/> 
          <Route path='/userHistory' exact={true} component={UserHistory}/> 
          <Route path='/ResetUserID' exact={true} component={ResetUserId}/> 
          <Route path='/ResetUserPassword' exact={true} component={ResetUserPassword}/> 
          <Route path='/reopenIssue/:id' exact={true} component={ReopenIssue}/> 
          <Route path='/closeIssue/:id' exact={true} component={CloseIssue}/>
          <Route path='/catagoryLogin' exact={true} component={CategoryLogin}/> 
          <Route path='/categoryHome' exact={true} component={CategoryHome}/> 
          <Route path='/ViewIssues' exact={true} component={CategoryViewIssues}/> 
          <Route path='/CategoryIssueUpdate/:id' exact={true} component={CategoryIssueUpdate}/> 
          <Route path='/CatRepIssueHistory' exact={true} component={CategoryRepViewHistory}/> 
          <Route path='/feedback/:id' exact={true} component={Feedback}/> 
        </Switch>
    </Router>
    </div></div>
  );
}
