import React,{useEffect, useState} from 'react'
import "./UpdateContact.css"
import {updateContact,getUniqueUser} from '../../api/contact'
import { useNavigate,useParams } from 'react-router';

const UpdateContact = () => {
  const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [adresse,setAdresse]=useState('')
const [age,setAge]=useState(0)
const navigate = useNavigate()
const {id}=useParams()
const handeUpdat=async(idcon,values)=>{
await updateContact(idcon,values)
navigate('/list')
}
// lina partie jiben data unique pour usestate

const getUniqueId=async(conatctid)=>{
const data = await getUniqueUser(conatctid)
console.log("data unique",data.getuniqueuser
)
setName(data.getuniqueuser.name)
setAdresse(data.getuniqueuser.adresse)
setAge(data.getuniqueuser.age)
setEmail(data.getuniqueuser.email)


}
useEffect(()=>{
if(id){getUniqueId(id)}
},[id])
  return (
    <div> <div className='test'>
    <form   id="login-form" class="login-form" autocomplete="off" >
  <h1>Add contact Form</h1>
  <div>
    <label class="label-email">
      <input type="email" class="text" name="email" placeholder="Name" tabindex="1" required  value={name} 
      onChange={(e)=>setName(e.target.value)}   />
      <span class="required">Name</span>
    </label>
  </div>
  <div>
    <label class="label-email">
      <input type="email" class="text" name="age" placeholder="age" tabindex="1" required   value={age} 
      onChange={(e)=>setAge(e.target.value)} />
      <span class="required">Age</span>
    </label>
  </div>
  <div>
    <label class="label-email">
      <input type="email" class="text" name="adresse" placeholder="adresse" tabindex="1" required  value={adresse} 
      onChange={(e)=>setAdresse(e.target.value)} />
      <span class="required">Adresse</span>
    </label>
  </div>
  <div>
    <label class="label-password">
      <input type="text" class="text" name="Email" placeholder="Email" tabindex="2" required  value={email} 
      onChange={(e)=>setEmail(e.target.value)}  />
      <span class="required">Email</span>
    </label>
  </div>
  <div class="email">
    <a><button onClick={()=>handeUpdat(id,{name,age,adresse,email})} >Add New Contact</button></a>
  </div>

</form></div></div>
  )
}

export default UpdateContact