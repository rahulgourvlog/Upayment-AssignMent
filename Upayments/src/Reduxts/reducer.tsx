
import { Reducer } from "react";
import ProductsState from "../state/ProductsState";
import {  GettingFilterProduct, GettingProducts_Error, GettingProducts_Loading, GettingProducts_SUCCESS } from "./actionTypes";



const initState:ProductsState = {
 Products:[],
  isLoading: false,
  isError: false,
 
};

const reducer = (state = initState, action:any) => {
  switch (action.type) {
   

    case GettingProducts_Loading : 
  
    return {
...state,
isLoading: true,
isError: false,

    }
case GettingProducts_SUCCESS:
  
   
    return {
        ...state,
        isLoading: false,
  isError: false,
  Products:action.payload
    }
    case GettingProducts_Error: 
    return {
        ...state,
isLoading:false,
isError: true,
Products:[]
    }
case GettingFilterProduct:
    console.log(action.payload)

    
    return{

    }

    default : 
     return state
}
}

export default reducer

