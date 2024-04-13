import React, { useEffect, useState } from 'react'
import '../css/component.css'
import { useDispatch, useSelector } from 'react-redux';
import { cartProduct, deleteCart } from '../App/Thunk/thunk';

const CartPage = () => {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.products.cart);
    const userid = localStorage.getItem('id');
    const [totalprice, setTotalprice] = useState(0);
    useEffect(() => {
        let totalPrice = 0;
        carts.forEach(e => {
            if (e.userid == userid) {
                totalPrice += e.quantity * e.price;
            }
        });
        setTotalprice(totalPrice);
        dispatch(cartProduct());
    }, [])
    return (
        <div className='mt-48 flex flex-col items-center'>{
            carts &&
            carts.map((e, i) => {
                if (e.userid == userid) {
                    return (
                        <div key={i} className="card  flex  self-center  card-side bg-gray-100 rounded-sm justify-center flex-wrap mt-5 sm:w-5/6">
                            <figure><img className=' w-80 h-56 rounded-md sm:min-h-64 ' src={e.url} alt="Movie" /></figure>
                            <div className="card-body ">
                                <div><h2 className='text-2xl font-bold text-gray-800'>{e.type}</h2>
                                    <p className='text-gray-600 text-lg '>{e.caption}</p></div>
                                <div>
                                    <p>Quantity : {e.quantity}</p>
                                    <p className='text-xl font-bold text-gray-400'>PRICE - ₹{e.quantity * e.price} </p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn cartbtn " onClick={() => dispatch(deleteCart(e.id))}>DELETE</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
            <div className='my-12'><p className='text-black font-medium'>TOTAL PRICE : ₹{totalprice}</p></div>
            <button className="purchase-btn cartbtn max-w-72 min-h-14">Purchace</button>
        </div>

    )
}

export default CartPage
