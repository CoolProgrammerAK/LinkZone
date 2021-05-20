import React from "react";
import { MDBBtn, MDBIcon, MDBTypography } from "mdbreact";
import Noimg from "../pictures/no_img.png";
import { Link } from "react-router-dom";
function CommonTheme({
  profile,
  themeClassname,
  buttonColor1,
  buttonColor2,
  textColor,
}) {
  return (
    <div className={`${themeClassname} theme `}>
      <img
        src={profile.url ? profile.url : Noimg}
        style={{ width: 110, height: 110, borderRadius: "50%" }}
        className="img-fluid z-depth-1"
        alt=""
      />
      <MDBTypography colorText={textColor} className="mt-2">
        <b>@{profile.userhandle}</b>
      </MDBTypography>
      <Link to="#">
      <MDBBtn
        className="dot text"
        color={buttonColor1}
      
        to="#"
        style={{ textAlign: "center", color: buttonColor2, borderRadius: 5 }}
      >
        <b> XXXXDemoXXX</b>
      </MDBBtn></Link>
      <br />
      <div id="icons" style={{color:textColor}} >
        <MDBIcon id="iconp" fab icon="whatsapp" size={20} />
        <MDBIcon id="iconp" fab icon="instagram" size={20} />

        <MDBIcon id="iconp" fab icon="twitter" size={20} />
        <MDBIcon id="iconp" fab icon="facebook-f" size={20} />
        <MDBIcon id="iconp" fab icon="youtube" size={20} />
      </div>
    </div>
  );
}

export default CommonTheme;
