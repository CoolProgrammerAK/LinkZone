import {LOADING_DATA,LINK_ERROR,SET_LINK,CLEAR_ERROR,UPDATE_ALERT,UPDATEHIDE_ALERT,  DELETE_LINK, DELETE_ALERT, DELETEHIDE_ALERT, UPDATE_DATA,UPDATE_ERROR} from '../type/type'
import {showtoast} from '../../toast/toast'
export const setlink=(uid,link)=>(dispatch,getState,{getFirebase,getFirestore})=>{
    const firestore=getFirestore()
   
    dispatch({type:LOADING_DATA})
    firestore.collection('links').add({
        title:link.title,
        links:link.link,
        uid:uid,
        time:new Date()
    }).then(()=>{
        dispatch({
            type:SET_LINK,payload:link,uid:uid
        })

        dispatch({type:CLEAR_ERROR})
       showtoast("Your link is successfully added.",true)
      
    }).catch((err) => {
        dispatch({ type: LINK_ERROR, err });
      })
    }
export const deletelink=id=>(dispatch,getState,{getFirestore})=>{
  const firestore=getFirestore()
  firestore.collection('links').doc(id).delete().then(()=>{
      dispatch({type:DELETE_LINK})
      showtoast("Your link is successfully deleted.",true)})
      

  .catch(err=>{
      console.log(err)
  })

}
 export const updatedata=(id,data)=>(dispatch,getState,{getFirestore})=>{
   const firestore=getFirestore()
   firestore.collection('links').doc(id).update({
        title:data.title,
        links:data.link
}).then(()=>{
        dispatch({
            type:UPDATE_DATA
        })
        showtoast("Your link is successfully updated.",true)
        dispatch({type:CLEAR_ERROR})
     
        
    
    }).catch(err=>{
        dispatch({ type: UPDATE_ERROR, err });
})}


