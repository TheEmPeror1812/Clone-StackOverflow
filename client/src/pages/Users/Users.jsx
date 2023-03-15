import React from 'react'
import {useLocation} from "react-router-dom"

import "./Users.css"
import Leftsidebar from"../../components/LeftSideBar/Leftsidebar"
import UsersList from './UsersList'

function Users() {

  const location = useLocation()


  return (
    <div className='home-container-1'>
      <Leftsidebar />
      <div className="home-container-2" style={{flexDirection: "column", justifyContent:"unset", marginTop:"30px"}}>
          <h1 style={{fontWeight:"400"}}>Users</h1>
          <UsersList /> 
      </div>
        
    </div>
  )
}

export default Users