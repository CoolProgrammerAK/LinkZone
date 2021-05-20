import React, { Component, Fragment } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { updatetheme } from "../redux/actions/useraction";
import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon, MDBTypography } from "mdbreact";
import { firestoreConnect } from "react-redux-firebase";
import "../styles/Theme.css";
import CommonTheme from "./commonTheme";
import Loader from "../components/loader";
class Theme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      theme: this.props.profile.theme ,
      disable: true,
    };
  }
  
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleChange = (event) => {
    this.setState({ theme: event.target.value });
    this.setState({ disable: false });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    this.props.updatetheme(this.state.theme);
    this.setState({ disable: true });
  };
  render() {
    const {
      profile,
      user: { theme_loader },
    } = this.props;
console.log(this.state.theme,this.props.profile.theme)
    return (
      <Fragment>
        <div style={{ marginTop: 15, marginBottom: 13, display: "flex" }}>
          <label style={{ fontSize: 20 }}>Select theme: </label>
          <select
            className="browser-default custom-select"
            style={{ width: "39%", marginLeft: "10%" }}
            value={this.state.theme}
            onChange={this.handleChange}
          >
            <option value="Default theme">Default theme</option>

            <option value="Gradient theme">Reddish theme</option>

            <option value="Light Green theme">Light Green theme</option>
            <option value="Purpish white theme">Purpish white theme</option>

            <option value="Greenish white theme">Greenish white theme</option>
            <option value="Dark bluish theme">Purpink theme</option>
            <option value="Skyish theme">Skyish theme</option>
            <option value="Sunset theme">Sunset theme</option>
            <option value="Dark theme">Dark theme</option>
            <option value="Insta theme">Insta theme</option>

            <option value="Black white theme">Black white theme</option>
          </select>
        </div>
        <div className="d-flex" style={{justifyContent:'flex-end'}}>
        <MDBBtn
          color="black"
          disabled={this.state.disable || theme_loader}
          onClick={this.handlesubmit}
          className="z-depth-1a d-flex align-items-center justify-content-center"
        >
          Upload
          {theme_loader && <Loader></Loader>}
        </MDBBtn></div>
      
        <MDBTypography variant="h5" tag="h5" className="text-justify">
          <b>Demo</b>
        </MDBTypography>

        {this.state.theme === "Default theme" && (
          <CommonTheme
            profile={profile}
            themeClassname="theme-0"
            buttonColor1="transparent"
            buttonColor2=""
          ></CommonTheme>
        )}
        {this.state.theme === "Light Green theme" && (
          <CommonTheme
            profile={profile}
            themeClassname="theme1"
            buttonColor1="transparent"
            buttonColor2=""
          ></CommonTheme>
        )}
        {this.state.theme === "Dark theme" && (
          <CommonTheme
            profile={profile}
            themeClassname="theme2"
            buttonColor1="white"
            buttonColor2="black"
          ></CommonTheme>
        )}

        {this.state.theme === "Greenish white theme" && (
          <CommonTheme
            profile={profile}
            themeClassname="theme3"
            buttonColor1="white"
            buttonColor2="black"
          ></CommonTheme>
        )}
        {this.state.theme === "Black white theme" && (
          <CommonTheme
            profile={profile}
            themeClassname="theme4"
            buttonColor1="transparent"
            buttonColor2=""
          ></CommonTheme>
        )}
        {this.state.theme === "Gradient theme" && (
          <CommonTheme
            profile={profile}
            themeClassname="theme5"
            buttonColor1="transparent"
            buttonColor2=""
          ></CommonTheme>
        )}
        {this.state.theme === "Purpish white theme" && (
          <CommonTheme
            profile={profile}
            themeClassname="theme6"
            buttonColor1="transparent"
            buttonColor2=""
          ></CommonTheme>
        )}
        {this.state.theme === "Dark bluish theme" && (
          <CommonTheme
            profile={profile}
            themeClassname="theme7"
            buttonColor1="transparent"
            buttonColor2=""
          ></CommonTheme>
        )}
        {this.state.theme === "Sunset theme" && (
          <CommonTheme
            profile={profile}
            themeClassname="theme10"
            buttonColor1="transparent"
            buttonColor2=""
            textColor="white"
          ></CommonTheme>
        )}
        {this.state.theme === "Skyish theme" && (
          <CommonTheme
            profile={profile}
            themeClassname="theme8"
            buttonColor1="transparent"
            buttonColor2=""
          ></CommonTheme>
        )}
        {this.state.theme === "Insta theme" && (
          <CommonTheme
            profile={profile}
            themeClassname="theme9"
            buttonColor1="transparent"
            buttonColor2=""
          ></CommonTheme>
        )}
      </Fragment>
    );
  }
}

const mapstatetoprops = (state) => ({
  links: state.firestore.ordered.links,
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  user: state.user,
});

export default compose(
  connect(mapstatetoprops, { updatetheme }),
  firestoreConnect([{ collection: "users" }])
)(Theme);
