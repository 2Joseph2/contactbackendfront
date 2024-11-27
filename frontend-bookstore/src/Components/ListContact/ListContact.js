import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchContacts} from '../../api/contact'
import {setContact} from '../../store/contactSlice'
import CardContact from './CardContact'
const ListContact = () => {
  //partie redux 
  const contact = useSelector(state=>state.contact)
  console.log(contact,'contact b3ed rabtan bil db')
//partie jiben el data 
const dispatch = useDispatch()
const getContact = async()=>{
  const data = await fetchContacts()
  // console.log(data.contc,'data get unsers ')
  dispatch(setContact(data.contact))
}

useEffect(()=>{
  getContact()
},[])

// //lina el data  heya la partie contact
  return (
    <div >
      {
        contact.map((e)=> <CardContact users={e} getContact={getContact}  /> )
      }
    </div>
  )
}

export default ListContact