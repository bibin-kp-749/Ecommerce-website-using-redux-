import React from 'react'
import { Link } from 'react-router-dom'
import '../css/component.css'

const BottomNavbar = () => {
  return (
    <>

      <div>
        <div className=" m-0 p-0 flex justify-evenly h-20 mt-5 mb-8">
          <button className='bottom-btn sm:shadow-md sm:shadow-gray-700 bg-white sm:rounded-md  items-center'>
            <Link to="/" state={{ from: "Sofa" }} >
              <img src="https://damroimages.blob.core.windows.net/damroimages/01.jpg" className='w-15 h-11' alt="" />
              {/* <p className='text-lg font-medium' >sofas</p> */}
            </Link>
          </button>
          <button className='bottom-btn sm:shadow-md sm:shadow-gray-700 bg-white sm:rounded-md  items-center'>
            <Link to="/" state={{ from: "Rack" }} className='flex flex-col justify-center'>
              <img src="https://damroimages.blob.core.windows.net/damroimages/02.jpg" className='w-15 h-11' alt="" />
              {/* <p className='text-lg font-medium'>Recliners</p> */}
            </Link>
          </button>
          <button className='bottom-btn sm:shadow-md  sm:shadow-gray-700 bg-white sm:rounded-md  items-center '>
            <Link to="/" state={{ from: "mattress" }} className='flex flex-col justify-center'>
              <img src="https://damroimages.blob.core.windows.net/damroimages/03.jpg" className='w-15 h-11' alt="" />
              {/* <p className='text-lg font-medium'>mattress</p> */}
            </Link>
          </button>
          <button className='bottom-btn sm:shadow-md  sm:shadow-gray-700 bg-white sm:rounded-md   flex items-center justify-center'>
            <Link to="/" state={{ from: "dinig" }}>
              <img src="https://damroimages.blob.core.windows.net/damroimages/04.jpg" className='w-15 h-11' alt="" />
              {/* <p className='text-lg font-medium'>Dining</p> */}
            </Link>
          </button>
          <button className='bottom-btn sm:shadow-md  sm:shadow-gray-700 bg-white sm:rounded-md  items-center'>
            <Link to="/" state={{ from: "table" }}>
              <img src="https://damroimages.blob.core.windows.net/damroimages/05.jpg" className='w-15 h-11' alt="" />
              {/* <p className='text-lg font-medium'>office</p> */}
            </Link>
          </button>
          <button className='bottom-btn sm:shadow-md  sm:shadow-gray-700 bg-white sm:rounded-md flex items-center'>
            <Link to="/" state={{ from: "chair" }}>
              <img src="https://damroimages.blob.core.windows.net/damroimages/06.jpg" className='w-15 h-11' alt="" />
              {/* <p className='text-lg font-medium'>Living</p> */}
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default BottomNavbar
