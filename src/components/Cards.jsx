import React from 'react'
import '../css/component.css'

const Cards = ({ value }) => {
    return (
        <div >
            <div className="card product-card  w-72 glass p-0 m-5 ">
                <figure><img src={value.url} alt="Furniture Image" className='text-black' /></figure>
                <div className="card-body">
                    <p className='text-gray-700 font-semibold font-sans text-xl '>{value.name}</p>
                    <p className='text-gray-900 font-medium font-mono mb-3'>{value.caption}</p>
                    <p className='text-gray-800 font-mono font-semibold '>PRICE : ₹{value.price}</p>
                    <div className="card-actions justify-end">
                        <button className="text-gray-400" >View More... </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
