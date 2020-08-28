import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,MDBModalFooter,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBTypography,MDBIcon
} from "mdbreact";
import { connect } from "react-redux";
import { signUp,logInwithgoogle } from "../redux/actions/useraction";
import { Link, Redirect } from "react-router-dom";
import { validatesign } from "./extras";
import PropTypes from "prop-types";
class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      userhandle: "",
      error: {},
    };
  }
  handlesubmit = (event) => {
    event.preventDefault();

    event.target.className += " was-validated";
    const userdata = {
      email: this.state.email,
      password: this.state.password,
      userhandle: this.state.userhandle,
      confirmpassword: this.state.confirmpassword,
      url: `https://firebasestorage.googleapis.com/v0/b/webapp-851e5.appspot.com/o/no_img.png?alt=media`,
    };
    let errors = validatesign(userdata).errors;
    let valid = validatesign(userdata).valid;
    if (!valid) {
      this.setState({
        error: errors,
      });
    } else {
      this.props.signUp(userdata, this.props.history);
    }
  };
  componentDidMount(){
    document.body.style.backgroundColor="#171941"
        }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.errors.signup) {
      this.setState({ error: nextProps.user.errors.signup });
    }
    if (!nextProps.user.errors.signup && !nextProps.user.loading) {
      this.setState({
        email: "",
        password: "",
        error: {},
        confirmpassword: "",
        userhandle: "",
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submit(type){
   if (type=="google"){
     this.props.logInwithgoogle(this.props.history)
   }
  
  }

  render() {
    const { user, auth, profile } = this.props;
    const { error } = this.state;
    const smallStyle = { fontSize: '0.8rem'}
    if (auth.uid) return <Redirect to="/admin"></Redirect>;
    return (
      <MDBContainer>
        <MDBRow>
        <MDBCol md="6" className="mx-auto ">
            <MDBCard style={{marginTop:100,minWidth:250,marginRight:5}}>
            <MDBCardBody className="mx-4">
                <form
                  className="needs-validation"
                  onSubmit={this.handlesubmit}
                  noValidate
                >
                    <h3 className="dark-grey-text mb-2 text-center"><strong>Sign in</strong></h3>
                  <div className="grey-text">
                    <MDBInput
                    
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
                        {error.email}
                      </div>
                    </MDBInput>

                    <MDBInput
                      style={{ marginTop: "2rem" }}
                      value={this.state.password}
                      required
                      name="password"
                      onChange={this.handleChange}
                      label=" Password"
                      icon="lock"
                      group
                      type="password"
                    >
                      <div className="invalid-feedback text-center">
                        {error.password}
                      </div>
                    </MDBInput>
                    <MDBInput
                      style={{ marginTop: "1.5rem" }}
                      value={this.state.confirmpassword}
                      required
                      name="confirmpassword"
                      onChange={this.handleChange}
                      label=" Confirm Password"
                      icon="lock"
                      group
                      type="password"
                    >
                      <div className="invalid-feedback text-center">
                        {error.confirmpassword}
                      </div>
                    </MDBInput>
                    <MDBInput
                      style={{ marginTop: "2rem" }}
                      value={this.state.userhandle}
                      required
                      name="userhandle"
                      onChange={this.handleChange}
                      label=" UserHandle"
                      icon="user"
                      group
                    >
                      <div className="invalid-feedback text-center">
                        {error.userhandle}
                      </div>
                    </MDBInput>
                  </div>
                  {user.errors.signup && (
                    <div className="text-center">
                      <MDBTypography className="text-danger">
                        {user.errors.signup}
                      </MDBTypography>
                    </div>
                  )}
                  {error.confirmpassword2 && (
                    <div className="text-center">
                      <MDBTypography className="text-danger">
                        {error.confirmpassword2}
                      </MDBTypography>
                    </div>
                  )}

                  <div className="text-center mx-auto pt-3 mb-3">
                    <MDBBtn type="submit" style={{borderRadius:'50px',minWidth:'fit-content',fontSize:'16px'}} gradient="blue" rounded className="btn-block w-50 z-depth-1a" disabled={user.loading}>
                      Signup
                      {user.loading && (
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
                  <p className="dark-grey-text text-right d-flex justify-content-center  pt-2" style={smallStyle}> or </p>
                <div className="row my-1 d-flex justify-content-center">
                  <MDBBtn onClick={()=>this.submit("google")} type="button" color="peach-gradient" style={{minWidth:'fit-content',borderRadius:'8px',width:'68%',fontSize:15}}  className="mr-md-3 peach-gradient z-depth-1a"><MDBIcon fab icon="google" style={{fontSize:'18px'}} className="text-white mr-4 text-center" />Sign in with Google</MDBBtn>

                 
                </div>
                  {/* <div className="text-center">
                    <MDBTypography className="text-primary-dark">
                      {" "}
                      Already have an account? Login{" "}
                      <Link to="/login" className="u">
                        here
                      </Link>
                    </MDBTypography>
                  </div> */}
                </form>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1 text-center">
                <p className="text-primary-dark d-flex justify-content-end mx-auto" style={{fontSize:'1rem'}}>Already a member? <a href="/login" className="blue-text ml-1"> Sign In</a></p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
signup.propTypes = {
  signUp: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapstatetoprops = (state) => ({
  user: state.user,
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

export default connect(mapstatetoprops, { signUp,logInwithgoogle })(signup);
