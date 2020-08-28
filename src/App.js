import React, { Component } from 'react';

import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Notfound from './components/Notfound'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import Reset from './components/Reset'
import BioLink from './dashboard/Biolink'

import Home from './components/Home'
import Link from './dashboard/Dashboard'
import Settings from './dashboard/Settings'
import Edit from './dashboard/Edit'
import Logout from './dashboard/Logout'
import {connect} from 'react-redux'
class App extends Component {
  
  
  render() {
          return (
    
            <BrowserRouter>
            <Switch>
              
              
             <BioRoute path={`/admin/${this.props.profile.userhandle}`} exact component={BioLink} ></BioRoute>
         
             
              
                
                  
                 
                  
                  <PublicRoute path="/" exact component={Home}></PublicRoute>
                    <PublicRoute path="/login" exact component={Login}></PublicRoute>
                    <PublicRoute path="/login/resetpassword" exact component={Reset}></PublicRoute>
                    <PublicRoute path="/signup"exact component={Signup}></PublicRoute>
                    <PublicRoute path="/admin" exact component={Link}></PublicRoute>
                    <PublicRoute path="/settings" exact component={Settings}></PublicRoute>
                    <PublicRoute path="/edit"exact component={Edit}></PublicRoute>
                    <PublicRoute path="/logout"exact component={Logout} ></PublicRoute>
                    <BioRoute  component={Notfound} ></BioRoute>
                    </Switch>
        
                
                
                  
                </BrowserRouter>
  );
}
}

const mapstatetoprops=state=>({
  profile:state.firebase.profile
})
export default connect(mapstatetoprops)(App);
const PublicRoute=({component:Component,...rest})=>{
  return (
    <Route {...rest} component={(props)=>(
      <>
     <Navbar/>
      <div className="container">
           
           <Component {...props}></Component>

      </div>
     
   </>

    )}/>
  )
}

const BioRoute=({component:Component,...rest})=>{
  return (
    <Route {...rest} component={(props)=>(
     <>
           <div className="container">
           
           <Component {...props}></Component>

      </div>
              
          
     </>

    )}/>
  )
}