
import axios from 'axios'

export const fetchContacts = async()=>{
    const {data} = await axios.get('http://localhost:4000/api/user/')
    return data 
}

export const PostContact =async (values)=>{
    const addingContact = await axios.post('http://localhost:4000/api/user/',{...values})
}

export const updateContact = async(id,values)=>{
    const updated = await axios.put(`http://localhost:4000/api/user/${id}`,values)
}

export const  deleteContact =async(id)=>{
    const deleteduser = await axios.delete(`http://localhost:4000/api/user/${id}`)
}

export const  getUniqueUser=async(id,values)=>{
const {data}= await axios.get(`http://localhost:4000/api/user/${id}`,values)
return data 
}



