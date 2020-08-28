import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {MDBTypography, MDBBtn, MDBContainer} from 'mdbreact'
// import bg from '../pictures/home_background.jpg'
import PropTypes from 'prop-types'
import '../styles/home.css'
class Home extends Component {
    
    componentDidMount(){
document.body.style.backgroundColor="#171941"
    }
    render() {
        const {auth}=this.props

      if (auth.uid)  return<Redirect to="/admin"></Redirect>
        return (
            <>
            <MDBContainer style={{minWidth:250}}>
            <div className="squares square1" />
            <div className="squares square2" />
            <div className="squares square3" />
            <div className="squares square4" />
            <div className="squares square5" />
            <div className="squares square6" />
            <div className="squares square7" />
            <div className="d-flex align-content-center flex-column" id="home">
                <div className="text-center">
                    <MDBTypography className="text-white" id="heading"><strong>The Only Link you'll ever need</strong> </MDBTypography>
                </div>
                <div  className="text-center">
                    <MDBTypography tag="h4" variant="h4-responsive" className=" text-white">Connect audiences to all of your content with just one link</MDBTypography>
                </div>
                <div  className="text-center">
                <Link to="/signup">
                <MDBBtn  color="indigo" style={{fontSize:"16px"}}>Get Started</MDBBtn></Link></div>
                <div className="text-center">
                <MDBTypography className=" text-white">Already have an account ? Login <Link style={{color:"orange",textDecoration:"underline"}} to="/login">here</Link></MDBTypography>
                </div>
            </div>
            </MDBContainer>
            </>
        )
    }
}

Home.propTypes={
  
    auth:PropTypes.object.isRequired
}

const mapstatetoprops=state=>({
  auth:state.firebase.auth
})

export default connect(mapstatetoprops)(Home)
