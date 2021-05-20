import React, { Component } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import {Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { reset } from "../redux/actions/useraction";
import Loader from "./loader";
import Navbar from './Navbar'
class Reset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",error:""
    };
  }
  handlesubmit = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  if (this.state.email.trim===""){
  this.setState({error:"Please enter email"})
  this.setState({email:""})
  return
  }
  else if (!this.state.email.match(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/)){
    this.setState({error:"Please enter valid email"})
    this.setState({email:""})
    return
    }
 
 this.props.reset(this.state.email)
  this.setState({email:""})
  
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount(){
    document.body.style.backgroundColor="#171941"
        }
  render() {
    const { auth,user:{reset_loader} } = this.props;
    
    if (auth.uid) return <Redirect to="/admin"></Redirect>;
    return (
        <>
        <Navbar></Navbar>


      
      <MDBContainer >
       
            <MDBCard className="mx-auto my-2" style={{ minWidth: 250,maxWidth:600}}>
              <MDBCardBody className="mx-4">
                <form
                  className="needs-validation"
                  onSubmit={this.handlesubmit}
                  noValidate
                >
                  <p className="h3 text-center mb-4">Reset password</p>
                  <div className="grey-text">
                    <MDBInput
                      style={{ marginTop: "2.5rem" }}
                      value={this.state.email}
                      name="email"
                      required
                      onChange={this.handleChange}
                      label="Email"
                      icon="envelope"
                      group
                      type="email"
                    >
                   {  <div className="invalid-feedback text-center ">
                       {this.state.error}
                      </div>}
                    </MDBInput>
                    
                  </div>
                  <div className="text-center mx-auto pt-3 mb-3">
                    <MDBBtn
                      type="submit"
                      style={{ borderRadius: "50px",minWidth:'fit-content', fontSize: "16px" }}
                      gradient="blue"
                      rounded
                      className="btn-block w-50 z-depth-1a d-flex align-items-center justify-content-center"
                      disabled={reset_loader}
                    >
                      Submit
                      {reset_loader && (
                        <Loader/>
                      )}
                    </MDBBtn>
                  </div>
                
                </form>{" "}
              </MDBCardBody>
              
            </MDBCard>
     
      </MDBContainer></>
    );
  }
}
Reset.propTypes = {
  reset: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapstatetoprops = (state) => ({
  user: state.user,
  auth: state.firebase.auth,
});
export default connect(mapstatetoprops, {reset} )(Reset);

