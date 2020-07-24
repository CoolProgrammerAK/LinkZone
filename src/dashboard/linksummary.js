import Card from '@material-ui/core/Card';
import {connect} from 'react-redux'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import {deletelink} from '../redux/actions/linkaction'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {withStyles} from '@material-ui/core/styles'
import Linkdialog from './linkdialog';
const styles={
  
    root:{
      minWidth:240,
      width:900,
      margin:4,
      height:100,
      marginLeft:140,
      border:'1px solid black'
    },
    title: {
      fontSize: 19
    }
  }
class Linksummary extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open:false
    }
  }
  handleopen=()=>{
    this.setState({
      open:true
    })
  }
  handleclose=()=>{
    this.setState({
      open:false
    })
  }
  handlesubmit=(e)=>{
    e.preventDefault()
    this.props.deletelink(this.props.links.id)
    this.setState({
      open:false
    })
  }
    render() {
        const {links,classes,link,auth}=this.props
        
      if (!auth.uid)  return<Redirect to="/"></Redirect>
        return (
          <>
           <Snackbar open={link.open_del} autoHideDuration={3000} style={{
            position:'absolute',left:'120',top:-500,
          }} >
          <Alert variant="filled" severity="success"  style={{fontSize:22}} >
            Link is successfully deleted from your LinkZone!!
          </Alert>
        </Snackbar>
            <Card className={classes.root} variant="outlined">
            <CardContent>
            <Typography className={classes.title} style={{textAlign:"center",fontWeight:"bold"}}  >
                {links.title}
              </Typography>
              <hr style={{width:600}}/>
              <Typography className={classes.title} style={{textAlign:"center"}}  >
                {links.links}
              </Typography>
              <Tooltip title="delete">
              <IconButton onClick={this.handleopen} style={{float:'right',marginTop:-62,marginRight:10}}>
                    <DeleteIcon />
              </IconButton></Tooltip>   <Linkdialog title={links.title} links={links.links} id={links.id}></Linkdialog>
              </CardContent>
              </Card>
              <Dialog
        open={this.state.open}
        onClose={this.handleclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{fontWeight:'bold'}}>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{color:'black'}}>
            Are you sure you want to delete this link?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleclose} color="primary">
            Close
          </Button>
          <Button onClick={this.handlesubmit} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
              
       
              
              </>
        )
    }
}
Linksummary.propTypes={
    classes:PropTypes.object.isRequired
} 
const mapstatetoprops=state=>({
  auth:state.firebase.auth,
  link:state.link
})

export default connect(mapstatetoprops,{deletelink})(withStyles(styles)(Linksummary))
