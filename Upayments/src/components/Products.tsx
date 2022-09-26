import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProductsData } from "../Reduxts/actions";
import { useAppDispatch } from "../state/Appdispatch";
import { Producttypes } from "../state/ProductsState";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Accordianfilter from "./accordianfilter";




const Products = () => {
  const navigate=useNavigate()
  
 

  const { Products } = useSelector((state: any) => state.reducer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductsData());
  }, []);
  
const HandleClick=(e:any)=>{
  //console.log(e)
  //console.log("true")
  // SetToggle(true);

}

  return (
    <>
   
   <div>
    <Accordianfilter/>
   </div>
 <div className="bg-white ">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      
        <div className="mt-2 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 sm:grid-cols-2  lg:grid-cols-4 xl:gap-x-8">
         {Products && Products.map((product: Producttypes, index: number) => {
           return( <div key={product._id} className="shadow-md group relative ">
            <Link to={`/${product._id}`}>
              <div className=" min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img onClick={()=>navigate(`/${product._id}`)}
                  src={product.avatar}
                  alt={"not shown"}
                  className="h-2 w-full object-cover object-center lg:h-full lg:w-full md:h-80 md:w-full sm:h-80 sm:w-80"
               />
              </div>
             
              <div className="mt-4 flex justify-between" 
             
              >
                 <FavoriteBorderIcon/>    
                <div>
                  <h3 className="text-sm text-gray-900 mb-3 font-bold ">
                    
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                  
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 uppercase ml-4 mb-2">category: {product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900 pr-2"> {`₹ ${product.price}`}</p>
              </div>
              </Link>
            </div>
          )})} 
        </div>
      </div>
</div> 

    </>
  );
};

export default Products;





