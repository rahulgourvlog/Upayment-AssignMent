// create store here
import { legacy_createStore as createStore ,combineReducers,applyMiddleware, Store, AnyAction } from "redux";
import  reducer from "./reducer";
import  thunk from "redux-thunk"
import { configureStore } from "@reduxjs/toolkit";



const rootReducers = combineReducers({
 
  reducer:reducer
})




export const store=configureStore({reducer:rootReducers}); 
 
console.log(store,"store"); 
export type AppDispatch = typeof store.dispatch


