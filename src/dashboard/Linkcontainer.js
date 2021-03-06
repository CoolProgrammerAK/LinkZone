import React, { Component } from 'react'
import '../styles/Theme.css'
import {MDBBtn} from 'mdbreact'
 class linkcontainer extends Component {
    render() {
        const {links,first,color}=this.props
       if (links) return (
            <div>
                <a href={links.links}  target="_blank" rel="noopener noreferrer">
        <MDBBtn color={color} className={first} style={{textAlign:'center',width:"35%",margin:10,padding:10,fontSize:17,borderRadius:"25px 25px 25px 25px",minWidth:'fit-content'}} >{links.title}</MDBBtn>
        
          </a>
            </div>
          
             
        )
        else return (
            <p style={{fontSize:321,alignContent:'center',display:'flex',justifyContent:'center'}}>No links found</p>)
        
    }
}

export default linkcontainer
