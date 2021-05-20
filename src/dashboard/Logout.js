import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import {signOut} from '../redux/actions/useraction'
import {connect} from 'react-redux'
class logout extends Component {
  componentWillMount(){
 
      this.props.signOut( )
  }
    render() {
        const {auth}=this.props

      if (!auth.uid)  return<Redirect to="/"></Redirect>
        return (
            <div>
               Logout 
            </div>
        )
    }
}
logout.propTypes={
  
    auth:PropTypes.object.isRequired,signOut:PropTypes.func.isRequired
}

const mapstatetoprops=state=>({
  auth:state.firebase.auth
})

export default connect(mapstatetoprops,{signOut})(logout)
