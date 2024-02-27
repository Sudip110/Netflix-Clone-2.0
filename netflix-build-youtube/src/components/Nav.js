import React,{useState,useEffect} from 'react'
import './Nav.css';
const Nav = () => {
  const[show,handleShow]=useState(false);
  const transitionNavBar =() =>{
    if (window.scrollY>100){
      handleShow(true);
    }else{
      handleShow(false)
    }
    }
    useEffect(()=>{
      window.addEventListener("scroll",transitionNavBar);
      return()=>window.removeEventListener("scroll",transitionNavBar);
  },[])
  return (
    <div className={`nav ${show &&  'nav_black'}`}> 
    <div className='nav_component'>
      <img className="nav_logo"
      src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png" alt="" />
      <img className='nav_avatar'
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
    </div>
    </div>
  )
}

export default Nav