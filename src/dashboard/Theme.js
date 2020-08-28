import React, { Component,  Fragment } from 'react'
import PropTypes from 'prop-types'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {updatetheme} from '../redux/actions/useraction'
import { Link } from 'react-router-dom'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,MDBAlert,MDBContainer,
    MDBIcon,MDBTypography
  } from "mdbreact";
import {firestoreConnect} from 'react-redux-firebase'
import '../styles/Theme.css'
class Theme extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open:false,theme:this.props.profile.theme,disable:true
        }
    }
    handleOpen = () => {
        this.setState({open:true})}
        handleChange = (event) => {
           this.setState({theme:event.target.value})
           this.setState({disable:false})
         
         };
       
         handleClose = () => {
           this.setState({open:false})
         };
       handlesubmit=e=>{
         e.preventDefault()
         this.props.updatetheme(this.state.theme)
         this.setState({disable:true})
   
   
       }
    render() {
        const {profile,classes,user:{open}}=this.props
        console.log(profile)
        return (<Fragment>
            
               <div style={{marginTop:15,marginBottom:13,display:'flex'}}>
        <label style={{fontSize:20}}>Select theme:  </label>
        <select className="browser-default custom-select" style={{    width: "39%",
    marginLeft: "10%"}} value={this.state.theme} onChange={this.handleChange}>
          <option value="Default theme">Default theme</option>
          <option value="Light Green theme">Light Green theme</option>
          <option value="Dark theme">Dark theme</option>
          <option value="Greenish white theme">Greenish white theme</option>
          <option value="Black white theme">Black white theme</option>
          <option value="Gradient theme">Gradient theme</option>
      
          <option value="Purpish white theme">Purpish white theme</option>
          <option value="Dark bluish theme">Bluish theme</option>
          <option value="Skyish theme">Skyish theme</option>
          <option value="Sunset theme">Sunset theme</option>
          <option value="Insta theme">Insta theme</option>
        </select>
        </div> 
        <MDBBtn color="info" disabled={this.state.disable} style={{float:"right"}} onClick={this.handlesubmit}>Upload</MDBBtn>
        {(this.state.theme)==="Light Green theme"&&
                 <div className="theme1 theme ">
                 <img src={profile.url} alt="" className="rounded-circle" style={{width:110}}></img>
                 <MDBTypography className="mt-2" >@{profile.userhandle}</MDBTypography>
                 <MDBBtn className="dot text" color="elegant" component={Link} to="/settings" style={{textAlign:'center',borderRadius:5}}>XXXXDemoXXX</MDBBtn>
                 <br/><div id="icons">
                 <MDBIcon id="iconp" fab icon="whatsapp" size={20}/>
                 <MDBIcon id="iconp" fab icon="instagram" size={20} />
                 
                 <MDBIcon id="iconp" fab icon="twitter" size={20} />
                 <MDBIcon id="iconp" fab icon="facebook-f" size={20} />
                 <MDBIcon id="iconp" fab icon="youtube"  size={20}/>
                 </div>
               </div>
             }
              {(this.state.theme)==="Dark theme"&&
                 <div className="theme2 theme ">
          <img src={profile.url} alt="" className="rounded-circle" style={{width:110}}></img>
                 <MDBTypography className="mt-2" >@{profile.userhandle}</MDBTypography>
                 <MDBBtn className="dot text" color="white"  component={Link} to="/settings" style={{textAlign:'center',color:'black',borderRadius:5}}>XXXXDemoXXX</MDBBtn>
                 <br/><div id="icons">
                 <MDBIcon id="iconp" fab icon="whatsapp" size={20}/>
                 <MDBIcon id="iconp" fab icon="instagram" size={20} />
                 
                 <MDBIcon id="iconp" fab icon="twitter" size={20} />
                 <MDBIcon id="iconp" fab icon="facebook-f" size={20} />
                 <MDBIcon id="iconp" fab icon="youtube"  size={20}/>
                 </div>
               </div>
             }
             {(this.state.theme)==="Greenish white theme"&&
                 <div className="theme3 theme ">
                 <img src={profile.url} alt="" className="rounded-circle" style={{width:110}}></img>
                 <MDBTypography className="mt-2" >@{profile.userhandle}</MDBTypography>
                 <MDBBtn className="dot text"color="white" component={Link} to="/settings" style={{textAlign:'center',color:'black',borderRadius:5}}>XXXXDemoXXX</MDBBtn>
                 <br/><div id="icons">
                 <MDBIcon id="iconp" fab icon="whatsapp" size={20}/>
                 <MDBIcon id="iconp" fab icon="instagram" size={20} />
                 
                 <MDBIcon id="iconp" fab icon="twitter" size={20} />
                 <MDBIcon id="iconp" fab icon="facebook-f" size={20} />
                 <MDBIcon id="iconp" fab icon="youtube"  size={20}/>
                 </div>
               </div>
             }
             {(this.state.theme)==="Black white theme"&&
                 <div className="theme4 theme ">
                 <img src={profile.url} alt="" className="rounded-circle" style={{width:110}}></img>
                 <MDBTypography className="mt-2" >@{profile.userhandle}</MDBTypography>
                 <MDBBtn className="dot text" color="white" component={Link} to="/settings" style={{textAlign:'center',color:'black',borderRadius:5}}>XXXXDemoXXX</MDBBtn>
                 <br/><div id="icons">
                 <MDBIcon id="iconp" fab icon="whatsapp" size={20}/>
                 <MDBIcon id="iconp" fab icon="instagram" size={20} />
                 
                 <MDBIcon id="iconp" fab icon="twitter" size={20} />
                 <MDBIcon id="iconp" fab icon="facebook-f" size={20} />
                 <MDBIcon id="iconp" fab icon="youtube"  size={20}/>
                 </div>
               </div>
             }
             {(this.state.theme)==="Gradient theme"&&
                 <div className="theme5 theme ">
                 <img src={profile.url} alt="" className="rounded-circle" style={{width:110}}></img>
                 <MDBTypography className="mt-2" >@{profile.userhandle}</MDBTypography>
                 <MDBBtn className="dot text" outlined component={Link} color="transparent" to="/settings" style={{textAlign:'center',borderRadius:5}}>XXXXDemoXXX</MDBBtn>
                 <br/><div id="icons">
                 <MDBIcon id="iconp" fab icon="whatsapp" size={20}/>
                 <MDBIcon id="iconp" fab icon="instagram" size={20} />
                 
                 <MDBIcon id="iconp" fab icon="twitter" size={20} />
                 <MDBIcon id="iconp" fab icon="facebook-f" size={20} />
                 <MDBIcon id="iconp" fab icon="youtube"  size={20}/>
                 </div>
               </div>
             }
               {(this.state.theme)==="Purpish white theme"&&
                 <div className="theme6 theme ">
                 <img src={profile.url} alt="" className="rounded-circle" style={{width:110}}></img>
                 <MDBTypography className="mt-2" >@{profile.userhandle}</MDBTypography>
                 <MDBBtn className="dot text"  outlined color="transparent" component={Link} to="/settings" style={{textAlign:'center',borderRadius:5}}>XXXXDemoXXX</MDBBtn>
                 <br/><div id="icons">
                 <MDBIcon id="iconp" fab icon="whatsapp" size={20}/>
                 <MDBIcon id="iconp" fab icon="instagram" size={20} />
                 
                 <MDBIcon id="iconp" fab icon="twitter" size={20} />
                 <MDBIcon id="iconp" fab icon="facebook-f" size={20} />
                 <MDBIcon id="iconp" fab icon="youtube"  size={20}/>
                 </div>
               </div>
             }
              {(this.state.theme)==="Dark bluish theme"&&
                 <div className="theme7 theme ">
                <img src={profile.url} alt="" className="rounded-circle" style={{width:110}}></img>
                 <MDBTypography className="mt-2" >@{profile.userhandle}</MDBTypography>
                 <MDBBtn className="dot text" outlined color="transparent" component={Link} to="/settings" style={{textAlign:'center',borderRadius:5}}>XXXXDemoXXX</MDBBtn>
                 <br/><div id="icons">
                 <MDBIcon id="iconp" fab icon="whatsapp" size={20}/>
                 <MDBIcon id="iconp" fab icon="instagram" size={20} />
                 
                 <MDBIcon id="iconp" fab icon="twitter" size={20} />
                 <MDBIcon id="iconp" fab icon="facebook-f" size={20} />
                 <MDBIcon id="iconp" fab icon="youtube"  size={20}/>
                 </div>
               </div>
             }
             {(this.state.theme)==="Sunset theme"&&
                 <div className="theme10 theme ">
                 <img src={profile.url} alt="" className="rounded-circle" style={{width:110}}></img>
                 <MDBTypography className="mt-2" >@{profile.userhandle}</MDBTypography>
                 <MDBBtn className="dot text" outlined color="transparent"component={Link} to="/settings" style={{textAlign:'center',borderRadius:5}}>XXXXDemoXXX</MDBBtn>
                 <br/><div id="icons">
                 <MDBIcon id="iconp" fab icon="whatsapp" size={20}/>
                 <MDBIcon id="iconp" fab icon="instagram" size={20} />
                 
                 <MDBIcon id="iconp" fab icon="twitter" size={20} />
                 <MDBIcon id="iconp" fab icon="facebook-f" size={20} />
                 <MDBIcon id="iconp" fab icon="youtube"  size={20}/>
                 </div>
               </div>
             }
             {(this.state.theme)==="Skyish theme"&&
                 <div className="theme8 theme ">
                 <img src={profile.url} alt="" className="rounded-circle" style={{width:110}}></img>
                 <MDBTypography className="mt-2" >@{profile.userhandle}</MDBTypography>
                 <MDBBtn className="dot text" outlined color="transparent" component={Link} to="/settings" style={{textAlign:'center',borderRadius:5}}>XXXXDemoXXX</MDBBtn>
                 <br/><div id="icons">
                 <MDBIcon id="iconp" fab icon="whatsapp" size={20}/>
                 <MDBIcon id="iconp" fab icon="instagram" size={20} />
                 
                 <MDBIcon id="iconp" fab icon="twitter" size={20} />
                 <MDBIcon id="iconp" fab icon="facebook-f" size={20} />
                 <MDBIcon id="iconp" fab icon="youtube"  size={20}/>
                 </div>
               </div>
             }
             {(this.state.theme)==="Insta theme"&&
                 <div className="theme9 theme ">
               <img src={profile.url} alt="" className="rounded-circle" style={{width:110}}></img>
                 <MDBTypography className="mt-2" >@{profile.userhandle}</MDBTypography>
                 <MDBBtn className="dot text" outlined color="transparent" component={Link} to="/settings" style={{textAlign:'center',borderRadius:5}}>XXXXDemoXXX</MDBBtn>
                 <br/><div id="icons">
                 <MDBIcon id="iconp" fab icon="whatsapp" size={20}/>
                 <MDBIcon id="iconp" fab icon="instagram" size={20} />
                 
                 <MDBIcon id="iconp" fab icon="twitter" size={20} />
                 <MDBIcon id="iconp" fab icon="facebook-f" size={20} />
                 <MDBIcon id="iconp" fab icon="youtube"  size={20}/>
                 </div>
               </div>
             }
             </Fragment>
        )
    }
}



const mapstatetoprops=state=>(

    {
      links:state.firestore.ordered.links,
    auth:state.firebase.auth,
    profile:state.firebase.profile,
    user:state.user
  })

export default compose(connect(mapstatetoprops,{updatetheme}),firestoreConnect([{collection:"users"}]))(Theme)

