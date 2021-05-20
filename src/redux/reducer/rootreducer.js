import userreducer from './userreducer'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import {combineReducers} from 'redux'
import linkreducer from './linkreducer'
export const rootreducer=combineReducers({
    user:userreducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    link:linkreducer
})
