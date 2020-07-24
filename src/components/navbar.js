import React, { Component } from 'react'
import {withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../pictures/logo1.png'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {signOut} from '../redux/actions/useraction'

const styles =(theme) => ({
    root:{
     marginTop:0,marginLeft:0,
   
    },
    title: {
      flexGrow: 1,

    },
    image:{
      width:100,
      height:100,
      objectFit:'cover',
      marginRight:'2%',
    },
    button:{
      fontSize:'20px',
      margin:'4px',

    }
    
  });

class navbar extends Component {
    logout=(e)=>{
      e.preventDefault()
      this.props.signOut( )
     
    }
    render() {
        const {classes,auth}=this.props
        const link=auth.uid?
        ( <>
          <Button color="inherit" className={classes.button}component={Link} to="/admin" >Links</Button>
          <Button color="inherit" component={Link} to="/edit"className={classes.button}>Edit</Button>
          <Button color="inherit"component={Link} to="/settings"className={classes.button}>Settings</Button>
          <Button color="inherit"component={Link} to="/logout"className={classes.button}  onClick={this.logout}>Logout</Button></>
        )
        :(
           <>
            <Button color="inherit" className={classes.button}component={Link} to="/" >Home</Button>
            <Button color="inherit" component={Link} to="/signup"className={classes.button}>Signup</Button>
            <Button color="inherit"component={Link} to="/login" className={classes.button}>Login</Button></>
        )
        return (
            <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:"#00008B"}}>
        <Toolbar>
          <img src={Logo} alt="Logo" className={classes.image} />
            <Typography variant="h4" className={classes.title}>
                 LinkZone
            </Typography>
            <div className="nav-container">
              {link}
              </div>
        </Toolbar>
      </AppBar></div>
        )
    }
}
navbar.propType={
    classes:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
    signOut:PropTypes.func.isRequired
}
const mapstatetoprops=state=>(
  {
    auth:state.firebase.auth
  }
  
)

export default connect(mapstatetoprops,{signOut})(withStyles(styles)(navbar))
