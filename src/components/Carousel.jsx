import React from 'react'
import '../css/component.css'

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full h-72 mt-20 sm:h-lvh flex">
        <div className='absolute  top-64 sm:top-72 md:top-96 left-4 flex flex-col justify-start'>
        <p className='sm:text-2xl md:ml-3 md:text-3xl font-medium text-gray-900 mb-1.5 '>&nbsp;&nbsp;&nbsp;"Revitalize Your Home,&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p className='sm:text-xl md:text-2xl    font-medium text-gray-900  mb-1.5'>&nbsp;&nbsp;Embrace the Extraordinary,</p>
                        <p className='sm:text-xl md:text-2xl md font-medium text-gray-900 mb-1.5'>Craft Your Dream Space."&nbsp;</p>
        </div>
        <div id="item1" className="carousel-item w-full sm:h-auto">
          <img src="../../src/assets/Carousel_Images/courselimage1.jpg" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full ">
          <img src="../../src/assets/Carousel_Images/courselimage2.jpg" className="w-full mi" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="../../src/assets/Carousel_Images/courselimage3.jpg" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="../../src/assets/Carousel_Images/courselimage4.jpg" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="bg-slate-100 w-5 h-6 align-middle flex justify-center rounded-badge">1</a>
        <a href="#item2" className="bg-slate-100 w-5 h-6 align-middle flex justify-center rounded-badge">2</a>
        <a href="#item3" className="bg-slate-100 w-5 h-6 align-middle flex justify-center rounded-badge">3</a>
        <a href="#item4" className="bg-slate-100 w-5 h-6 align-middle flex justify-center rounded-badge">4</a>
      </div>
    </div>
  )
}

export default Carousel
