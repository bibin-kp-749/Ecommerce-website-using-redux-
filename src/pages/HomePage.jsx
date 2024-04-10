import React from 'react'
import Carousel from '../components/Carousel'
import BottomNavbar from '../components/BottomNavbar'
import CarouselSelect from '../components/CarouselSelect'
import Subsection from '../components/Subsection'

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center align-middle mb-5'>
      <Carousel/>
      <div>
        <br /><br />
        <h1 className='text-3xl font-semibold'>Our collections</h1>
        <br /><br />
      </div>
      <BottomNavbar/>
      <Subsection/>
      <CarouselSelect/>
    </div>
  )
}

export default HomePage
