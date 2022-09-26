import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";

import { FilterProduct, getProductsData, ProductsSuccess } from "../Reduxts/actions";

import { useAppDispatch } from "../state/Appdispatch";
import { token } from "./Token";
import { Producttypes } from "../state/ProductsState";
import { useSelector } from "react-redux";

const Accordianfilter = () => {
  const { Products } = useSelector((state: any) => state.reducer);
  console.log(Products )
  const [cat, Setcat] = useState([]);
  const dispatch = useAppDispatch();
  const getcat = async () => {
    let getData = await axios.get(
      `https://upayments-studycase-api.herokuapp.com/api/categories`,
      { headers: { authorization: `Bearer ${token}` } }
    );
    let data = getData.data.categories;
    console.log(data);
    Setcat(data);
  };

  const [filterCategort, setFiltercat] = useState<String[]>([]);

  const getFilter = (e: any) => {
    const index = filterCategort.indexOf(e.target.value);

    if (index === -1) {
      setFiltercat([...filterCategort, e.target.value]);
    } else {
      const updatedFilterCat= filterCategort.filter((el:any)=>el!==e.target.value); 
      
      setFiltercat(updatedFilterCat); 
      
    }
  };


  const filterProducts=async ()=>{ 
    if(filterCategort.length===0)
    { 
      dispatch(ProductsSuccess(Products)); 
    }else
    { 
      const filterProduct= await Products.filter((prod:Producttypes)=>{ 
        return filterCategort.indexOf(prod.category)!==-1; 
      }) 
       console.log(filterProduct,'filter prod'); 
          dispatch(ProductsSuccess(filterProduct)); 
    } 
  }
  
  console.log(filterCategort)
  useEffect(()=>{ 
    
    // filtering products 
    filterProducts()
 
  },[filterCategort])
  
  
  useEffect(() => {
    getcat();
    //dispatch(FilterProduct(filterCategort));
    
  }, []);

  return (
    <>
      <div className="mt-20">
        <p className="text-4xl mb-2">Product Page</p>
        <div className="container">
          <div className="sideBarOptions">
          <Accordion disableGutters={true}>
              <AccordionSummary
                id="panel6-header"
                 
                expandIcon={<ExpandMoreIcon />}
              >
                Category
              </AccordionSummary>
              <AccordionDetails className="checkBoxesCon">
               {cat.map((el:any, i) => {
                  return (
                    <FormControlLabel
                      label={el.name}
                      key={i}
                      control={
                        <Checkbox
                          value={el.name}
                          checked={filterCategort.includes(el.name)}
                          onChange={getFilter}
                        />
                      }
                    />
                  );
                })}  
                
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordianfilter;

