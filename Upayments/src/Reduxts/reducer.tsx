
import { Reducer } from "react";
import ProductsState from "../state/ProductsState";
import {  GettingFilterProduct, GettingProducts_Error, GettingProducts_FilterArr, GettingProducts_Loading, GettingProducts_SUCCESS, ProductDataPost } from "./actionTypes";



const initState:ProductsState = {
 Products:[],

  isLoading: false,
  isError: false,
  FilteredArr:[]
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

    case GettingProducts_FilterArr:
        console.log(action.payload)
        return{
            ...state,
            isLoading: false,
      isError: false,
      FilteredArr:action.payload
        }
    case GettingProducts_Error: 
    return {
        ...state,
isLoading:false,
isError: true,
Products:[]
    }

    case ProductDataPost:
        return{
...state,
FilteredArr:action.payload
        }


    default : 
     return state
}
}

export default reducer

