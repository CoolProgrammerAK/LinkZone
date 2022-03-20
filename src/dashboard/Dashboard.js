import React from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
 
  MDBTypography,
  MDBContainer,
} from "mdbreact";
import { connect } from "react-redux";
import "../styles/settings.css";
import PropTypes from "prop-types";
import Loader from '../components/loader'
import { Redirect, Link } from "react-router-dom";
import { setlink } from "../redux/actions/linkaction";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Navbar from '../components/Navbar'
import { validatelink } from "../components/extras";
import LinkBox from "./linkBox";

class dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      link: "",
      error: {},
      open: false,
      uplink: "",
    };
  }
  handlesubmit = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    let link;
    if (
      (this.state.link.substring(0, 8) !== "https://" &&
        this.state.link.includes("www.")) ||
      (this.state.link.substring(0, 7) !== "http://" &&
        this.state.link.includes("www."))
    ) {
      link = `https://${this.state.link}`;
    }else if (
       ( this.state.link.substring(0, 7) == "http://" && !this.state.link.includes("www.")) ||
        (this.state.link.substring(0, 8) == "https://" && !this.state.link.includes("www."))
      ) {
        link = `${this.state.link}`;
       
    } else if (
      this.state.link.substring(0, 12) !== "https://www." ||
      this.state.link.substring(0, 11) !== "http://www."
    ) {
      link = `https://www.${this.state.link}`;
    } 
    else {
      link = this.state.link;
    }
console.log(link)
    const linkdata = {
      title: this.state.title,
      link: link,
    };
    let errors = validatelink(linkdata).errors;
    let valid = validatelink(linkdata).valid;
    if (!valid) {
      this.setState({
        error: errors,
      });
    } else {
      this.props.setlink(this.props.auth.uid, linkdata);
    }
  };
  componentDidMount() {
    document.body.style.backgroundColor = "white";
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.link.errors.linkerror) {
      this.setState({ error: nextProps.link.errors.linkerror });
    }
    if (!nextProps.link.errors.linkerror && !nextProps.link.loadingdata) {
      this.setState({
        title: "",
        link: "",
        error: {}
      });
    }
  }
  render() {
    const { auth, link, profile } = this.props;
    const { error } = this.state;

    if (!auth.uid) return <Redirect to="/"></Redirect>;
    return (
      <>
      <Navbar></Navbar>
    <MDBContainer fluid className="my-4">
       
           
       <LinkBox profile={profile}></LinkBox>
            <MDBCard className="mx-auto my-2" style={{ minWidth: 250,maxWidth:600}}>
              <MDBCardBody className="mx-4">
                <form
                  className="needs-validation"
                  onSubmit={this.handlesubmit}
                  noValidate
                >
                  <p className="h3 text-center mb-4">Add Link</p>
                  <div className="grey-text">
                    <MDBInput
                      style={{ marginTop: "2.5rem" }}
                      value={this.state.title}
                      name="title"
                      required
                      onChange={this.handleChange}
                      label="Title"
                      icon="pen"
                      group
                    >
                      {error.title && (
                        <div className="invalid-feedback text-center d-block">
                          {error.title}
                        </div>
                      )}
                    </MDBInput>
                    <MDBInput
                      style={{ marginTop: "2.5rem" }}
                      value={this.state.link}
                      required
                      name="link"
                      onChange={this.handleChange}
                      label="Link"
                      icon="link"
                      group
                      type="url"
                    >
                      <div className="invalid-feedback text-center">
                        {error.link}
                      </div>
                    </MDBInput>
                  </div>

                  {link.errors.linkerror && (
                    <div className="text-center">
                      <MDBTypography className="text-danger">
                        {link.errors.linkerror}
                      </MDBTypography>
                    </div>
                  )}

                  <div className="text-center mx-auto pt-3 mb-3">
                    <MDBBtn
                      type="submit"
                      style={{
                        borderRadius: "50px",
                        fontSize: "16px",
                        minWidth: "fit-content",
                      }}
                      gradient="blue"
                      rounded
                      className="btn-block w-50 z-depth-1a d-flex align-items-center justify-content-center"
                      disabled={link.loadingdata}
                    >
                      Add Link
                      {link.loadingdata && (
                       <Loader></Loader>
                      )}
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
           
            </MDBCard>
        </MDBContainer>
      </>
    );
  }
}

dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  setlink: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapstatetoprops = (state) => ({
  auth: state.firebase.auth,
  link: state.link,
  profile: state.firebase.profile,
});

export default compose(
  connect(mapstatetoprops, { setlink }),
  firestoreConnect([{ collection: "users" }])
)(dashboard);
