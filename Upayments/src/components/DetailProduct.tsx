import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Producttypes } from '../state/ProductsState';
import { token } from './Token';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const DetailProduct = () => {
    let favouriteArr:any[]=[]
    const [Details,SetDetails]=useState<Producttypes[]>([]);
    const [toggle,SetToggle]=useState(false)
    const {_id}=useParams();
    console.log(_id);
    const singleProduct=async()=>{
        let getData = await axios.get(`https://upayments-studycase-api.herokuapp.com/api/products/${_id}`,
        {headers: 
         {authorization:`Bearer ${token}`}})
       let data=getData.data.product;
       console.log( data );
       SetDetails([data])
    }
    useEffect(()=>{
        singleProduct()
    },[])
    console.log(Details)
  return (
    <>
    <div className='mx-auto mt-40 flex justify-center align-middle max-h-70  mb-20  '>
    {Details.map((product: Producttypes, index: number) => {
           return( <div key={product._id} className="shadow-md group relative ">
           
              <div className=" min-h-70 aspect-w-1 aspect-h-1 w-80 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-100">
                <img 
                  src={product.avatar}
                  alt={"not shown"}
                  className="h-2 w-full object-cover object-center lg:h-full lg:w-full md:h-80 md:w-full sm:h-80 sm:w-80"
               />
              </div>
             
             <div> 
             <p className="mt-1 text-sm text-gray-500 overflow-hidden ml-4 mb-2 w-80">Description: {product.description}</p>
             </div>
              <div className="mt-4 flex justify-between" 
              onClick={()=>{
                SetToggle(true)
                console.log(favouriteArr)
                let savedFavorite =  JSON.parse(localStorage.getItem('Favourite')|| '[]')
              //let item=  savedFavorite.find((prod:any)=>prod._id!==product._id)
             
                favouriteArr=[...savedFavorite,product] 
                
                localStorage.setItem("Favourite",JSON.stringify(favouriteArr))
           
                
              }}
              >
                 <FavoriteBorderIcon     style={{ backgroundColor: toggle ? 'red' : 'white'}}/>    
                <div>
                  <h3 className="text-sm text-gray-900 mb-3 font-bold ">
                    
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                  
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 uppercase ml-4 mb-2">category: {product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900 pr-2"> {`₹ ${product.price}`}</p>
              </div>
             
            </div>
          )})}

    </div>
    
    </>
  )
}

export default DetailProduct