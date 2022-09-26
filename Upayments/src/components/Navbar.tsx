import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Styles from "./Navbar.module.css"
const Navbar = () => {
    var savedFavorite =  JSON.parse(localStorage.getItem('Favourite')|| '[]')  ;
useEffect(()=>{
   
},[])
   
  return (
  <>
<div className={Styles.Navbar}>
<Link to="/" className={Styles.link}>Products</Link>
<Link to="/favourite" className={Styles.link} >favourites <FavoriteBorderIcon className={Styles.fav}/> </Link>
<Link to="/create"  className={Styles.link}>CreateProducts +</Link>

  </div>
  
  </>
  )
}

export default Navbar
