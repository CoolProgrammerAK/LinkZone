import React, { Component } from 'react'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {updatedata} from '../redux/actions/linkaction'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import {connect} from 'react-redux'
import {validatelink} from '../components/extras'
const styles={
    textField: {
        margin: '10px auto 10px auto'
      },
      button: {
        marginTop: 20,
        position: 'relative'
      },errorhandle: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
      }
}
 class linkdialog extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           open:false,title:'',link:"",error:{}
        }
      }
      handleopen=()=>{
        this.setState({
          open:true
        })
      }
      onchange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
      handleclose=()=>{
        this.setState({
          open:false
        })
        this.setState({
          error:{}
        })
      }
      componentDidMount(){
          this.setdatas()
      }
      setdatas=()=>{
          this.setState({
              title:this.props.title,
              link:this.props.links
          })
      }
      handlesubmit=(e)=>{
        e.preventDefault()
        let data={
            title:this.state.title,
            link:this.state.link
        }
        let errors=validatelink(data).errors
        let valid=validatelink(data).valid
   if (!valid){
    this.setState({
      error:errors
    })
   }
   else {
    this.props.updatedata(this.props.id,data)
    this.handleclose()
  }
        
      }
  componentWillReceiveProps(nextProps){
        if(nextProps.link.errors.update){
            this.setState({error:nextProps.link.errors.update})
        }}
        
    render() {
        const {classes,link}=this.props
       const {error}=this.state
        return (
            <>
            <Tooltip  title="Edit">
              <IconButton  onClick={this.handleopen} style={{float:'right',marginTop:-62,marginRight:54}}>
                    <EditIcon />
              </IconButton></Tooltip>
              <Dialog open={this.state.open} onClose={this.handleclose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit your link</DialogTitle>
        <DialogContent>
          
        <form>
                            <TextField
                            name="title"
                            type="text"
                            label="Enter title"
                            helperText={error.title}
                            error={error.title? true : false}
                            fullWidth
                            className={classes.textField}
                            value={this.state.title}
                            onChange={this.onchange}
                            >
                                
                            </TextField>
                            <TextField
                            name="link"
                            type="url"
                            label="Enter link"
                            helperText={error.link}
               error={error.link ? true : false}
                            fullWidth
                            className={classes.textField}
                            value={this.state.link}
                            onChange={this.onchange}
                            >
                                
                            </TextField>
                            {link.errors.update && (<Typography  variant="body2" className={classes.errorhandle}>{link.errors.update}</Typography>)}
                            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleclose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handlesubmit} color="secondary">
           Save
          </Button>
        </DialogActions>
      </Dialog>
            </>
        )
    }
}
linkdialog.propTypes={
    updatedata:PropTypes.func.isRequired,
    classes:PropTypes.object.isRequired
    }
    const mapstatetoprops=state=>({
        link:state.link
    })
    const mapactiontoprops={
        updatedata
    }
    
    export default connect(mapstatetoprops,mapactiontoprops)(withStyles(styles)(linkdialog))
