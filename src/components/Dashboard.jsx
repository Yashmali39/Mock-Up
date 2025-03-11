import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/')
    }
  return (
    <>
    
    <div>Dashboard</div>
    <button className='bg-pink-600 m-1 p-1 rounded-xl' onClick={handleClick}>
        Move To home
    </button>
    <NavLink to='/About' className='bg-pink-600 m-1 p-1 rounded-xl'>About</NavLink>
    <NavLink to='courses' className='bg-violet-600 m-1 p-1 rounded-xl'>Courses</NavLink>
    <Outlet/>
    </>
  )
}

export default Dashboard