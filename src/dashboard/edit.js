import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import {compose} from 'redux'
import {withStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import Linksummary from './linksummary'
const styles={
  
  root:{
    minWidth:300
  },
  title: {
    fontSize: 19,
  }
}
class edit extends Component {
 
  hostings=()=>{
    window.location.reload()
    return ( (( this.props.links.filter(link=>link.uid===this.props.auth.uid)).length)==0)
      
    }
    render() {
        const {auth,links,profile}=this.props
        // const hostings=()=>{
        //   window.location.reload()
        //   return ( (( links.filter(link=>link.uid===auth.uid)).length)==0)
            
        //   }
        
      
        if (!auth.uid)  return<Redirect to="/"></Redirect>
        //if ( auth.uid && !this.props.profile.userhandle) return <Redirect to="/signup"></Redirect>
      
        if (links) return (
          <div>{(!(profile.uid) && !links)?(<CircularProgress size={90} style={{position:'absolute',top:'40%',left:750}} />):(((links.filter(link=>link.uid===this.props.auth.uid)).length)==0 ?
            (<p style={{fontSize:32,alignContent:'center',display:'flex',justifyContent:'center'}}>No links found</p>):
          
           ( links.filter(link=>link.uid===profile.uid).map(link=>{
             return<Linksummary links={link} key={link.id}></Linksummary>
            })))}
         
            </div>
        )
        else return(
          <CircularProgress size={90} style={{position:'absolute',top:'40%',left:750}}/>
      )
    }
}
edit.propTypes={
 
    auth:PropTypes.object.isRequired
}

const mapstatetoprops=state=>(

  {
    links:state.firestore.ordered.links,
  auth:state.firebase.auth,
  profile:state.firebase.profile
})

export default compose(connect(mapstatetoprops),firestoreConnect([{collection:"links",orderBy:['time','desc']}]))(withStyles(styles)(edit))

