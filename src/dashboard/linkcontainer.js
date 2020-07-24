import React, { Component } from 'react'
import './theme.css'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
const styles={
root:{
    minWidth:240,
      width:900,
      margin:4,
      height:100
}
}
 class linkcontainer extends Component {
    render() {
        const {links,classes,first}=this.props
       if (links) return (
            <div>
                <a href={links.links} target="_blank" rel="noopener noreferrer">
        <Button className={first} style={{textAlign:'center',width:"35%",margin:10,padding:10,fontSize:17,borderRadius:"25px 25px 25px 25px"}} >{links.title}</Button>
          </a>
            </div>
          
             
        )
        else return (
            <p style={{fontSize:321,alignContent:'center',display:'flex',justifyContent:'center'}}>No links found</p>)
        
    }
}

export default withStyles(styles)(linkcontainer)
