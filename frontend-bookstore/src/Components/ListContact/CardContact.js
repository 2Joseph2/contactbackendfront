import React from 'react'
import "./CardContact.css"
import { useNavigate } from 'react-router';
import {deleteContact} from '../../api/contact'
const CardContact = ({users,getContact}) => {
  console.log(users,'users')
  const navigate=useNavigate()
  const navupdate=()=>{
navigate(`/update/${users._id}`)
  }
  return (
    <div className='hello'>
      <div class="container">
    <div class="card">
      <div class="imgBx">
        <img src="https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/ava-1.png"/>
      </div>
      <div class="contentBx">
        <h2>{users.name}</h2>
        <div class="size">
          <h3>Age :</h3>
          <span>{users.age}</span>
        
        </div>
        <div class="color">
          <h3>email :</h3>
          <span>{users.email}</span>
         
        </div>
        <div class="color">
          <h3>adresse :</h3>
          <span>{users.adresse}</span>
        </div>
        <a href="#"><button onClick={()=>navupdate()}>Update</button></a>
        <a href="#"><button  onClick={async()=>{await deleteContact(users._id);getContact()}} >Delete</button></a>

      </div>
    </div>
  </div></div>
  )
}

export default CardContact