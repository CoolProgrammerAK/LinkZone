import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,useSelector} from 'react-redux'
import App from './App';

import Logo from './pictures/logo1.png'
import * as serviceWorker from './serviceWorker';
import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import CircularProgress from '@material-ui/core/CircularProgress'
import {reduxFirestore,getFirestore,createFirestoreInstance} from 'redux-firestore'
import{ReactReduxFirebaseProvider,getFirebase,isLoaded} from 'react-redux-firebase'
import {rootreducer} from './redux/reducer/rootreducer'
import fbConfig from './services/firebase';
import firebase from 'firebase/app'
const store=createStore(rootreducer,compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
reduxFirestore(firebase,fbConfig) ))

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}
const rrfprops={
  firebase,
  config:rrfConfig,fbConfig,
  dispatch:store.dispatch,
  createFirestoreInstance,
 
}
function Authisloaded({children}){
  const auth=useSelector(state=>state.firebase.auth)
  if (!isLoaded(auth))return  <>
  
     
  <CircularProgress size={90} style={{position:"absolute",left:750,top:"40%"}}></CircularProgress></>
  ;return children
 }
ReactDOM.render(

  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfprops}>
     <Authisloaded>
     <App />
    
     </Authisloaded>
    
 
  </ReactReduxFirebaseProvider>
  </Provider>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
