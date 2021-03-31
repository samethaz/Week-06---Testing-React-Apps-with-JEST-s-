import React from 'react'
import "./style.css";
export default function Children(props) {
  return <div class="flex-container">
  <h4>CHILDREN</h4>

    {props.childrenInfo.map(child=> {
      return   <div class="flex-container">
                <span><img className="avatar" src={child.avatar} alt="resim"/></span>
                <h5>{child.firstName}  {child.lastName}</h5>  
                <span>{child.gender}      {child.birthday}</span> 
            </div>
    })
  }
 
  </div>
}