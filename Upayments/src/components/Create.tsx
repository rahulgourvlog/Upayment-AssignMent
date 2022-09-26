import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel, Input,Flex
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import { postDataProduct } from '../Reduxts/actions'
import { useAppDispatch } from '../state/Appdispatch'



 export function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formData, Setformdata] = useState({});
    const dispatch = useAppDispatch();
  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(postDataProduct(formData));
   console.log(formData)
   
  };
  const HandleChange = (e:any) => {
    let name = e.target.name;

    Setformdata({
      ...formData,
      [name]: e.target.value,
    });
  };
   
  
    return (
      <>
        <Button style={{backgroundColor:"#f68484"}} onClick={onOpen}>Create Product +</Button>
        
        <Modal
          
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader>Add your Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
                <Flex>
              <FormControl>
                <FormLabel>Product Name:</FormLabel>
                <Input  type="text" placeholder='enter Product Name' name={"name"} onChange={HandleChange } required />
              </FormControl>
  
              <FormControl ml={3}>
                <FormLabel> Product Avatar:</FormLabel>
                <Input type="url" placeholder='enter Product url' name={"avatar"} onChange={HandleChange } required/>
              </FormControl>
              </Flex>
              <Flex>
              <FormControl mt={4}>
                <FormLabel>  Product description:</FormLabel>
                <Input type="text" placeholder='enter Product description' name={"description"} onChange={HandleChange } required/>
              </FormControl>

              <FormControl mt={4} ml={3}>
                <FormLabel> Product Price:</FormLabel>
                <Input  type="number" placeholder='enter Product  Price' name={"price"} onChange={HandleChange } required/>
              </FormControl>
              </Flex>
              <Flex>
              <FormControl mt={4}>
                <FormLabel> Product category:</FormLabel>
                <Input  type="text" placeholder='enter Product category' name={"category"} onChange={HandleChange } required/>
              </FormControl>

              <FormControl mt={4} ml={3}>
                <FormLabel>developerEmail:</FormLabel>
                <Input  type="text" placeholder='enter developerEmail' name={"developerEmail"} onChange={HandleChange } required/>
              </FormControl>
              </Flex>
            </ModalBody>
  
            <ModalFooter>
            <Input  type={"submit"} bg="blue" />
              <Button  onClick={onClose} ml={16}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
          </form>
        </Modal>
      </>
    )
  }


//   <div>
//     <label> Product Name:</label>
//     <input className=' mx-2 my-4 ml-3 px-12 rounded  border-solid border-2 border-green-600 focus:outline-none'  type="text" placeholder='enter Product Name' name={"name"} onChange={HandleChange } required/>
// </div>
// <div>
//     <label> Product Avatar:</label>
//     <input className=' mx-2 my-4 ml-3 px-12 rounded  border-solid border-2 border-green-600 focus:outline-none' type="url" placeholder='enter Product url' name={"avatar"} onChange={HandleChange } required/>
// </div>
// <div>
//     <label> Product description:</label>
//     <input  className='mx-10  my-4 ml-3  px-12 rounded  border-solid border-2 border-green-600 focus:outline-none' type="text" placeholder='enter Product description' name={"description"} onChange={HandleChange } required/>
// </div>
// <div>
//     <label> Product Price:</label>
//     <input className='  my-4 ml-3 px-12 rounded  border-solid border-2 border-green-600 focus:outline-none' type="number" placeholder='enter Product  Price' name={"price"} onChange={HandleChange } required/>
// </div>

// <div>
//     <label> Product category:</label>
//     <input  className=' mx-6 my-4 ml-3 px-12 rounded  border-solid border-2 border-green-600 focus:outline-none' type="text" placeholder='enter Productcategory' name={"category"} onChange={HandleChange } required/>
// </div>

// <div>
//     <label>developerEmail:</label>
//     <input  className=' mx-2 my-4 ml-3 px-12 rounded  border-solid border-2 border-green-600 focus:outline-none' type="text" placeholder='enter developerEmail' name={"developerEmail"} onChange={HandleChange } required/>
// </div>
// <input className="my-10 ml-20 px-20 py-2 text-zinc-50 text-lg  rounded border-r-2 bg-red-600" type={"submit"}  />
// </form>