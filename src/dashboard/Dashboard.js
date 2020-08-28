import React from "react";
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
import {connect} from 'react-redux'
import '../styles/settings.css'
import PropTypes from 'prop-types'

import '../styles/Link.css'
import {Redirect,Link} from 'react-router-dom'
import {setlink} from '../redux/actions/linkaction'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {validatelink} from '../components/extras'

class dashboard extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
           title:'',
           link:"",
           error:{},
           open:false,
           uplink:""
         
        }
      }
      handlesubmit =event=>{
        event.preventDefault()
        event.target.className += " was-validated";
        let link
        if (this.state.link.substring(0,8)!=="https://" && this.state.link.includes('www.') || this.state.link.substring(0,7)!=="http://"  && this.state.link.includes('www.')){
          link=`https://${this.state.link}`
        }
        else if (this.state.link.substring(0,12)!=="https://www." || this.state.link.substring(0,11)!=="http://www."){
          link=`https://www.${this.state.link}`
        }
        else {
          link=this.state.link
        }
    
        const linkdata={
          title:this.state.title,
          link:link
        }
        let errors=validatelink(linkdata).errors
       let valid=validatelink(linkdata).valid
       if (!valid){
        this.setState({
          error:errors
        })
       }
       else {
        this.props.setlink(this.props.auth.uid,linkdata)}
      
        
      }
      componentDidMount(){
        document.body.style.backgroundColor="white"
            }
    
    handle = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({open:false})
      }
      
      handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.link.errors.linkerror){
          this.setState({error:nextProps.link.errors.linkerror})
      }
      if (!nextProps.link.errors.linkerror && !nextProps.link.loadingdata){
        this.setState({
          title:"",link:"",error:{},open:nextProps.link.open
        })
       
      }
    }
  render() {
    const {auth,link,profile}=this.props
    const {error}=this.state
   
  if (!auth.uid)  return<Redirect to="/"></Redirect>
    const smallStyle = { fontSize: "0.8rem" };
    return (<>
    {link.open &&
      (<MDBContainer id="alert" style={{zIndex:21,position:'relative',width:'fit-content'}}>
        <MDBAlert color="success"   >
        <strong>Success</strong> Your link is added into your linkzone
      </MDBAlert>
      </MDBContainer>)
   }
   <MDBRow style={{marginTop:100,minWidth:'fit-content'}}>
           <MDBCol>
               <div className="datas" >
                  <MDBTypography tag="h4" variant="h4-responsive" style={{display:"inline-block",fontWeight:'bold'}}>My Bio Link:</MDBTypography>
                        <Link to={`/admin/${profile.userhandle}`} target="_blank" rel="noopener noreferrer"className="link" ><strong>{window.location.origin}/admin/{profile.userhandle}</strong></Link>
          </div>
          </MDBCol>
             </MDBRow>
      <MDBRow style={{minWidth:'fit-content'}}>
        <MDBCol md="6" className="mx-auto " >
          <MDBCard style={{margin:15,minWidth:262}}>
            <MDBCardBody className="mx-4" >
              <form
                className="needs-validation"
                onSubmit={this.handlesubmit}
                noValidate
              >
                <p className="h3 text-center mb-4">Add Link</p>
                <div className="grey-text">
                  <MDBInput
                    style={{ marginTop: "2.5rem" }}
                    value={this.state.title}
                    name="title"
                    required
                    onChange={this.handleChange}
                    label="Title"
                    icon="pen"
                    group
                   
                  >
                    { error.title && <div className="invalid-feedback text-center d-block">
                      {error.title}
                    </div>}
                  </MDBInput>
                  <MDBInput
                    style={{ marginTop: "2.5rem" }}
                    value={this.state.link}
                    required
                    name="link"
                    onChange={this.handleChange}
                    label="Link"
                    icon="link"
                    group
                    type="url"
                  >
                    
                    
                    
                        <div className="invalid-feedback text-center">
                        {error.link}
                      </div>
                      
                    
                  </MDBInput>
                </div>
               
                {link.errors.linkerror && (
                  <div className="text-center">
                    <MDBTypography className="text-danger">
                      {link.errors.linkerror}
                    </MDBTypography>
                  </div>
                )}

                <div className="text-center mx-auto pt-3 mb-3">
                  <MDBBtn
                    type="submit"
                    style={{ borderRadius: "50px", fontSize: "16px" ,minWidth:'fit-content'}}
                    gradient="blue"
                    rounded
                    className="btn-block w-50 z-depth-1a"
                   disabled={link.loadingdata}
                  >
                    Add Link
                    {link.loadingdata && (
                        <div
                          className="spinner-border text-center text-danger"
                          style={{
                            position: "absolute",
                            left: "45%",
                            bottom: "15%",
                          }}
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      )}
                    
                  </MDBBtn>
                </div>
               
                  
              </form>
            </MDBCardBody>
            {/* <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p
                className="grey-text d-flex justify-content-end"
                style={smallStyle}
              >
                Already a member?{" "}
                <a href="#!" className="blue-text ml-1">
                  {" "}
                  Sign In
                </a>
              </p>
            </MDBModalFooter> */}
          </MDBCard>
        </MDBCol>
      </MDBRow></>
    );
  }
}

dashboard.propTypes={
   
     auth:PropTypes.object.isRequired,
     setlink:PropTypes.func.isRequired,
     profile:PropTypes.object.isRequired,
 }
 
 const mapstatetoprops=state=>(

  {
   auth:state.firebase.auth,
   link:state.link,
   profile:state.firebase.profile
 })
 
 export default compose(connect(mapstatetoprops,{setlink}),firestoreConnect([{collection:"users"}]))(dashboard)
