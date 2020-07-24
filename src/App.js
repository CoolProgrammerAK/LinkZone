import React,{Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Navbar from './components/navbar'
import Signup from './components/signup'
import Login from './components/login'
import BioLink from './dashboard/BioLink'
import './App.css'

import Home from './components/home'
//import firebase from './services/firebase'
//import {toast ,ToastContainer} from 'react-toastify'
import Link from './dashboard/dashboard'
import Settings from './dashboard/settings'
import Edit from './dashboard/edit'
import Logout from './dashboard/logout'
const theme = createMuiTheme({
palette: {
      primary: {
        light: '#33c9dc',
        main: '#00bcd4',
        dark: '#008394',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ff6333',
        main: '#ff3d00',
        dark: '#b22a00',
        contrastText: '#fff'
      }
    ,
  },
})
class App extends Component {
  
   
  render() {
    return ( <>
     
       
        <BrowserRouter>
        <Switch>
         <BioRoute path="/admin/:userhandle"exact component={BioLink} ></BioRoute>
         
         
            
              
             
              
              <PublicRoute path="/" exact component={Home}></PublicRoute>
                <PublicRoute path="/login" exact component={Login}></PublicRoute>
                <PublicRoute path="/signup"exact component={Signup}></PublicRoute>
                <PublicRoute path="/admin" exact component={Link}></PublicRoute>
                <PublicRoute path="/settings" exact component={Settings}></PublicRoute>
                <PublicRoute path="/edit"exact component={Edit}></PublicRoute>
                <PublicRoute path="/logout"exact component={Logout} ></PublicRoute>
                </Switch>
    
            
            
              
            </BrowserRouter>
         
         
         
        
      
      
      </>
    )
}
}
export default App

const PublicRoute=({component:Component,...rest})=>{
  return (
    <Route {...rest} component={(props)=>(
      <ThemeProvider theme={theme}>
      <Navbar/>
      <div className="container">
           
           <Component {...props}></Component>

      </div>
      <footer style={{fontSize:19,position:"fixed",bottom:1,left:"38%",border:"2px solid black",padding:"9px 12px 9px 10px",borderRadius:6,color:"black",  backgroundImage: "linear-gradient(to bottom right,red,yellow)"}}>For any queries Email  at <a style={{color:"black",textDecoration:"underline"}}href="http://www.gmail.com">avineykhetarpal01@gmail.com</a></footer>
      </ThemeProvider>

    )}/>
  )
}

const BioRoute=({component:Component,...rest})=>{
  return (
    <Route {...rest} component={(props)=>(
     
           <Component {...props}></Component>

      
     

    )}/>
  )
}