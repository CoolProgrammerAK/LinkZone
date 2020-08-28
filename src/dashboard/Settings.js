import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Redirect,Link} from 'react-router-dom'
import {uploadimage} from '../redux/actions/useraction'
import {connect} from 'react-redux'
import '../styles/settings.css'
import Theme from './Theme'
import Noimg from '../pictures/no_img.png'
import {
    MDBRow,
    MDBCol,
    MDBInput,MDBTooltip,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,MDBAlert,MDBContainer,
    MDBIcon,MDBTypography
  } from "mdbreact";
class Settings extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           errorimage:""
        }
      }
      
      editimage=()=>{
        const edit=document.getElementById('imagefile')
        edit.click()
    }
    handlechange=e=>{
      e.preventDefault()
      
     
        if (e.target.files[0].type==="image/png" || e.target.files[0].type==="image/jpg"|| e.target.files[0].type==="image/jpeg"){
       const image=e.target.files[0]
       
    
        this.props.uploadimage(image)
        this.setState({errorimage:""})
      }
        else {
          this.setState({errorimage:"Image should be in jpg or png format"})
        }
      
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.user.errors.image){
          this.setState({errorimage:nextProps.user.errors.image})
      }
     
    }
    render() {
        const {auth,profile,user}=this.props
        const {errorimage}=this.state
        
      if (!auth.uid)  return<Redirect to="/"></Redirect>
        return (

            <div style={{minWidth:'fit-content'}}>
                {
                    !profile.url ? (
                        <div className="spinner-border text-primary" style={{position:"absolute",top:"45%",left:"50%"}}role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    ):(
                      <>
                      {user.open &&
                (<MDBContainer id="alert" style={{zIndex:21,position:'relative',width:'fit-content'}}>
                  <MDBAlert color="success"   >
                  <strong>Success</strong> Your theme is updated.
                </MDBAlert>
                </MDBContainer>)
             } 
             <MDBRow style={{marginTop:100}}>
           <MDBCol>
               <div className="datas" >
                  <MDBTypography tag="h4" variant="h4-responsive" style={{display:"inline-block",fontWeight:'bold'}}>My Bio Link:</MDBTypography>
                        <Link to={`/admin/${profile.userhandle}`} target="_blank" rel="noopener noreferrer"className="link" ><strong>{window.location.origin}/admin/{profile.userhandle}</strong></Link>
          </div>
          </MDBCol>
             </MDBRow>
             
                        <MDBRow>
                           <MDBCol md="6" className="mx-auto " >
                                 <MDBCard style={{marginTop:15,marginBottom:12}}>
                               
                                       <MDBCardBody className="mx-4 d-flex flex-column " >
                                        
                                       <div className="mb-3 mx-auto">
                                         {profile.url ?(
                                           <img src={profile.url} style={{width:150}} className="img-fluid z-depth-1 rounded-circle" alt="" />
                                         ):(
                                          <img src={Noimg} style={{width:150}} className="img-fluid z-depth-1 rounded-circle" alt="" />
                                         )}
            
            
          </div>
          <div className="text-center">
                                      <input type="file" id="imagefile" onChange={this.handlechange} hidden="hidden"/>
                                   
                                      <MDBIcon id="icon"  icon="pencil-alt" onClick={this.editimage} />
                                  
                                 
                                      </div>      {errorimage && (
                    <div className="text-center mt-2 " style={{marginBottom:-5}}>
                      <MDBTypography className="text-danger">
                        {errorimage}
                      </MDBTypography>
                    </div>
                  )}
                <hr style={{width:187}}></hr>
                <div className="text-center mt-2 " style={{marginBottom:-5}}>
                   <MDBTypography variant="h2" tag="h2"><b>Theme</b></MDBTypography>
                   <Theme/>
                       </div>         
                                           </MDBCardBody>
                                           </MDBCard>

                            </MDBCol>
                        </MDBRow></>
                    )
                }
            </div>
        )
    }
}

Settings.propTypes={
  
     auth:PropTypes.object.isRequired
 }
 
 const mapstatetoprops=state=>({
   auth:state.firebase.auth, profile:state.firebase.profile,user:state.user
 })
 
 export default connect(mapstatetoprops,{uploadimage})(Settings)
