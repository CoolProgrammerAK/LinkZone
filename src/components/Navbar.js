import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, 
} from "mdbreact";
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {signOut} from '../redux/actions/useraction'

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
logout=(e)=>{
  e.preventDefault()
  this.props.signOut()
 
}
render() {
  const {auth}=this.props
  const link=auth.uid?(<>
     <MDBNavbarNav right>
            <MDBNavItem >
              <Link to="/admin"  className="text-white h5 m-2 mb-1"><strong>Link</strong></Link>
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/edit" className="text-white h5 m-2 mb-1"><strong>Edit</strong></Link>
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/settings" className="text-white h5 m-2 mb-1"><strong>Settings</strong></Link>
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/logout" onClick={this.logout} className="text-white h5 m-2 mb-1"><strong>Logout</strong></Link>
            </MDBNavItem>
          </MDBNavbarNav>
  </>)
  :(<>
   <MDBNavbarNav right>
            <MDBNavItem >
            
            <Link to="/" className="text-white h5 m-2 mb-1"><strong>Home</strong></Link>
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/signup"className="text-white h5 m-2 mb-1"><strong>Signup</strong></Link>
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/login"className="text-white h5 m-2 mb-1"><strong>Login</strong></Link>
            </MDBNavItem>
            
          </MDBNavbarNav></>)
  return (
  
      <MDBNavbar  dark expand="md"   style={{    position: "sticky",
    
    
    top: 0,
    width: "100%",backgroundColor: "#171941",zIndex:20}}  >
      <a href="/" >
        <MDBNavbarBrand >

          
          <strong className="white-text h3 mx-2 align-middle" style={{fontFamily:"Josefin Sans,sans-serif"}}>LinkZone</strong>
        </MDBNavbarBrand></a>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" className="text-center" isOpen={this.state.isOpen} navbar>
         {link}
          
        </MDBCollapse>
      </MDBNavbar>

    );
  }
}
NavbarPage.propType={

  auth:PropTypes.object.isRequired,
  signOut:PropTypes.func.isRequired
}
const mapstatetoprops=state=>(
{
  auth:state.firebase.auth
}

)
export default connect(mapstatetoprops,{signOut})(NavbarPage);
