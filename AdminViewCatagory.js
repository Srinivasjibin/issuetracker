import React, { Component } from "react";
import { Button, Container, Form, Row,Nav, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import AdminNavbar from "./AdminNavbar";

class AdminViewCatagory extends Component {
    constructor(props) {
        super(props);
        if (!sessionStorage.getItem("adminLogged"))
            props.history.push("/")
        this.state = {
            categoryList : [] 
        };
    }
    componentDidMount() {
        axios.get("http://localhost:8080/api/admin/getCategory")
        .then(response => {
            this.setState({categoryList : response.data})
            console.log(response.data)
        })
        
    }
    editIssue(id){
        this.props.history.push("categoryUpdate");
        sessionStorage.setItem("selectedId",id);    
    }
    render(){
        return(
            
            <div className="row" style={{backgroundImage:'url("https://cutewallpaper.org/21/solid-grey-wallpaper/light-grey-wallpapers-clicolombia.co.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
                <div className="col-sm-12">
                <AdminNavbar />
                <div className={"bg-white text-dark"}>
        
                   
                        <table  className="table" variant='light'>
                            <thead>
                                <tr>
                                    <th>Catagory Id</th>
                                    <th>Catagory type </th>
                                    <th>Catagory Description</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.categoryList.map((catagory) => (
                                    <tr key = {catagory.categoryId}>
                                      <a style={{textDecorationLine:'underline',color:'red'}} onClick={ () => this.editIssue(catagory.categoryId)} > 
                                        <td>{catagory.categoryId}</td> </a> 
                                        <td>{catagory.categoryType}</td>
                                        <td>{catagory.categoryDescription}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    
                </div>
         
            </div></div>
        )}
}

export default AdminViewCatagory;