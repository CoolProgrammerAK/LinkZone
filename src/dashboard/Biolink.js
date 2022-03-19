import React, { Component } from "react";
import "../styles/Theme.css";
import DocumentTitle from "react-document-title";
import { connect } from "react-redux";
import Linkcontainer from "./Linkcontainer";
import { MDBTypography } from "mdbreact";
import ScreenLoader from "../components/screenloader";
import { getcustomdata } from "../redux/actions/linkaction";
class Biolink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: null,
      links: null,
    };
  }
  setprops = (profile, links) => {
    this.setState({
      profile: profile,
      links: links,
    });
  };
  componentDidMount() {
    this.props.getcustomdata(
      this.props.match.params.profile,
      this.props.history,
      this.setprops
    );
  }
  render() {
    const { profile, links } = this.state;
    if (profile?.uid && links) {
      return (
        <>
          {/* {this.props.match.params.profile!=profile.userhandle && <Redirect to="/404-notfound"></Redirect>} */}
          <DocumentTitle title={`${profile.userhandle} LinkZone`}>
            <div style={{ textAlign: "center", top: 0, left: 0 }}>
              {profile.theme === "Default theme" && (
                <Common
                  profile={profile}
                  themeClassName={"theme-0"}
                  color="transparent"
                  links={links}
                ></Common>
              )}

              {profile.theme === "Light Green theme" && (
                <Common
                  profile={profile}
                  themeClassName={"theme1"}
                  color="transparent"
                  links={links}
                ></Common>
              )}
              {profile.theme === "Dark theme" && (
                <Common
                  profile={profile}
                  themeClassName={"theme2"}
                  color="white"
                  links={links}
                ></Common>
              )}
              {profile.theme === "Greenish white theme" && (
                <Common
                  profile={profile}
                  themeClassName={"theme3"}
                  color="white"
                  links={links}
                ></Common>
              )}
              {profile.theme === "Black white theme" && (
                <Common
                  profile={profile}
                  themeClassName={"theme4"}
                  color="transparent"
                  links={links}
                ></Common>
              )}
              {profile.theme === "Gradient theme" && (
                <Common
                  profile={profile}
                  themeClassName={"theme5"}
                  color="transparent"
                  links={links}
                ></Common>
              )}
              {profile.theme === "Purpish white theme" && (
                <Common
                  profile={profile}
                  themeClassName={"theme6"}
                  color="transparent"
                  links={links}
                ></Common>
              )}
              {profile.theme === "Dark bluish theme" && (
                <Common
                  profile={profile}
                  themeClassName={"theme7"}
                  color="transparent"
                  links={links}
                ></Common>
              )}
              {profile.theme === "Skyish theme" && (
                <Common
                  profile={profile}
                  themeClassName={"theme8"}
                  color="transparent"
                  links={links}
                ></Common>
              )}
              {profile.theme === "Insta theme" && (
                <Common
                  profile={profile}
                  themeClassName={"theme9"}
                  color="transparent"
                  links={links}
                ></Common>
              )}
              {profile.theme === "Sunset theme" && (
                <Common
                  profile={profile}
                  themeClassName={"theme10"}
                  color="transparent"
                  color2="white"
                  links={links}
                ></Common>
              )}
            </div>
          </DocumentTitle>
        </>
      );
    } else {
      return <ScreenLoader></ScreenLoader>;
    }
  }
}

export default connect(null, { getcustomdata })(Biolink);

function Common({ profile, links, themeClassName, color, color2 }) {
  return (
    <div
      className={`${themeClassName} default p-2 `}
      style={{ overflow: "auto" }}
    >
      <div style={{ maxWidth: 450, margin: "auto" }}>
        <img
          src={profile.url}
          alt=""
          className="img-fluid z-depth-1"
          style={{ width: 170, height: 170, borderRadius: "50%" }}
        ></img>
        <MDBTypography
          colorText={color2}
          className="mt-3"
          style={{ fontWeight: "bold", fontSize: 20 }}
        >
          <b>@{profile.userhandle}</b>
        </MDBTypography>
        <div style={{ marginBottom: 74 }}>
          {links &&
            links.map((link,i)=>{
             return <Linkcontainer
                  color={color}
                  first="dot text"
                  key={i}
                  links={link}
                />
            } )

              
          }
        </div>
      </div>
    </div>
  );
}
