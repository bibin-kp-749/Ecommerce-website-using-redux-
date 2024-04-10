import React, { useEffect} from 'react'
import Cards from './Cards'
import '../css/component.css'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { products } from '../App/Thunk/thunk'


const Products = () => {

  const dispatch=useDispatch()
  const value=useSelector(state=>state.products.product)
  const location = useLocation();
  const from = location.state?.from;
  useEffect(()=>{
   dispatch(products())
  },[])
  return (
    <>
      <div className='products-item flex flex-wrap  justify-evenly 'style={{marginTop:'10rem'}} id='products-item '>
        {value&&
          value?.map((e,i)=>{
            if(from==e.category){
            return (
              <Link key={i} to={`${e.id}`}><Cards value={e}/></Link>)
            }
          })
        }
        
      </div>
    </>
  )
}

export default Products
