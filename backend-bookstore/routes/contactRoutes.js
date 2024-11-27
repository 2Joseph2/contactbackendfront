const express = require('express')
const contactSchema = require('../model/contact')
const contactRoute = express.Router()


//route get  http://localhost:4000/contact/getall

contactRoute.get('/',async(req,res)=>{
    try{
        const contact = await contactSchema.find()
        res.status(200).json({msg : "all contacts" , contact})
    }catch(err){
        console.log(err)
        res.status(500).send("error",err)
    }
})

//route post  http://localhost:4000/contact/addcontact

contactRoute.post('/',async(req,res)=>{
    try{

const newContact = new contactSchema(req.body)

 await newContact.save()

res.status(200).send({msg:"you added ur contact user",newContact})

    }catch(err){
        console.log(err)
    }
})


//route update  http://localhost:4000/contact/update:id
contactRoute.put('/:id',async(req,res)=>{
    try{
        const {id} =req.params

        const updatedUser = await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
   
      res.status(200).send({msg:"sar el upodate go check it fil get route"})
   
    }catch(err){
        console.log(err)
    }
})
//route delete  http://localhost:4000/contact/delete:id
contactRoute.get('/:id',async(req,res)=>{
    try{
    const {id} =req.params

 const getUniqueUser= await contactSchema.findById(id)
res.status(200).send({msg:'voici ton user',getUniqueUser})

    }catch(err){
        console.log(err)
    }

})
//route get  http://localhost:4000/contact/getunique:id

contactRoute.delete('/:id',async(req,res)=>{
    try{
        const {id} =req.params

        const detContact = await contactSchema.findByIdAndDelete(id)
        res.status(200).send({msg:'el contact tfesekh chouf el collevction'})
    }catch(err){
        console.log(err)
    }

})
module.exports = contactRoute
