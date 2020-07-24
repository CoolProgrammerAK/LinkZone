import {LOADING_DATA,LINK_ERROR,SET_LINK,CLEAR_ERROR, OPEN_ALERT, HIDE_ALERT, DELETE_LINK, DELETE_ALERT, DELETEHIDE_ALERT, UPDATE_DATA,UPDATE_ERROR} from '../type/type'

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
      
       dispatch({type:OPEN_ALERT})
        setTimeout(() => {
            dispatch({type:HIDE_ALERT})
        }, 3000)
    }).catch((err) => {
        dispatch({ type: LINK_ERROR, err });
      })
    }
export const deletelink=id=>(dispatch,getState,{getFirestore})=>{
  const firestore=getFirestore()
  firestore.collection('links').doc(id).delete().then(()=>{
      dispatch({type:DELETE_LINK})}).then(()=>{
        dispatch({type:DELETE_ALERT})
        setTimeout(() => {
            dispatch({type:DELETEHIDE_ALERT})
        }, 3000);
      })
      

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
        dispatch({type:CLEAR_ERROR})
    }).catch(err=>{
        dispatch({ type: UPDATE_ERROR, err });
})}