import React from 'react';
import "../../App.css"
import Homemainbar from '../../components/Homemainbar/Homemainbar';
import Leftsidebar from '../../components/LeftSideBar/Leftsidebar';
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar';


function Home() {
  return (
    <div className='home-container-1'>
      <Leftsidebar />
        <div className='home-container-2'>
            <Homemainbar />
            <Rightsidebar />
        </div>
    </div>
  )
}

export default Home