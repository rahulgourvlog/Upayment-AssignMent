

export interface Producttypes{ 
    _id:string; 
    name:string; 
    avatar:string; 
    description:string; 
    price:number; 
    category:string; 
    developerEmail:string; 
    createdAt:string; 
    updatedAt:string; 
    __v:number 
} 
 




export default interface ProductsState {
    Products:Array<Producttypes> ,
    isLoading: boolean,
    isError:boolean,
    FilteredArr:Array<Producttypes>
  }

