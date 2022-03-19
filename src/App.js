import React, { Component } from 'react';

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Notfound from './components/Notfound'
import Signup from './components/Signup'
import Login from './components/Login'
import Reset from './components/Reset'
import BioLink from './dashboard/Biolink'
import ToastContainer from './toast/toastContainer'
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import Home from './components/Home'
import Link from './dashboard/Dashboard'
import Settings from './dashboard/Settings'
import Edit from './dashboard/Edit'
import Logout from './dashboard/Logout'
import {connect} from 'react-redux'
class App extends Component {
  
  
  render() {
          return (
          

                 
                  <div className="container-fluid" style={{padding:0}}>
                       
                     
                       <ToastContainer />
                       <BrowserRouter>
                    <Switch>
                      
                    
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/login/resetpassword" exact component={Reset}></Route>
                    <Route path="/signup"exact component={Signup}></Route>
                    <Route path="/admin" exact component={Link}></Route>
                    <Route path="/settings" exact component={Settings}></Route>
                    <Route path="/edit"exact component={Edit}></Route>
                    <Route path="/logout"exact component={Logout} ></Route>
                    <Route path={"/:profile"} exact component={BioLink} ></Route>
                   
                    <Route  component={Notfound} ></Route>
                    </Switch>
        
                
                
                  
                </BrowserRouter>
                       
                  </div>
           
  );
}
}

const mapstatetoprops=state=>({
  profile:state.firebase.profile
})
export default connect(mapstatetoprops)(App);
// const PublicRoute=({component:Component,...rest})=>{
//   return (
//     <Route {...rest}  component={(props)=>(
//       <>
//      <Navbar/>
//      
//       <div className="container-fluid" style={{padding:0}}>
           
//            <Component {...props}></Component>

//       </div>
     
//    </>

//     )}/>
//   )
// }

// const BioRoute=({component:Component,...rest})=>{
//   return (
//     <Route {...rest} exact component={(props)=>(
//      <>
//            <div className="container">
           
//            <Component {...props}></Component>

//       </div>
              
          
//      </>

//     )}/>
//   )
// }