import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { MDBTypography, MDBBtn, MDBContainer } from "mdbreact";
import PropTypes from "prop-types";
import "../styles/home.css";
import Navbar from "./Navbar";

class Home extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#171941";
  }
  render() {
    const { auth } = this.props;

    if (auth.uid) return <Redirect to="/admin"></Redirect>;
    return (
      <>
        <Navbar />
        <MDBContainer
          className="d-flex align-content-center flex-column h-100 justify-content-center"
          style={{ minWidth: 250 }}
        >
          <div className="cubes cube1" />
          <div className="cubes cube2" />
          <div className="cubes cube3" />
          <div className="cubes cube4" />
          <div className="cubes cube5" />
          <div className="cubes cube6" />
          <div className="cubes cube7" />
          <div className="cubes cube8" />
          <div
            className="d-flex align-items-center flex-column text-center"
            style={{ zIndex: 7 }}
          >
            <img src={"/logo2.png"} className="mr-2 w-25"></img>
            <MDBTypography className="text-white m-0" id="heading">
              LinkZone{" "}
            </MDBTypography>

            <MDBTypography
              tag="h4"
              variant="h4-responsive"
              className=" text-white"
            >
              Connect audiences to all of your content with just one link
            </MDBTypography>

            <Link to="/signup">
              <MDBBtn color="indigo" style={{ fontSize: "16px" }}>
                Get Started
              </MDBBtn>
            </Link>

            <MDBTypography className=" text-white">
              Already have an account ? Login{" "}
              <Link
                style={{
                  color: "lightyellow",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
                to="/login"
              >
                here
              </Link>
            </MDBTypography>
          </div>
        </MDBContainer>
      </>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapstatetoprops = (state) => ({
  auth: state.firebase.auth,
});

export default connect(mapstatetoprops)(Home);
