import react, { Component } from 'react'
import { Button, Container, Row, Col, Table, Alert, Accordion, Card } from 'react-bootstrap'
import axios from 'axios'
import AdminNavbar from './AdminNavbar';


export default class AdminViewHistory extends Component {
    constructor(props) {
        super(props);
        if (!sessionStorage.getItem("adminLogged"))
            this.props.history.push("/")
        this.state = {
            data: [],
            sortBy: "all"
        };

    }
    componentWillMount() {
        
        axios.get('http://localhost:8080/api/admin/getIssueHistory')
            .then(response => {
                this.setState({ data: response.data })
                console.log("@log get req Success", response)
            })
        axios.get("http://localhost:8080/api/admin/getCategoryList").then(list => {
            var select = document.getElementById("select");
            for (let type of list.data) {
                let newOp = document.createElement("option");
                newOp.value = type;
                newOp.innerHTML = type;
                select.options.add(newOp);
            }
        }).catch(error =>
            console.log(error)
        )
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        })

    }
    editIssue(id) {
        this.props.history.push(`/adminIssueUpdate/${id}`);
    }
    render() {
        let filterData = this.state.sortBy == "all" ?
            this.state.data
            :
            this.state.data.filter(data => data.issueCategory == this.state.sortBy);
        return (
            <div className="row" style={{backgroundImage:'url("https://eton-solutions.com/wp-content/uploads/2019/11/ETON-home2-banner-1200x656.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
                <div className="col-sm-12">
                <AdminNavbar />
                <Container className="text-dark">
          
                    <div className="ml-4 text-right">
                        <br />
                        <label style={{color:'white'}} >sort by :-</label>
                        <select id="select" name="sortBy" onChange={this.handleChange} >
                            <option>all</option>
                        </select>
                    </div>
                    <table  className="table">
                    {filterData.map((issue, idx) => {
                        return <div>
                             
                            <Accordion  >
                               
                            <div style={{color:'white'}}> 
                                   
                                      <tr style={{color:'white'}}>
                                      <td><Accordion.Toggle as={Button} variant="link" eventKey="0">
                                       <h5 style={{color:'white'}}>Issue :{issue.id}</h5>
                                   </Accordion.Toggle>
                                   </td></tr>
                                    
                                   </div>
                                    <Accordion.Collapse eventKey="0"  >
                                        <div style={{color:'white'}}>
                                        <thead>
                                       <tr>
                                           <th> name:</th>
                                       <th> Description </th>
                                       <th> Resolution </th>
                                       <th> Category</th>
                                       <th> Status</th>
                                       <th> Date</th>
                                       <th></th>
                                       </tr>
                                       </thead>
                                       <tbody>{
                                       <tr><td width="200">{issue.issueName}</td>
                                      <td width="200">{issue.issueDescription}</td>
                                       <td width="200">{issue.issueResolution}</td>
                                        <td width="100">{issue.issueCategory}</td>
                                       <td width="100">{issue.issueStatus}</td>
                                        <td width="100">{issue.issueDate}</td>
                                   
                                          <td>   {issue.issueStatus=="active"||issue.issueStatus=="new"||issue.issueStatus=="reopened"||issue.issueStatus=="map"||issue.issueStatus=="help" ?  
                                             <span className="text-right offset-5">
                                                    <Button className="ml-5 text-white btn-success" onClick={()=>this.editIssue(issue.id)}>resolve</Button>
                                                </span>:''}
                                                </td></tr>}</tbody>
                                        </div>
                                    </Accordion.Collapse>
                                   
                            </Accordion>
                         
                        </div>
                    })}
                       </table>
                </Container>
            </ div >
            </div>
        )
    }
}