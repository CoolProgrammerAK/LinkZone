import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import '../styles/Theme.css'
import DocumentTitle from 'react-document-title'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import Linkcontainer from './Linkcontainer'
import { MDBTypography } from 'mdbreact'
class Biolink extends Component {
    render() {
        const {profile,auth,classes,links}=this.props
       
        if (!auth.uid) return <Redirect to="/"/>
        
       if (profile.userhandle && links) return (
          
            <DocumentTitle title={`${profile.userhandle} LinkZone`}>
                <div style={{textAlign:'center',top:0,left:0}}>
                {(profile.theme==="Default theme") && (
              <div className="theme-0 default p-2 " style={{overflow:'auto'}}>

                      <img src={profile.url} alt="" className="rounded-circle img-fluid z-depth-1" style={{width:150}} ></img>
                 <MDBTypography className="mt-2" tag="h4" variant="h4-responsive" ><b>@{profile.userhandle}</b></MDBTypography>
                <div style={{marginBottom:74}}>{links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer color="rgb(77, 9, 37)" first="dot text" key={link.id} links={link}/> ))}</div>
                   
                         </div>
           ) 
           }

{(profile.theme==="Light Green theme") && (
              <div className="theme1 default p-2" style={{overflow:'auto'}}>

<img src={profile.url} alt="" className="rounded-circle img-fluid z-depth-1" style={{width:150}} ></img>
                 <MDBTypography className="mt-2" tag="h4" variant="h4-responsive" ><b>@{profile.userhandle}</b></MDBTypography>
                <div style={{marginBottom:74}}>{links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer color="elegant" first="dot text" key={link.id} links={link}/> ))}</div>
                   
                         </div>
           ) 
           }
{(profile.theme==="Dark theme") && (
              <div className="theme2 default p-2" style={{overflow:'auto'}}>

<img src={profile.url} alt="" className="rounded-circle img-fluid z-depth-1" style={{width:150}} ></img>
                 <MDBTypography className="mt-2" tag="h4" variant="h4-responsive" ><b>@{profile.userhandle}</b></MDBTypography>
                <div style={{marginBottom:74}}>{links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer color="white" first="dot text" key={link.id} links={link}/> ))}</div>
                   
                         </div>
           ) 
           }
           {(profile.theme==="Greenish white theme") && (
              <div className="theme3 default p-2" style={{overflow:'auto'}}>
    <img src={profile.url} alt="" className="rounded-circle img-fluid z-depth-1" style={{width:150}} ></img>
                
                 <MDBTypography className="mt-2" tag="h4" variant="h4-responsive" ><b>@{profile.userhandle}</b></MDBTypography>
                <div style={{marginBottom:74}}>{links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer color="white" first="dot text" key={link.id} links={link}/> ))}</div>
                   
                         </div>
           ) 
           }
 {(profile.theme==="Black white theme") && (
              <div className="theme4 default p-2" style={{overflow:'auto'}}>
    <img src={profile.url} alt="" className="rounded-circle img-fluid z-depth-1" style={{width:150}} ></img>
                 <MDBTypography className="mt-2" tag="h4" variant="h4-responsive" ><b>@{profile.userhandle}</b></MDBTypography>
                <div style={{marginBottom:74}}>{links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer color="white" first="dot text" key={link.id} links={link}/> ))}</div>
                   
                         </div>
           ) 
           }
           {(profile.theme==="Gradient theme") && (
              <div className="theme5 default p-2" style={{overflow:'auto'}}>
    <img src={profile.url} alt="" className="rounded-circle img-fluid z-depth-1" style={{width:150}} ></img>
                 <MDBTypography className="mt-2" tag="h4" variant="h4-responsive" ><b>@{profile.userhandle}</b></MDBTypography>
                <div style={{marginBottom:74}}>{links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer  color="transparent"  first="dot text" key={link.id} links={link}/> ))}</div>
                   
                         </div>
           ) 
           }
{(profile.theme==="Purpish white theme") && (
              <div className="theme6 default p-2" style={{overflow:'auto'}}>

<img src={profile.url} alt="" className="rounded-circle img-fluid z-depth-1" style={{width:150}} ></img>
                 <MDBTypography className="mt-2" tag="h4" variant="h4-responsive" ><b>@{profile.userhandle}</b></MDBTypography>
                <div style={{marginBottom:74}}>{links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer  color="transparent"  first="dot text" key={link.id} links={link}/> ))}</div>
                   
                         </div>
           ) 
           }
           {(profile.theme==="Dark bluish theme") && (
              <div className="theme7 default p-2 " style={{overflow:'auto'}}>

<img src={profile.url} alt="" className="rounded-circle img-fluid z-depth-1" style={{width:150}} ></img>   
                 <MDBTypography className="mt-2" tag="h4" variant="h4-responsive" ><b>@{profile.userhandle}</b></MDBTypography>
                <div style={{marginBottom:74}}>{links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer  color="transparent"  first="dot text" key={link.id} links={link}/> ))}</div>
                   
                         </div>
           ) 
           }
            {(profile.theme==="Skyish theme") && (
              <div className="theme8 default p-2" style={{overflow:'auto'}}>

<img src={profile.url} alt="" className="rounded-circle img-fluid z-depth-1" style={{width:150}} ></img>
                 <MDBTypography className="mt-2" tag="h4" variant="h4-responsive" ><b>@{profile.userhandle}</b></MDBTypography>
                <div style={{marginBottom:74}}>{links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer  color="transparent"  first="dot text" key={link.id} links={link}/> ))}</div>
                   
                         </div>
           ) 
           }
            {(profile.theme==="Insta theme") && (
              <div className="theme9 default p-2 " style={{overflow:'auto'}}>
    <img src={profile.url} alt="" className="rounded-circle img-fluid z-depth-1" style={{width:150}} ></img>
                 <MDBTypography className="mt-2" tag="h4" variant="h4-responsive" ><b>@{profile.userhandle}</b></MDBTypography>
                <div style={{marginBottom:74}}>{links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer  color="transparent"  first="dot text" key={link.id} links={link}/> ))}</div>
                   
                         </div>
           ) 
           }
            {(profile.theme==="Sunset theme") && (
              <div className="theme10 default p-2 " style={{overflow:'auto'}}>

<img src={profile.url} alt="" className="rounded-circle img-fluid z-depth-1" style={{width:150}} ></img>
                 <MDBTypography className="mt-2" tag="h4" variant="h4-responsive" ><b>@{profile.userhandle}</b></MDBTypography>
                <div style={{marginBottom:74}}>{links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer  color="transparent"  first="dot text" key={link.id} links={link}/> ))}</div>
                   
                         </div>
           ) 
           }
                </div>
            </DocumentTitle>)
        return (
            <div className="spinner-border text-primary" style={{position:"absolute",top:"45%",left:"50%"}}role="status">
        <span className="sr-only">Loading...</span>
      </div>)
    }
}

Biolink.propTypes={
    
     auth:PropTypes.object.isRequired,
    
     profile:PropTypes.object.isRequired,
 }
 
 const mapstatetoprops=state=>(
 
  {
      links:state.firestore.ordered.links,
   auth:state.firebase.auth,
   user:state.user,
   profile:state.firebase.profile
 })
export default compose(connect(mapstatetoprops),firestoreConnect([{collection:"links",orderBy:['time','desc']}]))(Biolink)
