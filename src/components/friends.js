import { array } from 'prop-types';
import React from 'react'
import "./style.css";
export default function Friends(props) {
    return <div class="flex-container">
  <h4>FRIENDS</h4>
    {props.friendsInfo.map(friends => {
      return <div class="flex-container">
                <span><img className="avatar" src={friends.avatar} alt="resim"/></span>
              <div className="card-body">
                <h5>{friends.firstName}  {friends.lastName}</h5>  
                <span>{friends.gender}      {friends.birthday}</span> 
              </div>
           
            </div> 
    })
  }</div>  
}
