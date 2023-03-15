import React from 'react'
import Leftsidebar from '../../components/LeftSideBar/Leftsidebar'
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar'
import Questiondetails from './Questiondetails'

function Displayquestions() {
  return (
    <div className='home-container-1'>
      <Leftsidebar />
        <div className='home-container-2'>
            <Questiondetails />
            <Rightsidebar />
        </div>
    </div>
  )
}

export default Displayquestions