import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import Grid  from '@material-ui/core/Grid'
import icon from '../pictures/logo1.png'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logIn} from '../redux/actions/useraction'
import {validatelogin} from './extras'
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
class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             error:{}
        }
    }
    handlesubmit =event=>{
        event.preventDefault()
     
      const userdata={
          email:this.state.email,
          password:this.state.password
          
      }
      let errors=validatelogin(userdata).errors
   let valid=validatelogin(userdata).valid
      if (!valid){
     
        this.setState({
          error:errors
        })
      }
      else{
     this.props.logIn(userdata,this.props.history)
      
}}
    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
   componentWillReceiveProps(nextProps){
      if(nextProps.user.errors.login){
          this.setState({error:nextProps.user.errors.login})
      }
      if (!nextProps.user.errors.login && !nextProps.user.loading){
        this.setState({
          email:"",password:"",error:{}
        })
  }
  }
    
    render() {
      const {classes,user,auth}=this.props
      const {error}=this.state
      if (auth.uid)  return<Redirect to="/admin"></Redirect>
        return (
           
            <Grid container className={classes.form}>
            <Grid item sm></Grid>
            <Grid item sm><img src={icon} alt="Monkey" className={classes.images}/>
            <Typography variant="h3" className={classes.pagetitle}>
            Login
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
              className={classes.textField}
              helperText={error.password}
                error={error.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {user.errors.login && (<Typography  variant="body2" className={classes.errorhandle}>{user.errors.login}</Typography>)}
             <Button variant="contained" color="primary"type="submit" className={classes.button} disabled={user.loading}>
                Login {user.loading && (<CircularProgress size={30} className={classes.progress}/>)}
             </Button>
             <br/>
             <small>Don't have an Account? Sign up <Link to="/signup">here</Link></small>
             </form>
            
            </Grid>
            <Grid item sm></Grid>
            </Grid>
        
        )
    }
}
login.propTypes={
    classes:PropTypes.object.isRequired,
    logIn:PropTypes.func.isRequired,
    user:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}

const mapstatetoprops=state=>({
  user:state.user,auth:state.firebase.auth
})

export default connect(mapstatetoprops,{logIn})(withStyles(styles)(login))
