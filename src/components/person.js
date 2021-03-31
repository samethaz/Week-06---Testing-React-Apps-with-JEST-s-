import React from "react";
import Children from "./children";
import Friends from "./friends";
import "./style.css";

export default function Person(props) {
  return (props.personList.map((person)=> {
    return <div fluid>
      <div style={{ margin: 30 }}>
        <div>
        <h2>PERSONEL  {person.id} </h2>
      
        <span><img className="avatar" src={person.avatar} alt="resim"/></span>
        <h2 >  {person.first_name}  {person.last_name}</h2>
       
        </div>
        <div style={{ margin: 30 }}>
        <table className="table">
            <thead>
        <tr>
            <th>ADRES</th>
            <th>SALARY</th>
            <th>GENDER</th>
            <th>EMAIL</th>
        </tr>
        </thead>
        <tbody style={{ margin: 30 }}>
        <tr>
            <td>{person.address}</td>
            <td>{person.salary}</td>
            <td>{person.gender}</td>
            <td>{person.email}</td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        <div><Children childrenInfo={person.children}/></div>
        <div><Friends friendsInfo={person.friends}/></div>
        </div>
}))
}