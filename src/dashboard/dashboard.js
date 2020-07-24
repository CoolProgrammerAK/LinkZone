import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import '../App.css'
import {Link} from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import TextField from '@material-ui/core/TextField'
import icon from '../pictures/logo1.png'
import Button from '@material-ui/core/Button'
import {setlink} from '../redux/actions/linkaction'
import CircularProgress from '@material-ui/core/CircularProgress'
import {validatelink} from '../components/extras'
const styles={
  
  add:{
    
    margin: '10px auto 70px auto'

  },button: {
    marginTop: 50,
    position: 'relative',
    fontSize:21
  },
  textField: {
    margin: '10px auto 10px auto',
    justifyContent:'center',
    width:'54%'
  },
  form:{
    textAlign:'center',
    
  },
  images:{
    width:100,
    height:100,
    objectFit:'cover',
    marginRight:-230},
    errorhandle: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: 10
    },
    progress: {
      position: 'absolute',
      color:"red"
    }
}
class dashboard extends Component {
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
    if (this.state.link.substring(0,8)!=="https://" && this.state.link.includes('www.') || this.state.link.substring(0,7)!=="http://"  && this.state.link.includes('www.')){
      this.setState({uplink:`https://${this.state.link}`})
    }
    else if (this.state.link.substring(0,12)!=="https://www." || this.state.link.substring(0,11)!=="http://www."){
      this.setState({uplink:`https://www.${this.state.link}`})
    }
    else {
        this.setState({uplink:this.state.link})
    }

    const linkdata={
      title:this.state.title,
      link:this.state.uplink
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
        const {auth,classes,link,profile}=this.props
        const {error}=this.state
       
      if (!auth.uid)  return<Redirect to="/"></Redirect>
      //if ( auth.uid && !this.props.profile.userhandle) return <Redirect to="/signup"></Redirect>
        return (
          <>
          <Snackbar open={link.open} autoHideDuration={3000} style={{
            position:'absolute',left:'120',top:-500,
          }} >
          <Alert variant="filled" severity="success"  style={{fontSize:22}} >
            New link is added to your LinkZone!!
          </Alert>
        </Snackbar>

          <Grid  className={classes.form} >
            
              <Grid item sm>
              <div style={{    width: "fit-content",
    float: "right",
    marginInlineEnd: "-98px"}}>
            <h3 style={{display:"inline-block"}}>My Bio Link:</h3>
            <a href={`${window.location.origin}/admin/${profile.userhandle}`} style={{padding: "8px 16px",marginLeft: "8px",borderRadius: 25,
    color: "#3c3c3c",textDecoration:"underline",backgroundColor: "rgb(207, 204, 204)"}} target="_blank" rel="noopener noreferrer" >{window.location.origin}/admin/{profile.userhandle}</a>
          </div>
              </Grid>
              <Grid item sm>

              <img src={icon} alt="Monkey" className={classes.images}/>
          <Typography variant="h3"  className={classes.add} style={{fontWeight:"bold",fontFamily:"Arial",color:"red",textShadow:"0px 0px 4px #0000FF"}}> 
          Add Link !!
        </Typography>
        <form noValidate onSubmit={this.handlesubmit}>
            <TextField
              id="title"
              name="title"
              type="text"
              label="Title"
              helperText={error.title}
               error={error.title? true : false}
              className={classes.textField}
              
              value={this.state.title}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="link"
              name="link"
              type="url"
              label="Link"
              className={classes.textField}
              helperText={error.link}
               error={error.link ? true : false}
              value={this.state.link}
              onChange={this.handleChange}
              fullWidth
            /><br/>
            {link.errors.linkerror && (<Typography  variant="body2" className={classes.errorhandle}>{link.errors.linkerror}</Typography>)}
            <Button variant="contained" color="primary"type="submit" className={classes.button} disabled={link.loadingdata}
            
             >
               Add this Link to your linkzone {link.loadingdata && (<CircularProgress size={30} className={classes.progress}/>)}
             </Button>
            </form>
       
        
         </Grid>
           
           <Grid item sm>
           
           </Grid>
           </Grid></>
        )
    }
}
dashboard.propTypes={
   classes:PropTypes.object.isRequired,
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

export default compose(connect(mapstatetoprops,{setlink}),firestoreConnect([{collection:"users"}]))(withStyles(styles)(dashboard))
