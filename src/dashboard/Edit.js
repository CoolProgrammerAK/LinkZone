import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import {compose} from 'redux'
import {MDBTypography} from "mdbreact"
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import Linksummary from './Link'
import '../styles/Link.css'
import {  MDBContainer,MDBAlert} from "mdbreact";
class edit extends Component {
    render() {
        const {auth,links,profile,link}=this.props
       
     
        if (!auth.uid)  return<Redirect to="/"></Redirect>
        if (links) return (
        <>
        {link.open_del &&
      (<MDBContainer id="alert" style={{zIndex:21,position:'relative',width:'fit-content'}}>
        <MDBAlert color="success"   >
        <strong>Success</strong> Your link is successfully deleted
      </MDBAlert>
      </MDBContainer>)
   }
   
            <div  id="margin">{(!(profile.uid) && !links)?(<div className="spinner-border text-primary" style={{position:"absolute",top:"45%",left:"50%"}}role="status">
            <span className="sr-only">Loading...</span>
          </div>):(((links.filter(link=>link.uid===this.props.auth.uid)).length)==0 ?
              (<div  className="text-center"  >
              <MDBTypography tag="h1" className="font-weight-bold text-white mt-6"  variant="h1-responsive">No Links found</MDBTypography>
               </div>):
            
             ( links.filter(link=>link.uid===profile.uid).map(link=>{
               return<Linksummary links={link} key={link.id}></Linksummary>
              })))}
           
              </div></>
          )
        else return(
            <div className="spinner-border text-primary" style={{position:"absolute",top:"45%",left:"50%"}}role="status">
            <span className="sr-only">Loading...</span>
          </div>
      )
    }
}




edit.propTypes={
 
    auth:PropTypes.object.isRequired
}

const mapstatetoprops=state=>(

  {
    links:state.firestore.ordered.links,
  auth:state.firebase.auth,
  profile:state.firebase.profile,link:state.link
})

export default compose(connect(mapstatetoprops),firestoreConnect([{collection:"links",orderBy:['time','desc']}]))(edit)
