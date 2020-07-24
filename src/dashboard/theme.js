import React, { Component,  Fragment } from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import MenuItem from '@material-ui/core/MenuItem';
import './theme.css'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert'
import {updatetheme} from '../redux/actions/useraction'
import YouTubeIcon from '@material-ui/icons/YouTube';
const styles={
    profile_image:{
        width: 100,
  height: 100,
  objectFit: 'cover',
  maxWidth: '100%',
  borderRadius:'50%',
  position:'relative',
  left:'36%',
  top:6
    },
    user:{
        left:'43%',
        top:6,
  position:'relative',fontWeight:'bold'
    },
    icons:{
      position:'relative',
  left:'36%',
  top:60
    }
}
export class theme extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          open:false,theme:this.props.profile.theme,disable:true
     }
 }
 
     handleChange = (event) => {
        this.setState({theme:event.target.value})
        this.setState({disable:false})
      
      };
    
      handleClose = () => {
        this.setState({open:false})
      };
    handlesubmit=e=>{
      e.preventDefault()
      this.props.updatetheme(this.state.theme)
      this.setState({disable:true})


    }
    // componentWillReceiveProps(nextprops)
    // {
    //   if (this.state.theme===nextprops.profile.theme){
    //     this.setState({disable:true})
    //   }
    //   if (this.state.theme!==nextprops.profile.theme){
    //     this.setState({disable:false})
    //   }
    // }
      handleOpen = () => {
        this.setState({open:true})}
    render() {
       
   
            const {profile,classes,user:{open}}=this.props
            

        return (<>
         <Snackbar open={open} autoHideDuration={3000} style={{
            position:'absolute',left:'120',top:-500,
          }} >
          <Alert variant="filled" severity="success"  style={{fontSize:22}} >
           Theme Updated Succesfully
          </Alert>
        </Snackbar>
            <div style={{marginTop:15,marginBottom:13}}>
        <label style={{fontSize:21}}>Select theme:  </label>
        <Select open={this.state.open} onClose={this.handleClose}
          onOpen={this.handleOpen}
          value={this.state.theme}
          onChange={this.handleChange} style={{marginLeft:41}}> 
            {/* <div className="theme1 active-theme">
              <div className="dot" ></div>
            </div>
            <div className="theme2"><div className="dot"></div></div>
            <div className="theme3"><div className="dot"></div></div>
            <div className="theme4"><div className="dot"></div></div>
            <div className="theme5"><div className="dot"></div></div>
            <div className="theme6"><div className="dot"></div></div>
            <div className="theme7"><div className=" dot"></div></div>
            <div className="theme8"><div className= "dot"></div></div>
            <div className="theme9"><div className="dot"></div></div> */}
            <MenuItem value="Default"><em>Default</em>
          </MenuItem>
          <MenuItem value="Light Green theme">Light Green theme</MenuItem>
          <MenuItem value="Dark theme">Dark theme</MenuItem>
          <MenuItem value="Greenish white theme">Greenish white theme</MenuItem>
          <MenuItem value="Black white theme">Black white theme</MenuItem>
          <MenuItem value="Gradient theme">Gradient theme</MenuItem>
          <MenuItem value="Purpish white theme">Purpish white theme</MenuItem>
          <MenuItem value="Dark Bluish theme">Bluish theme</MenuItem>
          <MenuItem value="Skyish theme">Skyish theme</MenuItem>
          <MenuItem value="Sunset theme">Sunset theme</MenuItem>
          <MenuItem value="Insta theme">Insta theme</MenuItem>
          
            
            </Select> </div>
            
              <> <Button variant="contained" disabled={this.state.disable} style={{float:"right"}} onClick={this.handlesubmit}color="primary">Upload</Button><br/></>
             
             {(this.state.theme)==="Light Green theme"&&
                 <div className="theme1 theme ">
                 <img src={profile.url} alt="" className={classes.profile_image}></img>
                 <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 <Button className="dot text" component={Link} to="/settings" style={{marginTop:32,width:'60%',textAlign:'center',marginLeft:73}}>XXXXDemoXXX</Button>
                 <br/><div className={classes.icons}>
                 <WhatsAppIcon size={10}/>
                 <InstagramIcon size={10}/>
                 
                 <TwitterIcon size={10}></TwitterIcon>
                 <YouTubeIcon size={10}/>
                 <FacebookIcon size={10}></FacebookIcon></div>
               </div>
             }
             {(this.state.theme)==="Dark theme"&&
                 <div className="theme2 theme ">
                 <img src={profile.url} alt="" className={classes.profile_image}></img>
                 <Typography style={{color:"white"}}className={classes.user}>@{profile.userhandle}</Typography>
                 <Button className="dot text" component={Link} to="/settings" style={{marginTop:32,width:'60%',textAlign:'center',marginLeft:73}}>XXXXDemoXXX</Button>
                 <br/><div className={classes.icons}>
                 <WhatsAppIcon size={10}/>
                 <InstagramIcon size={10}/>
                 <TwitterIcon size={10}></TwitterIcon>

                 <YouTubeIcon size={10}/>
                 <FacebookIcon size={10}></FacebookIcon></div>
               </div>
             }             

            {(this.state.theme)==="Greenish white theme"&&
                 <div className="theme3 theme ">
                 <img src={profile.url} alt="" className={classes.profile_image}></img>
                 <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 <Button className="dot text" component={Link} to="/settings" style={{marginTop:32,width:'60%',textAlign:'center',marginLeft:73}}>XXXXDemoXXX</Button>
                 <br/><div className={classes.icons}>
                 <WhatsAppIcon size={10}/>
                 <InstagramIcon size={10}/>
                 <TwitterIcon size={10}></TwitterIcon>
                 <YouTubeIcon size={10}/>
                 <FacebookIcon size={10}></FacebookIcon></div>
               </div>
             }
             {(this.state.theme)==="Black white theme"&&
                 <div className="theme4 theme">
                 <img src={profile.url} alt="" className={classes.profile_image}></img>
                 <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 <Button className="dot text" component={Link} to="/settings" style={{marginTop:32,width:'60%',textAlign:'center',marginLeft:73}}>XXXXDemoXXX</Button>
                 <br/><div className={classes.icons}>
                 <WhatsAppIcon size={10}/>
                 <InstagramIcon size={10}/>
                 <TwitterIcon size={10}></TwitterIcon><YouTubeIcon size={10}/>
                 <FacebookIcon size={10}></FacebookIcon></div>
               </div>
             }   
             {(this.state.theme)==="Gradient theme"&&
                 <div className="theme5  theme">
                 <img src={profile.url} alt="" className={classes.profile_image}></img>
                 <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 <Button className="dot text" component={Link} to="/settings" style={{marginTop:32,width:'60%',textAlign:'center',marginLeft:73}}>XXXXDemoXXX</Button>
                 <br/><div className={classes.icons}>
                 <WhatsAppIcon size={10}/>
                 <InstagramIcon size={10}/>
                 <TwitterIcon size={10}></TwitterIcon><YouTubeIcon size={10}/>
                 <FacebookIcon size={10}></FacebookIcon></div>
               </div>
             }
             {(this.state.theme)==="Purpish white theme"&&
                 <div className="theme6  theme">
                 <img src={profile.url} alt="" className={classes.profile_image}></img>
                 <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 <Button className="dot text" component={Link} to="/settings" style={{marginTop:32,width:'60%',textAlign:'center',marginLeft:73}}>XXXXDemoXXX</Button>
                 <br/><div className={classes.icons}>
                 <WhatsAppIcon size={10}/>
                 <InstagramIcon size={10}/>
                 <TwitterIcon size={10}></TwitterIcon><YouTubeIcon size={10}/>
                 <FacebookIcon size={10}></FacebookIcon></div>
               </div>
             }             

            {(this.state.theme)==="Dark Bluish theme"&&
                 <div className="theme7 theme ">
                 <img src={profile.url} alt="" className={classes.profile_image}></img>
                 <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 <Button className="dot text" component={Link} to="/settings" style={{marginTop:32,width:'60%',textAlign:'center',marginLeft:73}}>XXXXDemoXXX</Button>
                 <br/><div className={classes.icons}>
                 <WhatsAppIcon size={10}/>
                 <InstagramIcon size={10}/>
                 <TwitterIcon size={10}></TwitterIcon><YouTubeIcon size={10}/>
                 <FacebookIcon size={10}></FacebookIcon></div>
               </div>
             }
             {(this.state.theme)==="Skyish theme"&&
                 <div className="theme8  theme">
                 <img src={profile.url} alt="" className={classes.profile_image}></img>
                 <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 <Button className="dot text" component={Link} to="/settings" style={{marginTop:32,width:'60%',textAlign:'center',marginLeft:73}}>XXXXDemoXXX</Button>
                 <br/><div className={classes.icons}>
                 <WhatsAppIcon size={10}/>
                 <InstagramIcon size={10}/>
                 <TwitterIcon size={10}></TwitterIcon><YouTubeIcon size={10}/>
                 <FacebookIcon size={10}></FacebookIcon></div>
               </div>
             }
             {(this.state.theme)==="Insta theme"&&
                 <div className="theme9 theme">
                 <img src={profile.url} alt="" className={classes.profile_image}></img>
                 <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 <Button className="dot text" component={Link} to="/settings" style={{marginTop:32,width:'60%',textAlign:'center',marginLeft:73}}>XXXXDemoXXX</Button>
                 <br/><div className={classes.icons}>
                 <WhatsAppIcon size={10}/>
                 <InstagramIcon size={10}/>
                 <TwitterIcon size={10}></TwitterIcon><YouTubeIcon size={10}/>
                 <FacebookIcon size={10}></FacebookIcon></div>
               </div>
             }
              {(this.state.theme)==="Sunset theme"&&
                 <div className="theme10 theme">
                 <img src={profile.url} alt="" className={classes.profile_image}></img>
                 <Typography className={classes.user}>@{profile.userhandle}</Typography>
                 <Button className="dot text" component={Link} to="/settings" style={{marginTop:32,width:'60%',textAlign:'center',marginLeft:73}}>XXXXDemoXXX</Button>
                 <br/><div className={classes.icons}>
                 <WhatsAppIcon size={10}/>
                 <InstagramIcon size={10}/>
                 <TwitterIcon size={10}></TwitterIcon><YouTubeIcon size={10}/>
                 <FacebookIcon size={10}></FacebookIcon></div>
               </div>
             }
             


</>


          

       


           
        )
    }
}

theme.propTypes={
    classes:PropTypes.object.isRequired
}
const mapstatetoprops=state=>(

    {
      links:state.firestore.ordered.links,
    auth:state.firebase.auth,
    profile:state.firebase.profile,
    user:state.user
  })

export default compose(connect(mapstatetoprops,{updatetheme}),firestoreConnect([{collection:"users"}]))(withStyles(styles)(theme))
