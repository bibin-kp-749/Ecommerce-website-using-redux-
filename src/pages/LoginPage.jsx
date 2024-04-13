import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
    return (
        <div>
            <div id='regipage ' className='flex justify-center flex-col'>
                <div className='mb-6 text-black flex justify-center'>
                    <h1 className='login-heading text-2xl font-semibold'>Login</h1>
                </div>
                <div className='flex justify-center'>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
