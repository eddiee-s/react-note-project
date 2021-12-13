import { combineReducers } from "redux"
import {
    firebaseReducer
  } from 'react-redux-firebase';
import noteReducer from "./noteReducer";
import { firestoreReducer } from 'redux-firestore';


// Add firebase to reducers
const rootReducer = combineReducers({
    note: noteReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  })

  export default rootReducer;