import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import {compose} from 'redux'
import {MDBTypography,MDBContainer} from "mdbreact"
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import Linksummary from './Link'
import Navbar from '../components/Navbar'
import Screenloader from '../components/screenloader'
class edit extends Component {
    render() {
        const {auth,links,profile}=this.props
       
     
        if (!auth.uid)  return<Redirect to="/"></Redirect>
        if (links) return (
        <>
         <Navbar></Navbar>
   
         <MDBContainer fluid className="my-4">{(!(profile.uid) && !links)?(<Screenloader/>):(((links.filter(link=>link.uid===this.props.auth.uid)).length)==0 ?
              (<div  className="text-center"  >
              <MDBTypography tag="h1" className="font-weight-bold mt-6"  variant="h1-responsive">No Links found</MDBTypography>
               </div>):
            
             ( links.filter(link=>link.uid===profile.uid).map(link=>{
               return<Linksummary links={link} key={link.id}></Linksummary>
              })))}
           
              </MDBContainer></>
          )
        else return(
          <>
         <Navbar></Navbar>
           <Screenloader></Screenloader></>
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
