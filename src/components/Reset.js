import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBAlert,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBTypography,
} from "mdbreact";
import {Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { reset } from "../redux/actions/useraction";
class Reset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",loading:false,error:""
    };
  }
  handlesubmit = (event) => {
    event.preventDefault();
    this.setState({loading:true})
    event.target.className += " was-validated";
  if (this.state.email.trim===""){
  this.setState({error:"Please enter email"})
  this.setState({loading:false,email:""})
  }
  else if (!this.state.email.match(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/)){
    this.setState({error:"Please enter valid email"})
    this.setState({loading:false,email:""})
    }
  else{
  this.props.reset(this.state.email,this.props.history)
  this.setState({loading:false,error:"",email:""})
  }
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
    const { user:{link}, auth } = this.props;
    const smallStyle = { fontSize: "0.8rem" };
    if (auth.uid) return <Redirect to="/admin"></Redirect>;
    return (
        <>

       { link.open &&(
        <MDBContainer id="alert" style={{zIndex:21,position:'relative',width:'fit-content'}}>
        <MDBAlert color={link.color}   >
       <strong>{link.data}</strong>  
      </MDBAlert>
      </MDBContainer>)}
      <MDBContainer >
        <MDBRow>
          <MDBCol md="6" className="mx-auto mt-2">
            <MDBCard style={{marginTop:100,minWidth:250}}>
              <MDBCardBody>
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
                      <div className="invalid-feedback text-center ">
                       {this.state.error}
                      </div>
                    </MDBInput>
                    
                  </div>
                  <div className="text-center mx-auto pt-3 mb-3">
                    <MDBBtn
                      type="submit"
                      style={{ borderRadius: "50px",minWidth:'fit-content', fontSize: "16px" }}
                      gradient="blue"
                      rounded
                      className="btn-block w-50 z-depth-1a"
                      disabled={this.state.loading}
                    >
                      Submit
                      {this.state.loading && (
                        <div
                          className="spinner-border text-center text-danger"
                          style={{
                            position: "absolute",
                            left: "45%",
                            bottom: "15%",
                          }}
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      )}
                    </MDBBtn>
                  </div>
                
                </form>{" "}
              </MDBCardBody>
              
            </MDBCard>
          </MDBCol>
        </MDBRow>
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

