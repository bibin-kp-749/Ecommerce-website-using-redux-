import React from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../App/Thunk/thunk';

const Subsection = () => {
  const location = useLocation();
  const value = useSelector(state => state.products.product);
  const from = location.state?.from;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(products());
  }, [])
  return (
    <div className='flex flex-wrap  justify-evenly m-14'>
      {value &&
        value.map(e => {
          if (e.type === from) {
            return <Link to={`products/${e.id}`}><Cards value={e} /></Link>
          }
        })
      }
    </div>
  )
}

export default Subsection
