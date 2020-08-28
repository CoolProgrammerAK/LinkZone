import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBModalFooter,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBTypography,
} from "mdbreact";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logIn } from "../redux/actions/useraction";
import { validatelogin } from "./extras";
class FormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: {},
    };
  }
  componentDidMount(){
    document.body.style.backgroundColor="#171941"
        }
  handlesubmit = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    const userdata = {
      email: this.state.email,
      password: this.state.password,
    };
    let errors = validatelogin(userdata).errors;
    let valid = validatelogin(userdata).valid;
    if (!valid) {
      this.setState({
        error: errors,
      });
    } else {
      this.props.logIn(userdata, this.props.history);
    }
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.errors.login) {
      this.setState({ error: nextProps.user.errors.login });
    }
    if (!nextProps.user.errors.login && !nextProps.user.loading) {
      this.setState({
        email: "",
        password: "",
        error: {},
      });
    }
  }

  render() {
    const { classes, user, auth } = this.props;
    const { error } = this.state;
    const smallStyle = { fontSize: "0.8rem" };
    if (auth.uid) return <Redirect to="/admin"></Redirect>;
    return (
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
                  <p className="h3 text-center mb-4">Log in</p>
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
                        {error.email}
                      </div>
                    </MDBInput>
                    <MDBInput
                      style={{ marginTop: "2.5rem" }}
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
                  </div>
                  <p className="font-small blue-text d-flex justify-content-end pb-1">
                    Forgot
                    <a href="/login/resetpassword" className="blue-text ml-1">
                      Password?
                    </a>
                  </p>
                  {user.errors.login && (
                    <div className="text-center">
                      <MDBTypography className="text-danger">
                        {user.errors.login}
                      </MDBTypography>
                    </div>
                  )}

                  <div className="text-center mx-auto pt-3 mb-3">
                    <MDBBtn
                      type="submit"
                      style={{ borderRadius: "50px",minWidth:'fit-content', fontSize: "16px" }}
                      gradient="blue"
                      rounded
                      className="btn-block w-50 z-depth-1a"
                      disabled={user.loading}
                    >
                      Login{" "}
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
                  
                  
                </form>{" "}
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1 text-center">
                <p
                  className="text-primary-dark d-flex justify-content-end mx-auto"
                  style={{ fontSize: "1rem" }}
                >
                  Dont't have an account?{" "}
                  <a href="/signup" className="blue-text ml-1">
                    {" "}
                    Sign Up
                  </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
FormPage.propTypes = {
  logIn: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapstatetoprops = (state) => ({
  user: state.user,
  auth: state.firebase.auth,
});
export default connect(mapstatetoprops, { logIn })(FormPage);
