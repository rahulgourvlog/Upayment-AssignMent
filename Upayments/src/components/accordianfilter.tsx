import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  Stack,
  Flex
} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

import axios from "axios";

import { FilterProduct, getProductsData, ProductFilterArr, ProductsSuccess } from "../Reduxts/actions";

import { useAppDispatch } from "../state/Appdispatch";
import { token } from "./Token";
import { Producttypes } from "../state/ProductsState";
import { useSelector } from "react-redux";

import { Box} from '@chakra-ui/react'
import { GettingFilterProduct } from "../Reduxts/actionTypes";
const Accordianfilter = () => {
  const { Products, FilteredArr } = useSelector((state: any) => state.reducer);
  
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
      dispatch(ProductFilterArr(Products)); 
    }else
    { 
      const filterProduct= await Products.filter((prod:Producttypes)=>{ 
        return filterCategort.indexOf(prod.category)!==-1; 
      }) 
       console.log(filterProduct,'filter prod'); 
          dispatch(ProductFilterArr(filterProduct)); 
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

          <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {cat.map((el:any, i) => {
                  return (
                    <Stack mb={3} key={i} spacing={[1, 5]} direction={['column', 'row']}>
                     
  <Checkbox size='sm' colorScheme='red' value={el.name}
                          
                          checked={filterCategort.includes(el.name)}
                          onChange={getFilter}>{el.name}</Checkbox>
                         
                     </Stack>
                  );
                })}  
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordianfilter;

