import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import '../css/component.css'

const RegisterPage = () => {
    return (
        <div id='regipage ' className='flex justify-center flex-col flex-wrap' style={{ marginTop: '11rem' }}>
            <div className='mb-10  text-black'>
                <h1 className='font-semibold text-gray-600 text-2xl'>Register</h1>
            </div>
            <div className='flex  justify-center '>
                <div className="regipage-section flex flex-wrap ">
                    <div className="regi-img h-56 bg-no-repeat sm:w-6/12 sm:h-80 sm:bg-cover mb-10  bg-cover w-96 flex justify-center align-middle flex-col text-black">
                        <p className='text-2xl font-semibold text-gray-900'>Transform</p>
                        <p className='text-xl font-medium text-gray-900'>Your Living,</p>
                        <p className='text-lg font-normal text-gray-900'>Embrace The Extraordinary</p>
                    </div>
                    <div className="regi-form min-h-32  pl-4 sm:pl-9 md:pl-20">
                        <RegistrationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
