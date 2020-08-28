import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, 
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from '../pictures/logo1.png'
import {Link} from 'react-router-dom'
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
            <a href="/admin" className="text-white h5 m-2 mb-1"><strong>Link</strong></a>
            </MDBNavItem>
            <MDBNavItem>
            <a href="/edit" className="text-white h5 m-2 mb-1"><strong>Edit</strong></a>
            </MDBNavItem>
            <MDBNavItem>
            <a href="/settings" className="text-white h5 m-2 mb-1"><strong>Settings</strong></a>
            </MDBNavItem>
            <MDBNavItem>
            <a href="/logout" onClick={this.logout} className="text-white h5 m-2 mb-1"><strong>Logout</strong></a>
            </MDBNavItem>
          </MDBNavbarNav>
  </>)
  :(<>
   <MDBNavbarNav right>
            <MDBNavItem >
            <a href="/" className="text-white h5 m-2 mb-1"><strong>Home</strong></a>
            </MDBNavItem>
            <MDBNavItem>
            <a href="/signup"className="text-white h5 m-2 mb-1"><strong>Signup</strong></a>
            </MDBNavItem>
            <MDBNavItem>
            <a href="/login"className="text-white h5 m-2 mb-1"><strong>Login</strong></a>
            </MDBNavItem>
            
          </MDBNavbarNav></>)
  return (
    <Router>
      <MDBNavbar  dark expand="md"   style={{    position: "fixed",
    
    
    top: "0%",
    width: "100%",backgroundColor: "#171941",zIndex:20}}  >
        <MDBNavbarBrand>
          <img src={Logo}
          className="mr-2"></img>
          <strong className="white-text h3 align-middle">LinkZone</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" className="text-center" isOpen={this.state.isOpen} navbar>
         {link}
          
        </MDBCollapse>
      </MDBNavbar>
    </Router>
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
