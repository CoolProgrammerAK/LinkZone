import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import {Provider,useSelector} from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {reduxFirestore,getFirestore,createFirestoreInstance} from 'redux-firestore'
import{ReactReduxFirebaseProvider,getFirebase,isLoaded} from 'react-redux-firebase'
import {rootreducer} from './redux/reducer/rootreducer'
import fbConfig from './services/firebase';
import firebase from 'firebase/app'
import Screenloader from './components/screenloader';
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
  if (!isLoaded(auth))return  <React.Fragment >
  <Screenloader></Screenloader>
  </React.Fragment>
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

