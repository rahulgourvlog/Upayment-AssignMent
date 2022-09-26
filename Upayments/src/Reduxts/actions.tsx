
import axios, { AxiosResponse } from "axios";
import { AnyAction, Dispatch } from "redux";

import { Producttypes } from "../state/ProductsState";
import { GettingFilterProduct, GettingProducts_Error, GettingProducts_FilterArr, GettingProducts_Loading, GettingProducts_SUCCESS, ProductDataPost } from "./actionTypes";

//import {  ActionType, GettingProductAction, GettingProducts_ErrorAction, GettingProducts_LoadingAction, GettingProducts_SUCCESSAction} from "./actionTypes";
let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaHVsZ291cjk3NTRAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3JhaHVsZ291cnZsb2ciLCJpYXQiOjE2NjM5ODE1NTksImV4cCI6MTY2NDQxMzU1OX0.jUmD-aq11bguIt_kHY5LyI7W4mTdlkiociYj2N4vq-g";





export const ProductsLoading= ()=>({type:GettingProducts_Loading})
export const ProductsSuccess = (payload:Array<Producttypes>)=>({type:GettingProducts_SUCCESS,payload})
export const ProductFilterArr=(payload:Array<Producttypes>)=>({type:GettingProducts_FilterArr,payload})
export const ProductsFailure = ()=>({type:GettingProducts_Error})

export const FilterProd=(payload:string[])=>({type:GettingFilterProduct,payload})

export const PostData=(payload:any)=>({type: ProductDataPost,payload})









export const getProductsData = ()=>async(dispatch:Dispatch<AnyAction>)=>{
  dispatch(ProductsLoading()) 
  try{
    let getData = await axios.get(`https://upayments-studycase-api.herokuapp.com/api/products`,
     {headers: 
      {authorization:`Bearer ${token}`}})
    let data=getData.data.products;
    //console.log( data );
    dispatch(ProductsSuccess(data))
    dispatch(ProductFilterArr(data))
    
}
  catch(err){
          // console.log("Erro is There",err)
           dispatch( ProductsFailure())
       }
}

export const FilterProduct=(payload:any)=>(dispatch:Dispatch<AnyAction>)=>{
//console.log(payload)

  dispatch(FilterProd(payload))
}


 export const postDataProduct=(payload:any)=>async(dispatch:Dispatch<AnyAction>)=>{
  let getData = await axios.post(`https://upayments-studycase-api.herokuapp.com/api/products`,payload,
  {headers: 
   {authorization:`Bearer ${token}`}})
 let data=getData.data.message;
 //console.log( data );

 if( data==="Success"){
   dispatch(PostData(data))
  alert("Product Added Successfully")
 }

 

}