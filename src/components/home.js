import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import bg from '../pictures/home_background.jpg'
import PropTypes from 'prop-types'
class home extends Component {
    render() {
        const {auth}=this.props

      if (auth.uid)  return<Redirect to="/admin"></Redirect>
        return (
            <>
            <img src={bg} alt ="bg" className="bg"></img>
            <div className="heading" >
            The Only Link You'll Ever Need!!

            </div>
            <div className="sub-heading" >
            Connect audiences to all of your content with just one link..
            </div>
            <Link to="/signup">
            <button className="button2">Get started for free</button></Link>
            <span className="dummy">Already have an account?<a href="/login" style={{textDecoration:"underline",color:"white"}}>Login here</a></span>
            </>
        )
    }
}

home.propTypes={
  
    auth:PropTypes.object.isRequired
}

const mapstatetoprops=state=>({
  auth:state.firebase.auth
})

export default connect(mapstatetoprops)(home)
