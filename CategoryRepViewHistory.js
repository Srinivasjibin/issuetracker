import react, { Component } from 'react'
import { Button, Container, Row, Col, Table, Alert, Accordion, Card } from 'react-bootstrap'
import axios from 'axios'
import CatRepNavBar from './CatRepNavBar';


export default class CategoryRepViewHistory extends Component {
    constructor(props) {
        super(props);
        if (!sessionStorage.getItem("categoryRepLogged"))
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
            this.props.history.push(`/CategoryIssueUpdate/${id}`);
        }
       
        render() {
           
            return (
                <div className="row" style={{backgroundImage:'url("https://swall.teahub.io/photos/small/250-2508110_how-do-i-organize-my-demand-portfolio-management.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
                <div className="col-sm-12">
                    <CatRepNavBar />
                    <Container className="text-light">   
                        <table  className="table">
                        {this.state.data.filter(data => (data.issueCategory == sessionStorage.category)).map((issue,idx) => {
                            return <div>                            
                                <Accordion  >                                 
                                <div>  
                                          <tr>
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
                                            <td>   {issue.issueStatus=="active"||issue.issueStatus=="new"||issue.issueStatus=="map"||issue.issueStatus=="reopened" ?  
                                             <span className="text-right offset-5">
                                                    <Button className="ml-5 text-white btn-success" onClick={()=>this.editIssue(issue.id)}>Resolve</Button>
                                                </span>:''}
                                                </td>
                                             </tr>}</tbody>
                                            </div>
                                        </Accordion.Collapse>         
                                </Accordion>
                             
                            </div>
                        })}
                           </table>
                    </Container>
                    </div>
                </ div >
            )
        }
    }

    