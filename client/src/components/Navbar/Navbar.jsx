import React, {useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import decode from "jwt-decode"

import logo from "../../assets/logo.png";
import search from "../../assets/search-icon.svg"
import Avatar from "../../components/Avatar/Avatar"
import "./Navbar.css"
import setCurrentUser from '../../actions/currentuser';

function Navbar() {

  let User = useSelector((state) => (state.currentUserReducer));
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
    navigate("/")
    dispatch(setCurrentUser(null))
  }

  useEffect(()=>{
    const token = User?.token
    if(token){
      const decodeToken = decode(token)
      if(decodeToken.exp * 1000 < new Date().getTime()){
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
  },[User?.token,dispatch])

  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to={"/"} className="nav-item nav-logo">
                <img src={logo} alt="logo" />
            </Link>
            <Link to="/" className='nav-item nav-btn'>About</Link>
            <Link to="/" className='nav-item nav-btn'>Products</Link>
            <Link to="/" className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type="text" placeholder='Search...'/>
                <img src={search} alt="search" className='search-icon' width="18" />
            </form>
            { User === null ?
              <Link to="/Auth" className="nav-links nav-item">Log in</Link> :
              <>
                <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" ><Link to={`/Users/${User?.result?._id}`}style={{color:"white",textDecoration:"none","width":"12px"}}>{User.result.name.charAt(0)}</Link></Avatar>
                <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
              </>
            }
        </div>
    </nav>
  )
}

export default Navbar