import React, { Component } from "react";
import { Container } from 'react-bootstrap';

import axios from 'axios';
import AdminNavbar from "./AdminNavbar";

export default class AdminCatagoryUpdate extends Component {
    constructor(props) {
        super(props);
        if (!sessionStorage.getItem("adminLogged"))
            props.history.push("/")
        this.state = {
            "categoryId": sessionStorage.getItem("selectedId"),
            "categoryType": '',
            "categoryDescription": ''
        }
    }
    componentWillMount() {
        console.log(this.state.categoryId)
        axios.get("http://localhost:8080/api/admin/getCategoryById/" + this.state.categoryId
        ).then(response =>
            this.setState({
                categoryType: response.data.categoryType,
                categoryDescription: response.data.categoryDescription
            })
        ).catch(err => console.log(err))
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    updateHandler = (event) => {
        axios.put("http://localhost:8080/api/admin/updateCategory", {
            "categoryId":this.state.categoryId,
            "categoryType": this.state.categoryType,
            "categoryDescription": this.state.categoryDescription
        }).then(res=>{
            console.log("@rsponse ",res)
            window.alert("category is updated successfully")
            window.location.href=("viewCategory")
        })
        event.preventDefault();
    }
    deleteHandler = () => {
        axios.delete("http://localhost:8080/api/admin/deleteCategory/"+this.state.categoryId)
        .then(res=>{
            console.log("@rsponse ",res)
            window.alert("category is deleted successfully")
            window.location.href=("viewCategory")
        })
    }
    render() {
        console.log(this.state)
        return (
            <div style={{backgroundImage:'url("https://eton-solutions.com/wp-content/uploads/2019/11/ETON-home2-banner-1200x656.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
                <AdminNavbar />
                
             <br />
              <div align="center" className="row">
                  <div className="col-sm-12">
                    <form className="text-dark bg-light" style={{border:'1px solid white',"padding":3,"width":500,"padding":30,fontFamily:'sans-serif',color:'black'}} onSubmit={this.updateHandler}>
                        <div className="row">
                            <div className="col-sm-12">
                        <label>Catagory type</label>
                        <input type="text" placeholder="Enter Catagory type" className="form-control " required name='categoryType' value={this.state.categoryType} onChange={this.changeHandler} /><br />
                       </div></div>
                       <div className="row">
                            <div className="col-sm-12">
                        <label>Catagory Description</label>
                        <textarea type="textarea" rows="3" className="form-control" required placeholder="Enter Catagory Description" name='categoryDescription' value={this.state.categoryDescription} onChange={this.changeHandler} /><br />
                      </div></div>
                       <div className="row"><div className="col-6"> <input className="bg-success " type="submit" value="update"  /></div>
                       <div className="col-6">  <input className="bg-danger " type="button" value="delete " onClick={this.deleteHandler}/></div>
                       </div>
                    </form>
                    </div>

                    </div>
            </div>
        );
    }
}