import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {connect} from 'react-redux'
;
import CircularProgress from '@material-ui/core/CircularProgress'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter'
import './theme.css'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import Grid  from '@material-ui/core/Grid'
import Linkcontainer from './linkcontainer'
const styles={
    form: {
        textAlign: 'center',top:0,left:0

      },
      user:{
        fontWeight:'bold',
        fontSize:21,margin:12
      },
      icons:{
        left:650,
        position:'fixed',
        bottom:15
        
      },
      profile_image:{
        width: 170,
        height: 170,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius:'50%',
        marginTop:13
        
      }
}
class BioLink extends Component {
    // shouldComponentUpdate(){
    //     document.location.title(`${this.props.profile.userhandle} LinkZone`)
    //     return true
    // }
    render() {
        const {profile,auth,classes,links}=this.props
       
        if (!auth.uid) return <Redirect to="/"/>
        
       if (profile.userhandle && links) return (
          
            <DocumentTitle title={`${profile.userhandle} LinkZone`}>
            <div className={classes.form}>

           {(profile.theme==="Default") && (
              <div className="theme-0 default ">

                <img src={profile.url} alt="" className={classes.profile_image}></img>
                <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 {links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer first="dot text" key={link.id} links={link}/> ))}
                 <div className={classes.icons}>
                 <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Whatsapp"><IconButton  >
                          <WhatsAppIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Instagram"><IconButton  >
                          <InstagramIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Facebook"><IconButton  >
                          <FacebookIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Twitter"><IconButton  >
                          <TwitterIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="YouTube"><IconButton  >
                          <YouTubeIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                    
              </div></div>
           )
           }
           {(profile.theme==="Light Green theme") && (
              <div className="theme1 default ">

                <img src={profile.url} alt="" className={classes.profile_image}></img>
                <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 {links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer first="dot text" key={link.id} links={link}/> ))}
                 <div className={classes.icons}>
                 <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Whatsapp"><IconButton  >
                          <WhatsAppIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Instagram"><IconButton  >
                          <InstagramIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Facebook"><IconButton  >
                          <FacebookIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Twitter"><IconButton  >
                          <TwitterIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="YouTube"><IconButton  >
                          <YouTubeIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                    
              </div></div>
           )
           }
           {(profile.theme==="Dark theme") && (
              <div className="theme2 default ">

                <img src={profile.url} alt="" className={classes.profile_image}></img>
                <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 {links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer first="dot text" key={link.id} links={link}/> ))}
                 <div className={classes.icons} >
                 <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Whatsapp"><IconButton  >
                          <WhatsAppIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Instagram"><IconButton  >
                          <InstagramIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Facebook"><IconButton  >
                          <FacebookIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Twitter"><IconButton  >
                          <TwitterIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="YouTube"><IconButton  >
                          <YouTubeIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                    
              </div></div>
           )
           }
           {(profile.theme==="Greenish white theme") && (
              <div className="theme3 default ">

                <img src={profile.url} alt="" className={classes.profile_image}></img>
                <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 {links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer first="dot text" key={link.id} links={link}/> ))}
                 <div className={classes.icons}>
                 <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Whatsapp"><IconButton  >
                          <WhatsAppIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Instagram"><IconButton  >
                          <InstagramIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Facebook"><IconButton  >
                          <FacebookIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Twitter"><IconButton  >
                          <TwitterIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="YouTube"><IconButton  >
                          <YouTubeIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                    
              </div></div>
           )
           }
           {(profile.theme==="Black white theme") && (
              <div className="theme4 default ">

                <img src={profile.url} alt="" className={classes.profile_image}></img>
                <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 {links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer first="dot text" key={link.id} links={link}/> ))}
                 <div className={classes.icons} >
                 <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Whatsapp"><IconButton  >
                          <WhatsAppIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Instagram"><IconButton  >
                          <InstagramIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Facebook"><IconButton  >
                          <FacebookIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Twitter"><IconButton  >
                          <TwitterIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="YouTube"><IconButton  >
                          <YouTubeIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                    
              </div></div>
           )
           }
           {(profile.theme==="Gradient theme") && (
              <div className="theme5 default ">

                <img src={profile.url} alt="" className={classes.profile_image}></img>
                <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 {links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer first="dot text" key={link.id} links={link}/> ))}
                 <div className={classes.icons}>
                 <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Whatsapp"><IconButton  >
                          <WhatsAppIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Instagram"><IconButton  >
                          <InstagramIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Facebook"><IconButton  >
                          <FacebookIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Twitter"><IconButton  >
                          <TwitterIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="YouTube"><IconButton  >
                          <YouTubeIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                    
              </div></div>
           )
           }
           {(profile.theme==="Purpish white theme") && (
              <div className="theme6 default ">

                <img src={profile.url} alt="" className={classes.profile_image}></img>
                <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 {links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer first="dot text" key={link.id} links={link}/> ))}
                 <div className={classes.icons} >
                 <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Whatsapp"><IconButton  >
                          <WhatsAppIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Instagram"><IconButton  >
                          <InstagramIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Facebook"><IconButton  >
                          <FacebookIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Twitter"><IconButton  >
                          <TwitterIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="YouTube"><IconButton  >
                          <YouTubeIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                    
              </div></div>
           )
           }
           {(profile.theme==="Dark Bluish theme") && (
              <div className="theme7 default ">

                <img src={profile.url} alt="" className={classes.profile_image}></img>
                <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 {links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer first="dot text" key={link.id} links={link}/> ))}
                 <div className={classes.icons} >
                 <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Whatsapp"><IconButton  >
                          <WhatsAppIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Instagram"><IconButton  >
                          <InstagramIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Facebook"><IconButton  >
                          <FacebookIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Twitter"><IconButton  >
                          <TwitterIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="YouTube"><IconButton  >
                          <YouTubeIcon style={{padding:3,color:'white'}}size={30}  />
                         </IconButton></Tooltip></a>
                    
              </div></div>
           )
           }
           {(profile.theme==="Skyish theme") && (
              <div className="theme8 default ">

                <img src={profile.url} alt="" className={classes.profile_image}></img>
                <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 {links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer first="dot text" key={link.id} links={link}/> ))}
                 <div className={classes.icons}>
                 <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Whatsapp"><IconButton  >
                          <WhatsAppIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Instagram"><IconButton  >
                          <InstagramIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Facebook"><IconButton  >
                          <FacebookIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Twitter"><IconButton  >
                          <TwitterIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="YouTube"><IconButton  >
                          <YouTubeIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                    
              </div></div>
           )
           }
           {(profile.theme==="Sunset theme") && (
              <div className="theme10 default ">

                <img src={profile.url} alt="" className={classes.profile_image}></img>
                <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 {links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer first="dot text" key={link.id} links={link}/> ))}
                 <div className={classes.icons}>
                 <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Whatsapp"><IconButton  >
                          <WhatsAppIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Instagram"><IconButton  >
                          <InstagramIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Facebook"><IconButton  >
                          <FacebookIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Twitter"><IconButton  >
                          <TwitterIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="YouTube"><IconButton  >
                          <YouTubeIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                    
              </div></div>
           )
           }
           {(profile.theme==="Insta theme") && (
              <div className="theme9 default ">

                <img src={profile.url} alt="" className={classes.profile_image}></img>
                <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 {links && ( links.filter(link=>link.uid===profile.uid).map(link=><Linkcontainer first="dot text" key={link.id} links={link}/> ))}
                 <div className={classes.icons}>
                 <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Whatsapp"><IconButton  >
                          <WhatsAppIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Instagram"><IconButton  >
                          <InstagramIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Facebook"><IconButton  >
                          <FacebookIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="Twitter"><IconButton  >
                          <TwitterIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                         <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" ><Tooltip title="YouTube"><IconButton  >
                          <YouTubeIcon style={{padding:3,color:'black'}}size={30}  />
                         </IconButton></Tooltip></a>
                    
              </div></div>
           )
           }
           </div>
            </DocumentTitle>
        )
        else return(
            <CircularProgress size={90} style={{position:'absolute',top:'40%',left:750}}/>
        )
    }
}
BioLink.propTypes={
    classes:PropTypes.object.isRequired,
     auth:PropTypes.object.isRequired,
    
     profile:PropTypes.object.isRequired,
 }
 
 const mapstatetoprops=state=>(
 
  {
      links:state.firestore.ordered.links,
   auth:state.firebase.auth,
   user:state.user,
   profile:state.firebase.profile
 })
export default compose(connect(mapstatetoprops),firestoreConnect([{collection:"links",orderBy:['time','desc']}]))(withStyles(styles)(BioLink))







