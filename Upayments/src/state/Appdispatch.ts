import {useDispatch} from 'react-redux'; 
import { AppDispatch } from '../Reduxts/store'; 
 
export const useAppDispatch:()=>AppDispatch=useDispatch;