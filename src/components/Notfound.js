import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import '../styles/notfound.css'
import { Component } from "react";
class JumbotronPage extends Component {

  componentDidMount(){
    document.body.style.backgroundColor="#222"
  }
  render(){
  return (<>
    <div id='notfound'>
    <div className='notfound'>
      <div className='notfound-404'>
        <h1>
          4<span>0</span>4
        </h1>
      </div>
      <p>The page you are looking for cannot be found.</p>
      <a href='/'>home page</a>
    </div>
  </div></>
  )
}}

export default JumbotronPage;

