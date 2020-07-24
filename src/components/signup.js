import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import Grid  from '@material-ui/core/Grid'
import icon from '../pictures/logo1.png'
import {connect} from 'react-redux'
import {signUp} from '../redux/actions/useraction'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {Link,Redirect} from 'react-router-dom'
import {validatesign} from './extras'

const styles={
    typography: {
        useNextVariants: true
      },
      form: {
        textAlign: 'center'
      },
      image: {
        margin: '20px auto 20px auto'
      },
      pageTitle: {
        margin: '10px auto 10px auto'
      },
      textField: {
        margin: '10px auto 10px auto'
      },
      button: {
        marginTop: 20,
        position: 'relative'
      },
      images:{
      width:100,
      height:100,
      objectFit:'cover',
      marginRight:'2%'},

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
class signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             confirmpassword:'',
             userhandle:'',
             error:{}
        }
    }
    handlesubmit =event=>{
        event.preventDefault()
       
      
      const userdata={
          email:this.state.email,
          password:this.state.password,
          userhandle:this.state.userhandle,
          confirmpassword:this.state.confirmpassword,
          url:`https://firebasestorage.googleapis.com/v0/b/webapp-851e5.appspot.com/o/no_img.png?alt=media`
          
      }
   let errors=validatesign(userdata).errors
   let valid=validatesign(userdata).valid
      if (!valid){
       
        this.setState({
          error:errors
        })
      }
      else{
      this.props.signUp(userdata,this.props.history)

    }
    
      
}
componentWillReceiveProps(nextProps){
    if(nextProps.user.errors.signup){
        this.setState({error:nextProps.user.errors.signup})
    }
    if (!nextProps.user.errors.signup && !nextProps.user.loading){
      this.setState({
        email:"",password:"",error:{},confirmpassword:'',
        userhandle:''
      })
}}

    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render() {
        const {classes,user,auth,profile}=this.props
        const {error}=this.state
      
       
         if (auth.uid )  return<Redirect to="/admin"></Redirect>
        return (
           
            <Grid container className={classes.form}>
            <Grid item sm></Grid>
            <Grid item sm><img src={icon} alt="Monkey" className={classes.images}/>
            <Typography variant="h3" className={classes.pagetitle}>
            Signup
            </Typography>
            <form noValidate onSubmit={this.handlesubmit}>
            <TextField
            id="email"
              name="email"
              type="email"
              label="Email"
              helperText={error.email}
                error={error.email ? true : false}
              className={classes.textField}
              
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
            id="password"
              name="password"
              type="password"
              label="Password"
              helperText={error.password}
                error={error.password ? true : false}
              className={classes.textField}
      
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              label="Confirm Password"
              className={classes.textField}
              helperText={error.confirmpassword}
                error={error.confirmpassword ? true : false}
              value={this.state.confirmpassword}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="handle"
              name="userhandle"
              type="text"
              label="UserHandle"
              className={classes.textField}
           
              helperText={error.userhandle}
                error={error.userhandle ? true : false}
              onChange={this.handleChange}
             
              value={this.state.userhandle}
              fullWidth
            />
             {user.errors.signup && (<Typography  variant="body2" className={classes.errorhandle}>{user.errors.signup}</Typography>)}
             <Button variant="contained" color="primary"type="submit" className={classes.button} disabled={user.loading}>
             Register{user.loading && (<CircularProgress size={30} className={classes.progress}/>)}
             </Button>
             <br/>
             <small>Already have an Account? Log in <Link to="/login">here</Link></small>
             </form>
            
            </Grid>
            <Grid item sm></Grid>
            </Grid>
        
        )
    }
}
signup.propTypes={
    classes:PropTypes.object.isRequired,
    signUp:PropTypes.func.isRequired,
    user:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}

const mapstatetoprops=state=>(
  
  {
  user:state.user,
  auth:state.firebase.auth,
  profile:state.firebase.profile
})


export default connect(mapstatetoprops,{signUp})(withStyles(styles)(signup))
