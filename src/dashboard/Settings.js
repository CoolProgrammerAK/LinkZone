import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect} from "react-router-dom";
import { uploadimage } from "../redux/actions/useraction";
import { connect } from "react-redux";
import "../styles/settings.css";
import LinkBox from './linkBox'
import Theme from "./Theme";
import Noimg from "../pictures/no_img.png";
import Screenloading from '../components/screenloader'
import Navbar from '../components/Navbar'
import {
 MDBContainer,
 
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
} from "mdbreact";
class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorimage: ""
    };
  }

  editimage = () => {
    const edit = document.getElementById("imagefile");
    edit.click();
  };
  handlechange = (e) => {
    e.preventDefault();

    if (
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpg" ||
      e.target.files[0].type === "image/jpeg"
    ) {
      const image = e.target.files[0];

      this.props.uploadimage(image);
      this.setState({ errorimage: "" });
    } else {
      this.setState({ errorimage: "Image should be in jpg or png format" });
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.errors.image) {
      this.setState({ errorimage: nextProps.user.errors.image });
    }
  }
  render() {
    const { auth, profile } = this.props;
    const { errorimage } = this.state;

    if (!auth.uid) return <Redirect to="/"></Redirect>;
    return (
      <div style={{ minWidth: "fit-content" }}>
        {!profile.url ? (
          <>
          <Navbar></Navbar>
          <Screenloading></Screenloading></>
        ) : (
          <>
           <Navbar></Navbar>
           <MDBContainer fluid className="my-4">
                <LinkBox profile={profile}></LinkBox>
            

                <MDBCard className="mx-auto my-2" style={{ minWidth: 250,maxWidth:600}}>
                  <MDBCardBody className="mx-4 d-flex flex-column ">
                    <div className="mb-3 mx-auto">
       
                       <img
                          src={profile.url?profile.url:Noimg}
                          style={{ width: 170,height:170,borderRadius:'50%' }}
                          className="img-fluid z-depth-1"
                        
                          
                          alt=""
                        />
                    </div>
                    <div className="text-center">
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        id="imagefile"
                        onChange={this.handlechange}
                        hidden="hidden"
                      />

                      <MDBIcon
                        id="icon"
                        icon="pencil-alt"
                        onClick={this.editimage}
                      />
                    </div>{" "}
                    {errorimage && (
                      <div
                        className="text-center mt-2 "
                        style={{ marginBottom: -5 }}
                      >
                        <MDBTypography className="text-danger">
                          {errorimage}
                        </MDBTypography>
                      </div>
                    )}
                    <hr style={{ width: 187 }}></hr>
                    <div
                      className="text-center mt-2 "
                      style={{ marginBottom: -5 }}
                    >
                      <MDBTypography variant="h2" tag="h2">
                        <b>Theme</b>
                      </MDBTypography>
                      <Theme />
                    </div>
                  </MDBCardBody>
                </MDBCard>
         
            </MDBContainer>
          </>
        )}
      </div>
    );
  }
}

Settings.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapstatetoprops = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  user: state.user,
});

export default connect(mapstatetoprops, { uploadimage })(Settings);
