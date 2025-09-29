const express=require('express')
const WhychooseRoute=express.Router()
const {Whychoosemodel}=require('../models/Whychoose')

WhychooseRoute.get('/',async (req,res)=>{
    try {
        let data=await Whychoosemodel.find()
        res.send({"data":data})

        
    } catch (error) {
        res.send({'err':error})
        
    }
})
WhychooseRoute.post('/create',async (req,res)=>{
    let payload=req.body
    try {
        let newentry=Whychoosemodel(payload)
        await newentry.save()
        res.send({"msg":'new entry has been register'})

        
    } catch (error) {
        res.send({'err':error})
        
    }
})

module.exports={WhychooseRoute}