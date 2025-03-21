import axios from 'axios'
import React, { Children, useContext, useEffect, useState } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import { UserDataContext } from '../Context/UserContext'

const UserWrapper = ({children}) => {
const [loading, setLoading] = useState(true)
const [Authenticated, setAuthenticated] = useState(false)
const navigate = useNavigate()
const {user,setuser} = useContext(UserDataContext)

useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/user/checkAuthroute`, {
          withCredentials: true, 
        });

        if (response.status === 200) {
          setAuthenticated(true); 
          // console.log(response.data.user);
          setuser(response.data.user)
        }
      } catch (err) {
        setAuthenticated(false); 
        navigate('/dashboard/login'); 
    
      } finally {
        setLoading(false); 
      }
    };

    checkAuth();
  }, [navigate]);

  if(loading){
    return (
      <>
      Loding....
      </>)
  }
  return Authenticated ? children : null;
}

export default UserWrapper