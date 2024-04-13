import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { products } from '../App/Thunk/thunk'

const Search = () => {
    const dispatch = useDispatch();
    const values = useSelector(state => state.products.product);
    const search = useSelector(state => state.search.search);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(products());
    }, [])
    return (
        <div className='flex flex-wrap justify-evenly mt-24'>
            {
                values && values.map((e, i) => {
                    if (e.caption.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <div key={i} className="card w-80 glass p-0 m-5">
                                <figure><img src={e.url} alt="Furniture Image" className='text-black' /></figure>
                                <div className="card-body">
                                    <p className='text-black'>{e.caption}</p>
                                    <p className='text-black'>PRICE : ₹{e.price}</p>
                                    <br />
                                    <div className="card-actions justify-end">
                                        <button className="  text-gray-600" onClick={() => navigate(`/products/${e.id}`)}>view more</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Search
