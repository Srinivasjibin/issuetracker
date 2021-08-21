import { Component } from 'react'
import { Container } from 'react-bootstrap';
import axios from 'axios'
import AdminNavbar from './AdminNavbar';
class AdminAddCat extends Component {
    constructor(props) {
        super(props)
        if (!sessionStorage.getItem("adminLogged"))
            this.props.history.push("/")
        this.state = {
            "categoryType": '',
            "categoryDescription": ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { categoryType, categoryDescription } = this.state;
        console.log("Current state", this.state)

        axios.post('http://localhost:8080/api/admin/addCategory', {
            "categoryType": categoryType,
            "categoryDescription": categoryDescription
        })
            .then(function (response) {
                console.log("@success", response);
                alert(response.data)
                if (response.data != "category already present")
                window.location.href = ("/admin/addCategory")
            })
            .catch(function (error) {
                console.log("@fail", error);
            });
    };
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div style={{backgroundImage:'url("https://cutewallpaper.org/21/solid-grey-wallpaper/light-grey-wallpapers-clicolombia.co.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
                <AdminNavbar/>

               
                   <div align="center" className="row">
                       <div className="col-sm-12">
                    <form className="text-dark mt-5 col-7 bg-light" style={{border:'2px solid black',"padding":3,"width":500,"padding":30,fontFamily:'sans-serif',color:'black'}}onSubmit={this.handleSubmit}>
                        <label>Category type &nbsp;
                            <i class="zmdi zmdi-edit"></i></label>
                        <input type="text" placeholder="Enter Category type" className="form-control " required name='categoryType' value={this.state.categoryType} onChange={this.handleChange} /><br />
                        <label>Category Description&nbsp;
                            <i class="zmdi zmdi-edit"></i></label>
                        <textarea type="textarea" rows={3} className="form-control" required placeholder="Enter Category Description" name='categoryDescription' value={this.state.categoryDescription} onChange={this.handleChange} /><br />
                        <input className="bg-success" type="submit" value="submit" />
                    </form>
                    </div>
                    </div>
               
            </div>
        )
    }
}
export default AdminAddCat;