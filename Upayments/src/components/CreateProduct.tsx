import React ,{useState} from 'react'
import { postDataProduct } from '../Reduxts/actions';
import { useAppDispatch } from '../state/Appdispatch';

const CreateProduct = () => {
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
   
    <div className='mt-20 shadow-md w-5/12  mx-auto h-auto'>
    <div>
        <h1 className='text-4xl '>Create Products</h1>
    </div>
    <form onSubmit={handleSubmit}>
<div>
    <label> Product Name:</label>
    <input className=' mx-2 my-4 ml-3 px-12 rounded  border-solid border-2 border-green-600 focus:outline-none'  type="text" placeholder='enter Product Name' name={"name"} onChange={HandleChange } required/>
</div>
<div>
    <label> Product Avatar:</label>
    <input className=' mx-2 my-4 ml-3 px-12 rounded  border-solid border-2 border-green-600 focus:outline-none' type="url" placeholder='enter Product url' name={"avatar"} onChange={HandleChange } required/>
</div>
<div>
    <label> Product description:</label>
    <input  className='mx-10  my-4 ml-3  px-12 rounded  border-solid border-2 border-green-600 focus:outline-none' type="text" placeholder='enter Product description' name={"description"} onChange={HandleChange } required/>
</div>
<div>
    <label> Product Price:</label>
    <input className='  my-4 ml-3 px-12 rounded  border-solid border-2 border-green-600 focus:outline-none' type="number" placeholder='enter Product  Price' name={"price"} onChange={HandleChange } required/>
</div>

<div>
    <label> Product category:</label>
    <input  className=' mx-6 my-4 ml-3 px-12 rounded  border-solid border-2 border-green-600 focus:outline-none' type="text" placeholder='enter Productcategory' name={"category"} onChange={HandleChange } required/>
</div>

<div>
    <label>developerEmail:</label>
    <input  className=' mx-2 my-4 ml-3 px-12 rounded  border-solid border-2 border-green-600 focus:outline-none' type="text" placeholder='enter developerEmail' name={"developerEmail"} onChange={HandleChange } required/>
</div>
<input className="my-10 ml-20 px-20 py-2 text-zinc-50 text-lg  rounded border-r-2 bg-red-600" type={"submit"}  />
</form>
    </div>
    
    </>
  )
}

export default CreateProduct


// {"name": "Laptops",
// "avatar": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80",
// "description": "ASUS VivoBook 15 (2022) Core i3 10th Gen - (8 GB/512 GB SSD/Windows 11 Home)",
// "price": 50000,
// "category": "Electronics",
// "developerEmail": "rahulgour9754@gmail.com"


// }