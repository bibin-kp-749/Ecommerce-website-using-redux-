import React from 'react'
import '../css/component.css'
import LoginPage from '../pages/LoginPage'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../App.css'
import { useDispatch } from 'react-redux'
import { searchItem } from '../App/Slice/searchSlice'

const Navbar = () => {
    const dispatch=useDispatch()
    let name = localStorage.getItem('name')
    const navigate = useNavigate()
    const id = localStorage.getItem('id')
    return (
        <div id='navbar-section p-0' className={`${(id == '0001') ? 'hidden' : ''}`}>
            <div className="navbar  flex bg ">
                <div className="w-20 mr-9 sm:mr-52 md:mr-96 lg:w-96" >
                    <a className="btn btn-ghost text-xl" >FurPro</a>
                </div>
                <div className=" gap-2 flex">
                    <div className="form-control flex min-w-36 columns-2 flex-row bg-gray-200 rounded-md xl:ml-28">
                        <div>
                            <input type="text" placeholder="Search" onChange={e => {
                                dispatch(searchItem(e.target.value))
                            }} className="input bg-gray-200 text-black input-bordered w-28 h-10 md:w-auto border-none sm:w-44  lg:w-80" />
                        </div>
                        <div className='bg-gray-200 text-black flex justify-center items-center w-8 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70" onClick={() => navigate('search')}><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>

                        </div>
                    </div>
                    <div className="dropdown dropdown-end ml-1 md:ml-7">
                        <Link to='cart'>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    {/* <span className="badge badge-sm indicator-item"></span> */}
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="dropdown pr-15 dropdown-end sm:ml-8">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className='w-1 h-1' />

                            </div>
                        </div>
                        <div>
                            <p className='text-white font-medium'>{name}</p>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52 bg-gray-200">
                            <li>
                                <a className="justify-between ">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><div >  
                                <a className="w-24 h-2 flex items-center   font-medium  rounded-lg mb-1 mt-3" onClick={id ? () => {
                                    localStorage.removeItem('name');
                                    localStorage.removeItem('id');
                                    navigate('/');
                                } : () => {
                                    document.getElementById('my_modal_3').showModal();
                                }}  > {id ? "logout" : "login"} </a>
                                <dialog id="my_modal_3" className="modal ">
                                    <div className="modal-box bg-gray-200">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            <LoginPage />
                                        </form>
                                    </div>
                                </dialog>
                            </div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar
