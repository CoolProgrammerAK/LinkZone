import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 import '../styles/notfound.css'
 import Noimg from "../pictures/404.svg";
class error extends Component {

    componentDidMount(){
        document.body.style.backgroundColor="#222"
      }
      render(){
      return (<>
        <div id='notfound'>
        <div className='notfound'>
          <div className='notfound-404'>
            <img id="imgerror" src={Noimg}></img>
          </div>
          <p id="connect">{"Connection Lost"}</p>
          <p id="detail">{"Looks like the page you are looking to visit doesn't exist."
         }</p>
          <p id="detail">{"Please check the url and try again."}</p>
          <Link to="/">Home page</Link>
        </div>
      </div></>
      )
    }
}

export default error

