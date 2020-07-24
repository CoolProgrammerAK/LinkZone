import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux'
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
import withStyles from '@material-ui/core/styles/withStyles'
import Theme from './theme'
import Typography from '@material-ui/core/Typography'
import {uploadimage} from '../redux/actions/useraction'
import CircularProgress from '@material-ui/core/CircularProgress'
const styles={
  paper:{
    padding:20,
    width:400,
    marginLeft:390,
    height:700
},
profile: {
'& .image-wrapper': {
  textAlign: 'center',
  position: 'relative',
  '& button': {
    position: 'absolute',
    top: '80%',
    left: '70%'
  }
},

'& .profile-image': {
  width: 200,
  height: 200,
  objectFit: 'cover',
  maxWidth: '100%',
  borderRadius:'50%'
},
},
errorhandle: {
  color: 'red',
  fontSize: '0.8rem',
  marginTop: 10
}
}
class settings extends Component {
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
//upload=()=>{
 // const uploadTask=storage.ref(this.state.profile.userhandle)
//}
    render() {
        const {auth,classes,profile,user}=this.props
        const {errorimage}=this.state
        
      if (!auth.uid)  return<Redirect to="/"></Redirect>
        return (
          <div>{!(profile.url)? (
            <CircularProgress size={90} style={{position:'absolute',top:'40%',left:750}} />):(
              <Fragment >
          <div style={{    width: "fit-content",
    float: "right",
    marginInlineEnd: "-98px"}}>
            <h3 style={{display:"inline-block"}}>My Bio Link:</h3>
            <a href={`${window.location.origin}/admin/${profile.userhandle}`} style={{padding: "8px 16px",marginLeft: "8px",borderRadius: 25,
    color: "#3c3c3c",textDecoration:"underline",backgroundColor: "rgb(207, 204, 204)"}} target="_blank" rel="noopener noreferrer" >{window.location.origin}/admin/{profile.userhandle}</a>
          </div>
             <Paper className={classes.paper}>
                <div className={classes.profile}>
                <div className='image-wrapper'>
                        <img src={profile.url} alt="" className="profile-image"></img>
                        <input type="file" id="imagefile" onChange={this.handlechange} hidden="hidden"/>
                        <Tooltip title="Edit Profile Picture" placement="top">
                        <IconButton onClick={this.editimage}  className="button">
                            <EditIcon color="primary" />
                        </IconButton></Tooltip>
                       
                    </div>
                    {errorimage && (<Typography  variant="body2" style={{textAlign:'center',color:'red'}} className={classes.errorhandle}>{errorimage}</Typography>)}
                  </div><hr style={{width:187}}></hr>
                  {<Typography variant="h5" style={{textAlign:'center',marginTop:10,fontWeight:'bold',color:"black"}} >Theme</Typography>}
                   {<Theme></Theme>}
                  </Paper></Fragment>)}</div>
        )
    }
}
settings.propTypes={
   classes:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}

const mapstatetoprops=state=>({
  auth:state.firebase.auth, profile:state.firebase.profile,user:state.user
})

export default connect(mapstatetoprops,{uploadimage})(withStyles(styles)(settings))
