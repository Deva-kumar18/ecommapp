import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Content = () => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (location.pathname === '/') { 
          navigate('/products');
        }
      }, [location.pathname, navigate]);
  return (
    <div className='content-container'><Outlet/></div>
  )
}

export default Content